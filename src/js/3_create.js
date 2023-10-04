/* eslint-disable no-undef */
'use strict';
const form = document.querySelector('.js-form');
const btnCreate = document.querySelector('.js-btn-create');
const cardCreated = document.querySelector('.js-card-created');
const cardLink = document.querySelector('.js-card-link');
const linkTwitter = document.querySelector('.js-link-twitter');
const msjError = document.querySelector('.js-msj-error');

const errorName = document.querySelector('.js-err-name');
const errorJob = document.querySelector('.js-err-job');
const errorImg = document.querySelector('.js-err-img');
const errorEmail = document.querySelector('.js-err-email');
const errorPhone = document.querySelector('.js-err-phone');
const errorLinkedin = document.querySelector('.js-err-linkedin');
const errorGithub = document.querySelector('.js-err-github');

const inputsStored = JSON.parse(localStorage.getItem('dataForm'));
const urlPage = 'http://beta.adalab.es/project-promo-U-module-2-team-4/';

function validateFills() {
  const inputEmailVal = inputEmail.value;
  const inputNameVal = inputName.value;
  const inputJobVal = inputJob.value;
  const inputPhoneVal = inputPhone.value;
  const inputGitVal = inputGitHub.value;
  const inputLinkVal = inputLinkedin.value;
  const reText = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+(\s[a-zA-ZÀ-ÖØ-öø-ÿ' -]+){0,4}$/;
  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rePhone = /^\+?(\d.*){3,}$/;
  const reGitHub = /^@[\w]+$/;
  const reLink = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s.-]+$/;

  const isNameValid = validations(reText, inputNameVal, errorName);
  const isJobValid = validations(reText, inputJobVal, errorJob);
  const isEmailValid = validations(reEmail, inputEmailVal, errorEmail);
  const isPhoneValid = validatePhone(rePhone, inputPhoneVal, errorPhone);
  const isGitValid = validations(reGitHub, inputGitVal, errorGithub);
  const isLinkedinValid = validations(reLink, inputLinkVal, errorLinkedin);

  return (
    isNameValid &&
    isJobValid &&
    isEmailValid &&
    isPhoneValid &&
    isGitValid &&
    isLinkedinValid
  );
}

function validatePhone(regex, input, error) {
  if (regex.test(input)) {
    error.innerHTML = '';
    return true;
  } else if (input === '') {
    error.innerHTML = '';
    return true;
  } else {
    error.innerHTML = 'El formato no es válido.';
    return false;
  }
}

function validations(regex, input, error) {
  if (regex.test(input)) {
    error.innerHTML = '';
    return true;
  } else if (input === '') {
    msjError.innerHTML =
      'Rellena todos los campos del formulario. Comprueba que son correctos.';
    error.innerHTML = 'Tienes que rellenar el campo.';

    return false;
  } else {
    error.innerHTML = 'El formato no es válido.';

    return false;
  }
}

function formStored() {
  if (inputsStored) {
    inputName.value = inputsStored.name;
    inputJob.value = inputsStored.job;
    inputEmail.value = inputsStored.email;
    inputPhone.value = inputsStored.phone;
    inputLinkedin.value = inputsStored.linkedin;
    inputGitHub.value = inputsStored.github;
    profilePreview.style.backgroundImage = ` url(${inputsStored.photo}) `;
    profileImage.style.backgroundImage = `url(${inputsStored.photo})`;
    data.photo = inputsStored.photo;
    data.palette = inputsStored.palette;
    if (inputsStored.palette === 1) {
      colors('redcolors', 'greycolors', 'bluecolors');
      inputOption1.checked = true;
    } else if (inputsStored.palette === 2) {
      colors('bluecolors', 'greycolors', 'redcolors');
      inputOption2.checked = true;
    } else {
      colors('bluecolors', 'redcolors', 'greycolors');
      inputOption3.checked = true;
    }

    handleInputFill();
  }
}
formStored();

function handleClickCreate(event) {
  event.preventDefault();
  if (validateFills()) {
    fetch('https://dev.adalab.es/api/card/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.success) {
          console.log(jsonResponse);
          localStorage.setItem('dataForm', JSON.stringify(data));
          cardCreated.classList.remove('hidden');
          btnCreate.classList.add('activeButton');
          errorImg.innerHTML = '';
          errorEmail.innerHTML = '';
          msjError.innerHTML = '';
          cardLink.innerHTML = jsonResponse.cardURL;
          cardLink.href = jsonResponse.cardURL;
          linkTwitter.href = `https://twitter.com/intent/tweet?text=¡Esta%20es%20mi%20tarjeta%20digital!%20Puedes%20verla%20en%20${jsonResponse.cardURL}%20¡Crea%20la%20tuya%20en:%20${urlPage}!%20&hashtags=AwesomeCards,MakeContacts,MakeFuture`;
        } else if (jsonResponse.error === 'Database error: ER_DATA_TOO_LONG') {
          errorImg.innerHTML =
            'La imagen es demasiado grande. Prueba con una de 40kb o menos.';
          msjError.innerHTML =
            'Rellena todos los campos del formulario. Comprueba que son correctos.';
        } else {
          errorImg.innerHTML = 'Tienes que añadir una imagen.';
          msjError.innerHTML =
            'Rellena todos los campos del formulario. Comprueba que son correctos.';
        }
      });
  } else {
    msjError.innerHTML =
      'Rellena todos los campos del formulario. Comprueba que son correctos.';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

btnCreate.addEventListener('click', handleClickCreate);
