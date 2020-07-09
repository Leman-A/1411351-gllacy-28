var feedbackButton = document.querySelector(".button-form-map");
var feedbackPopup = document.querySelector(".feedback-section");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackLogin = feedbackPopup.querySelector(".feedback-name");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    if (storage) {
        feedbackLogin.value = storage;
    } else {
        feedbackLogin.focus();
    }
});
feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
});
feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackLogin.value || !feedbackEmail.value) {
    evt.preventDefault();
} else {
    if (isStorageSupport) {
        localStorage.setItem("login", feedbackLogin.value);
      }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
      }
    }
});