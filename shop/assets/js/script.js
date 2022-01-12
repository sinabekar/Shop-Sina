var $ = document;

// from line 4 to 14 for hamber menu
function myFunction() {
  var hamber = $.querySelector(".main-hamber");
  hamber.style.display = "flex";
}

function myFunctionClose() {
  var hamber = $.querySelector(".main-hamber");
  if (hamber.style.display == "flex") {
    hamber.style.display = "none";
  }
}

// from line 18 to 35 for add to card product
var ValueAddP = 0;
var New;

function myFuncAddNum() {
  var Add = $.querySelector(".icon-shop-num-p");
  New = Add.innerHTML = Number(Add.innerHTML) + 1;
}

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
