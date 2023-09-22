/* eslint-disable no-undef */
'use strict';
//queryselector
const designLegend = document.querySelector('.js-design-legend');
const fillLegend = document.querySelector('.js-fill-legend');
const shareLegend = document.querySelector('.js-share-legend');

const designForm = document.querySelector('.js-design-form');
const fillForm = document.querySelector('.js-fill-form');
const shareForm = document.querySelector('.js-share-form');

const inputName = document.querySelector('.js-input-name');
const previewName = document.querySelector('.js-preview-name');
const inputJob = document.querySelector('.js-input-job');
const previewJob = document.querySelector('.js-preview-job');
const inputEmail = document.querySelector('.js-input-email');
const previewEmail = document.querySelector('.js-preview-email');
const inputPhone = document.querySelector('.js-input-phone');
const previewPhone = document.querySelector('.js-preview-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const inputGitHub = document.querySelector('.js-input-GitHub');
const previewGitHub = document.querySelector('.js-preview-GitHub');

const btnDelete = document.querySelector('.js-btn-delete');

const inputOption1 = document.querySelector('.js-input-option1');

const inputOption2 = document.querySelector('.js-input-option2');

const inputOption3 = document.querySelector('.js-input-option3');

const previewContainer = document.querySelector('.js-preview-container');

const btnCreate = document.querySelector('.js-btn-create');
const cardCreated = document.querySelector('.js-card-created');

const msjError = document.querySelector('.js-msj-error');

//objetos

const data = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

//functions

function openDesign() {
  designForm.classList.remove('collapsed');
}
function closeDesign() {
  designForm.classList.add('collapsed');
}
function openFill() {
  fillForm.classList.remove('collapsed');
}

function closeFill() {
  fillForm.classList.add('collapsed');
}

function openShare() {
  shareForm.classList.remove('collapsed');
}
function closeShare() {
  shareForm.classList.add('collapsed');
}

function handleClickDesignLegend() {
  closeFill();
  closeShare();
  openDesign();
}
function handleClickFillLegend() {
  closeShare();
  closeDesign();
  openFill();
}

function handleClickShareLegend() {
  closeFill();
  closeDesign();
  openShare();
}

const fillDefaultName = () => (previewName.innerHTML = 'Nombre Apellido');

const fillDefaultJob = () => (previewJob.innerHTML = 'Front-end developer');

const fillName = () => {
  previewName.innerHTML = inputName.value;
  data.name = inputName.value;
};

const fillJob = () => {
  previewJob.innerHTML = inputJob.value;
  data.job = inputJob.value;
};

const fillEmail = () => {
  previewEmail.href = `mailto:${inputEmail.value}`;
  data.email = inputEmail.value;
};

const fillPhone = () => {
  previewPhone.href = `tel:${inputPhone.value}`;
  data.phone = inputPhone.value;
};
const fillLinkedin = () => {
  previewLinkedin.href = `https://www.${inputLinkedin.value}/`;
  data.linkedin = inputLinkedin.value;
};

const fillGitHub = () => {
  previewGitHub.href = `https://github.com/${inputGitHub.value.substring(1)}`;
  data.github = inputGitHub.value;
};

function handleInputFill() {
  if (inputName.value === '') {
    fillDefaultName();
  } else {
    fillName();
  }

  if (inputJob.value === '') {
    fillDefaultJob();
  } else {
    fillJob();
  }
  fillEmail();
  fillPhone();
  fillLinkedin();
  fillGitHub();
}

function colors(remove1, remove2, add) {
  previewContainer.classList.remove(`${remove1}`);
  previewContainer.classList.remove(`${remove2}`);
  previewContainer.classList.add(`${add}`);
}

function handleInputColors(event) {
  if (event.target === inputOption1) {
    colors('redcolors', 'greycolors', 'bluecolors');
    data.palette = 1;
  }
  if (event.target === inputOption2) {
    colors('bluecolors', 'greycolors', 'redcolors');
    data.palette = 2;
  }
  if (event.target === inputOption3) {
    colors('bluecolors', 'redcolors', 'greycolors');
    data.palette = 3;
  }
}
function handleClickDelete() {
  //lleva a data a su estado inicial.
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  previewEmail.href = '#';
  inputPhone.value = '';
  previewPhone.href = '#';
  inputLinkedin.value = '';
  previewLinkedin.href = '#';
  inputGitHub.value = '';
  previewGitHub.href = '#';

  profileImage.style.backgroundImage = '';
  profileImage.classList.add('default-image');
  profilePreview.style.backgroundImage = '';

  fillDefaultJob();
  colors('redcolors', 'greycolors', 'bluecolors'); // cambiar color por el predefinido.
  data.palette = 1;
  data.name = '';
  data.job = '';
  data.phone = '';
  data.email = '';
  data.github = '';
  data.linkedin = '';
  data.photo = '';
  inputOption1.checked = true; //volver a ponerse el primer radio button como predefinido
  cardCreated.classList.add('hidden');
  btnCreate.classList.remove('activeButton');
}

function handleClickCreate(event) {
  event.preventDefault();
  if (
    inputName.value === '' ||
    inputJob.value === '' ||
    inputEmail.value === '' ||
    inputPhone.value === '' ||
    inputLinkedin.value === '' ||
    inputGitHub.value === ''
  ) {
    msjError.innerHTML =
      '¡¡RELLENA TU PUTA TARJETA ANTES DE COMPARTIRLA, GILIPOLLAS!! ;)';
  } else {
    cardCreated.classList.remove('hidden');
    btnCreate.classList.add('activeButton');
  }
}
//Eventos
fillForm.addEventListener('input', handleInputFill);

btnDelete.addEventListener('click', handleClickDelete);

designLegend.addEventListener('click', handleClickDesignLegend);

fillLegend.addEventListener('click', handleClickFillLegend);

shareLegend.addEventListener('click', handleClickShareLegend);

designForm.addEventListener('input', handleInputColors);

btnCreate.addEventListener('click', handleClickCreate);
