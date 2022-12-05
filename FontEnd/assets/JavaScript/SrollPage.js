// HandleScroll
//Get the Top button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2050 ||
    document.documentElement.scrollTop > 2050
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 ; // For Safari scrollTop = 0
  document.documentElement.scrollTop = 0;   // For Chrome, Firefox, IE and Opera

}

mybutton.addEventListener("click", topFunction);
// chang buttom page top

const btnNubPrev = document.querySelector(".btn-nub-prev");
const btnNubNext = document.querySelector(".btn-nub-nex");

function hiddenDicsibale() {
  btnNubNext.classList.add("home__filter_page--btn-disibale");
  btnNubPrev.classList.remove("home__filter_page--btn-disibale");
}
function showDicsibale() {
  btnNubNext.classList.remove("home__filter_page--btn-disibale");
  btnNubPrev.classList.add("home__filter_page--btn-disibale");
}
btnNubPrev.addEventListener("click", hiddenDicsibale);
btnNubNext.addEventListener("click", showDicsibale);

//change number page topp

function nextValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  if (value < 15) {
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById("number").value = value;
  }
}

function prevValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  if (value > 1) {
    value = isNaN(value) ? 1 : value;
    value--;
    document.getElementById("number").value = value;
  }
}

/// Change Color Bottom Navbar
//selector
const ihome = document.querySelector("#ihome");
const phome = document.querySelector("#phome");
const ahome = document.querySelector("#ahome");
const imail = document.querySelector("#imail");
const pmail = document.querySelector("#pmail");
const amail = document.querySelector("#amail");
const ilive = document.querySelector("#ilive");
const plive = document.querySelector("#plive");
const alive = document.querySelector("#alive");
const ithongbao = document.querySelector("#ithongbao");
const pthongbao = document.querySelector("#pthongbao");
const athongbao = document.querySelector("#athongbao");
const itoi = document.querySelector("#itoi");
const ptoi = document.querySelector("#ptoi");
const atoi = document.querySelector("#atoi");
//--------------------------------------------------
// function
//Home
ahome.addEventListener("click", () => {
  ihome.classList.add("mobile-active");
  phome.classList.add("mobile-active");
  imail.classList.remove("mobile-active");
  pmail.classList.remove("mobile-active");
  ilive.classList.remove("mobile-active");
  plive.classList.remove("mobile-active");
  ithongbao.classList.remove("mobile-active");
  pthongbao.classList.remove("mobile-active");
  itoi.classList.remove("mobile-active");
  ptoi.classList.remove("mobile-active");
});

//Mail
amail.addEventListener("click", () => {
  imail.classList.add("mobile-active");
  pmail.classList.add("mobile-active");
  ihome.classList.remove("mobile-active");
  phome.classList.remove("mobile-active");
  ilive.classList.remove("mobile-active");
  plive.classList.remove("mobile-active");
  ithongbao.classList.remove("mobile-active");
  pthongbao.classList.remove("mobile-active");
  itoi.classList.remove("mobile-active");
  ptoi.classList.remove("mobile-active");
});
//Live
alive.addEventListener("click", () => {
  plive.classList.add("mobile-active");
  ilive.classList.add("mobile-active");
  pmail.classList.remove("mobile-active");
  imail.classList.remove("mobile-active");
  ihome.classList.remove("mobile-active");
  phome.classList.remove("mobile-active");
  ithongbao.classList.remove("mobile-active");
  pthongbao.classList.remove("mobile-active");
  itoi.classList.remove("mobile-active");
  ptoi.classList.remove("mobile-active");
});
//Thông Báo
athongbao.addEventListener("click", () => {
  ithongbao.classList.add("mobile-active");
  pthongbao.classList.add("mobile-active");
  imail.classList.remove("mobile-active");
  pmail.classList.remove("mobile-active");
  ihome.classList.remove("mobile-active");
  phome.classList.remove("mobile-active");
  ilive.classList.remove("mobile-active");
  plive.classList.remove("mobile-active");
  itoi.classList.remove("mobile-active");
  ptoi.classList.remove("mobile-active");
});
//Toi
atoi.addEventListener("click", () => {
  itoi.classList.add("mobile-active");
  ptoi.classList.add("mobile-active");
  imail.classList.remove("mobile-active");
  pmail.classList.remove("mobile-active");
  ihome.classList.remove("mobile-active");
  phome.classList.remove("mobile-active");
  ilive.classList.remove("mobile-active");
  plive.classList.remove("mobile-active");
  ithongbao.classList.remove("mobile-active");
  pthongbao.classList.remove("mobile-active");
});

//------------------------------------------------------------------------
//Show Logo More
const showLogoMore = document.querySelector(".logo-show");
const heightLogoMore = document.querySelector(".grid__heading_items");
showLogoMore.addEventListener("click", () => {
  heightLogoMore.classList.add("showlogo");
});

//Hearder with Search Mobile

const lienQuan = document.querySelector("#lienquan");
const liLienQuan = document.querySelector("#lilienquan");
const moiNhat = document.querySelector("#moinhat");
const liMoiNhat = document.querySelector("#limoinhat");
const banChay = document.querySelector("#banchay");
const liBanChay = document.querySelector("#libanchay");
const gia = document.querySelector("#gia");
const liGia = document.querySelector("#ligia");

liLienQuan.addEventListener("click", () => {
  lienQuan.classList.add("sort__bar_item--active");
  moiNhat.classList.remove("sort__bar_item--active");
  banChay.classList.remove("sort__bar_item--active");
  gia.classList.remove("sort__bar_item--active");
});

liMoiNhat.addEventListener("click", () => {
  moiNhat.classList.add("sort__bar_item--active");
  lienQuan.classList.remove("sort__bar_item--active");
  banChay.classList.remove("sort__bar_item--active");
  gia.classList.remove("sort__bar_item--active");
});
liBanChay.addEventListener("click", () => {
  banChay.classList.add("sort__bar_item--active");
  lienQuan.classList.remove("sort__bar_item--active");
  moiNhat.classList.remove("sort__bar_item--active");
  gia.classList.remove("sort__bar_item--active");
});
liGia.addEventListener("click", () => {
  gia.classList.add("sort__bar_item--active");
  lienQuan.classList.remove("sort__bar_item--active");
  moiNhat.classList.remove("sort__bar_item--active");
  banChay.classList.remove("sort__bar_item--active");
});
//-------------------------------

