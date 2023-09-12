'use strict';
//queryselector
const designLegend = document.querySelector('.js-design-legend');
const fillLegend = document.querySelector('.js-fill-legend');
const shareLegend = document.querySelector('.js-share-legend');

const designForm = document.querySelector('.js-design-form');
const fillForm = document.querySelector('.js-fill-form');
const shareForm = document.querySelector('.js-share-form');

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
  console.log('holi');
  closeFill();
  closeShare();
  openDesign();
}
function handleClickFillLegend() {
  console.log('holi2');
  closeShare();
  closeDesign();
  openFill();
}

function handleClickShareLegend() {
  console.log('holi3');
  closeFill();
  closeDesign();
  openShare();
}

designLegend.addEventListener('click', handleClickDesignLegend);
fillLegend.addEventListener('click', handleClickFillLegend);
shareLegend.addEventListener('click', handleClickShareLegend);
