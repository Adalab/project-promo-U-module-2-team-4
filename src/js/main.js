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

const btnDelete = document.querySelector('.js-btn-delete');

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

const fillName = () => (previewName.innerHTML = 'Nombre Apellido');

const fillJob = () => (previewJob.innerHTML = 'Front-end developer');

const fillEmail = () => {
  previewEmail.href = `mailto:${inputEmail.value}`;
};

function handleInput() {
  if (inputName.value === '') {
    fillName();
  } else {
    previewName.innerHTML = inputName.value;
  }

  if (inputJob.value === '') {
    fillJob();
  } else {
    previewJob.innerHTML = inputJob.value;
  }
  fillEmail();
}

function handleClickDelete() {
  inputName.value = '';
  inputJob.value = '';
  fillName();
  fillJob();
}

//Eventos
fillForm.addEventListener('input', handleInput);

btnDelete.addEventListener('click', handleClickDelete);

designLegend.addEventListener('click', handleClickDesignLegend);

fillLegend.addEventListener('click', handleClickFillLegend);

shareLegend.addEventListener('click', handleClickShareLegend);
