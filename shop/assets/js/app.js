


var $ = document;

var userNameInput = $.querySelector(".userName");
var userNameError = $.querySelector(".userNameError");

var userPasswordInput = $.querySelector(".userPassword");
var userPasswordError = $.querySelector(".userPasswordError");

function userNameValidate() {
  if (userNameInput.value.length < 8) {
    userNameError.innerHTML = "نام کاربری شما باید حداقل 8 کارکتر داشته باشد";
  } else {
    userNameError.innerHTML = "";
  }
}

function userPasswordValidate() {
  if (userPasswordInput.value.length < 8) {
    userPasswordError.innerHTML = "رمز عبور شما باید حداقل 8 کارکتر داشته باشد";
  } else {
    userPasswordError.innerHTML = "";
  }
}

// for See the Password in form login
var passwordField = _query(".password-field");
var togglePassword = _query(".toggle-password");
var iconEyeSlash = _query(".fa-eye-slash");
var iconEye = _query(".fa-eye");
iconEye.style.display = "none";

function toggle() {
  if (passwordField.type == "password") {
    passwordField.type = "text";
    iconEye.style.display = "block";
    iconEyeSlash.style.display = "none";
  } else {
    passwordField.type = "password";
    iconEye.style.display = "none";
    iconEyeSlash.style.display = "block";
  }
  passwordField.style.marginRight = "14px";
}