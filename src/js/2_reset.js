'use strict';
const btnDelete = document.querySelector('.js-btn-delete');

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

btnDelete.addEventListener('click', handleClickDelete);
