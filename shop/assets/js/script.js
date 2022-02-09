var $ = document;

// from line 4 to 7 for hamber menu
var hamber = $.querySelector(".main-hamber");
function hamberMenu() {
  hamber.classList.toggle("display");
}

// from line 10 to 16 is for add to card product
var ValueAddP = 0;
var New;

function myFuncAddNum() {
  var Add = $.querySelector(".icon-shop-num-p");
  New = Add.innerHTML = Number(Add.innerHTML) + 1;
}

// frome line 18 to 53 is for login and regester form
var Reg = $.querySelector(".regester");
var Login = $.querySelector(".login");
reg.style.display = "none";

function regester() {
  Login.style.display = "none";
  Reg.style.display = "flex";
}

function login() {
  Login.style.display = "flex";
  Reg.style.display = "none";
}

var userNameInput = $.querySelector(".userName");
var userNameError = $.querySelector(".userNameError");

var userPasswordInput = $.querySelector(".userPassword");
var userpasswordError = $.querySelector(".userpasswordError");

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
