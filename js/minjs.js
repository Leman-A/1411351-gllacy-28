var feedbackButton=document.querySelector(".button-form-map"),feedbackPopup=document.querySelector(".feedback-section"),feedbackClose=feedbackPopup.querySelector(".modal-close"),feedbackForm=feedbackPopup.querySelector(".feedback-form"),feedbackLogin=feedbackPopup.querySelector(".feedback-name"),feedbackEmail=feedbackPopup.querySelector(".feedback-email"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.add("modal-show"),storage?feedbackLogin.value=storage:feedbackLogin.focus()}),feedbackClose.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.remove("modal-show")}),feedbackForm.addEventListener("submit",function(e){feedbackLogin.value&&feedbackEmail.value?isStorageSupport&&localStorage.setItem("login",feedbackLogin.value):e.preventDefault()}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackPopup.classList.contains("modal-show")&&(e.preventDefault(),feedbackPopup.classList.remove("modal-show"))});