var $ = document;

function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}

function _query(class_name) {
  return $.querySelector(class_name);
}

// from line 4 to 7 for hamber menu
var hamber = _query(".main-hamber");
function hamberMenu() {
  hamber.classList.toggle("display");
}

// from line 10 to 16 is for add to card product
var ValueAddP = 0;
var New;

function myFuncAddNum() {
  var Add = _query(".icon-shop-num-p");
  New = Add.innerHTML = Number(Add.innerHTML) + 1;
}

// frome line 18 to 53 is for login and regester form
var Reg = _query(".regester");
var Login = _query(".login");
reg.style.display = "none";

function regester() {
  Login.style.display = "none";
  Reg.style.display = "flex";
}

function login() {
  Login.style.display = "flex";
  Reg.style.display = "none";
}

var userNameInput = _query(".userName");
var userNameError = _query(".userNameError");

var userPasswordInput = _query(".userPassword");
var userpasswordError = _query(".userpasswordError");

function userNameValidate() {
  if (userNameInput.value.length < 8) {
    userNameError.innerHTML = "نام کاربری شما باید حداقل 8 کارکتر داشته باشد";
  } else {
    userNameError.innerHTML = "";
  }
}

function userPasswordValidate() {
  if (userPasswordInput.value.length < 8) {
    userpasswordError.innerHTML = "رمز عبور شما باید حداقل 8 کارکتر داشته باشد";
  } else {
    userpasswordError.innerHTML = "";
  }
}
