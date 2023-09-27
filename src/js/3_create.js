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
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
//}

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
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.success) {
        localStorage.setItem('dataForm', JSON.stringify(data));
        cardCreated.classList.remove('hidden');
        btnCreate.classList.add('activeButton');
        errorImg.innerHTML = '';
        msjError.innerHTML = '';
        cardLink.innerHTML = jsonResponse.cardURL;
        cardLink.href = jsonResponse.cardURL;
        linkTwitter.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20AwesomeCards%20,%20puedes%20verla%20en%20este%20link%20:&url=${jsonResponse.cardURL}`;
      } else {
        msjError.innerHTML =
          'Rellena todos los campos del formulario. Comprueba que son correctos.';

        if (jsonResponse.error === 'Database error: ER_DATA_TOO_LONG') {
          errorImg.innerHTML =
            'La imagen es demasiado grande. Prueba con una de 40kb o menos.';
        }

        //else if (!validateEmail(inputEmail.value)) {
        //   errorEmail.innerHTML = 'Formato no válido.';
        // } else if (!validateEmail(inputEmail.value)) {
        //     errorEmail.innerHTML = 'Formato no válido.';
        //   }
        console.log(data);
      }
    });
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

btnCreate.addEventListener('click', handleClickCreate);
