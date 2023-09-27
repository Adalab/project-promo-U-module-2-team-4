"use strict";const designLegend=document.querySelector(".js-design-legend"),fillLegend=document.querySelector(".js-fill-legend"),shareLegend=document.querySelector(".js-share-legend"),designForm=document.querySelector(".js-design-form"),fillForm=document.querySelector(".js-fill-form"),shareForm=document.querySelector(".js-share-form"),inputName=document.querySelector(".js-input-name"),previewName=document.querySelector(".js-preview-name"),inputJob=document.querySelector(".js-input-job"),previewJob=document.querySelector(".js-preview-job"),inputEmail=document.querySelector(".js-input-email"),previewEmail=document.querySelector(".js-preview-email"),inputPhone=document.querySelector(".js-input-phone"),previewPhone=document.querySelector(".js-preview-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),previewLinkedin=document.querySelector(".js-preview-linkedin"),inputGitHub=document.querySelector(".js-input-GitHub"),previewGitHub=document.querySelector(".js-preview-GitHub"),inputOption1=document.querySelector(".js-input-option1"),inputOption2=document.querySelector(".js-input-option2"),inputOption3=document.querySelector(".js-input-option3"),previewContainer=document.querySelector(".js-preview-container"),data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function openDesign(){designForm.classList.remove("collapsed")}function closeDesign(){designForm.classList.add("collapsed")}function openFill(){fillForm.classList.remove("collapsed")}function closeFill(){fillForm.classList.add("collapsed")}function openShare(){shareForm.classList.remove("collapsed")}function closeShare(){shareForm.classList.add("collapsed")}function handleClickDesignLegend(){closeFill(),closeShare(),openDesign()}function handleClickFillLegend(){closeShare(),closeDesign(),openFill()}function handleClickShareLegend(){closeFill(),closeDesign(),openShare()}const fillDefaultName=()=>previewName.innerHTML="Nombre Apellido",fillDefaultJob=()=>previewJob.innerHTML="Front-end developer",fillName=()=>{previewName.innerHTML=inputName.value,data.name=inputName.value},fillJob=()=>{previewJob.innerHTML=inputJob.value,data.job=inputJob.value},fillEmail=()=>{previewEmail.href="mailto:"+inputEmail.value,data.email=inputEmail.value},fillPhone=()=>{previewPhone.href="tel:"+inputPhone.value,data.phone=inputPhone.value},fillLinkedin=()=>{previewLinkedin.href=`https://www.linkedin.com/in/${inputLinkedin.value}/`,data.linkedin=inputLinkedin.value},fillGitHub=()=>{previewGitHub.href="https://github.com/"+inputGitHub.value.substring(1),data.github=inputGitHub.value.substring(1)};function handleInputFill(){""===inputName.value?fillDefaultName():(previewName.innerHTML=inputName.value,data.name=inputName.value),""===inputJob.value?fillDefaultJob():(previewJob.innerHTML=inputJob.value,data.job=inputJob.value),previewEmail.href="mailto:"+inputEmail.value,data.email=inputEmail.value,previewPhone.href="tel:"+inputPhone.value,data.phone=inputPhone.value,previewLinkedin.href=`https://www.linkedin.com/in/${inputLinkedin.value}/`,data.linkedin=inputLinkedin.value,previewGitHub.href="https://github.com/"+inputGitHub.value.substring(1),data.github=inputGitHub.value.substring(1)}function colors(e,t,r){previewContainer.classList.remove(""+e),previewContainer.classList.remove(""+t),previewContainer.classList.add(""+r)}function handleInputColors(e){e.target===inputOption1&&(colors("redcolors","greycolors","bluecolors"),data.palette=1),e.target===inputOption2&&(colors("bluecolors","greycolors","redcolors"),data.palette=2),e.target===inputOption3&&(colors("bluecolors","redcolors","greycolors"),data.palette=3)}fillForm.addEventListener("input",handleInputFill),designLegend.addEventListener("click",handleClickDesignLegend),fillLegend.addEventListener("click",handleClickFillLegend),shareLegend.addEventListener("click",handleClickShareLegend),designForm.addEventListener("input",handleInputColors);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);const btnDelete=document.querySelector(".js-btn-delete");function handleClickDelete(){inputName.value="",inputJob.value="",inputEmail.value="",previewEmail.href="#",inputPhone.value="",previewPhone.href="#",inputLinkedin.value="",previewLinkedin.href="#",inputGitHub.value="",previewGitHub.href="#",profileImage.style.backgroundImage="",profileImage.classList.add("default-image"),profilePreview.style.backgroundImage="",fillDefaultJob(),colors("redcolors","greycolors","bluecolors"),data.palette=1,data.name="",data.job="",data.phone="",data.email="",data.github="",data.linkedin="",data.photo="",inputOption1.checked=!0,cardCreated.classList.add("hidden"),btnCreate.classList.remove("activeButton"),fillDefaultName(),msjError.innerHTML="",localStorage.removeItem("dataForm")}btnDelete.addEventListener("click",handleClickDelete);const form=document.querySelector(".js-form"),btnCreate=document.querySelector(".js-btn-create"),cardCreated=document.querySelector(".js-card-created"),cardLink=document.querySelector(".js-card-link"),linkTwitter=document.querySelector(".js-link-twitter"),msjError=document.querySelector(".js-msj-error"),errorName=document.querySelector(".js-err-name"),errorJob=document.querySelector(".js-err-job"),errorImg=document.querySelector(".js-err-img"),errorEmail=document.querySelector(".js-err-email"),errorPhone=document.querySelector(".js-err-phone"),errorLinkedin=document.querySelector(".js-err-linkedin"),errorGithub=document.querySelector(".js-err-github"),inputsStored=JSON.parse(localStorage.getItem("dataForm"));function formStored(){inputsStored&&(inputName.value=inputsStored.name,inputJob.value=inputsStored.job,inputEmail.value=inputsStored.email,inputPhone.value=inputsStored.phone,inputLinkedin.value=inputsStored.linkedin,inputGitHub.value=inputsStored.github,profilePreview.style.backgroundImage=` url(${inputsStored.photo}) `,profileImage.style.backgroundImage=`url(${inputsStored.photo})`,data.photo=inputsStored.photo,data.palette=inputsStored.palette,1===inputsStored.palette?(colors("redcolors","greycolors","bluecolors"),inputOption1.checked=!0):2===inputsStored.palette?(colors("bluecolors","greycolors","redcolors"),inputOption2.checked=!0):(colors("bluecolors","redcolors","greycolors"),inputOption3.checked=!0),handleInputFill())}function handleClickCreate(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{e.success?(localStorage.setItem("dataForm",JSON.stringify(data)),cardCreated.classList.remove("hidden"),btnCreate.classList.add("activeButton"),errorImg.innerHTML="",msjError.innerHTML="",cardLink.innerHTML=e.cardURL,cardLink.href=e.cardURL,linkTwitter.href="https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20AwesomeCards%20,%20puedes%20verla%20en%20este%20link%20:&url="+e.cardURL):(msjError.innerHTML="Rellena todos los campos del formulario. Comprueba que son correctos.","Database error: ER_DATA_TOO_LONG"===e.error&&(errorImg.innerHTML="La imagen es demasiado grande. Prueba con una de 40kb o menos."),console.log(data))})}formStored(),form.addEventListener("submit",e=>{e.preventDefault()}),btnCreate.addEventListener("click",handleClickCreate);