//Input Shop

const inShops = document.querySelector(".in-shops");
const outsideShops = document.querySelector(".outside-shops");
const inShop = document.querySelector(".in-shop");
const outsideShop = document.querySelector(".outside-shop");
const iInShop = document.querySelector(".i-inshop");
const iOutsideShop = document.querySelector(".i-outsideshop");

function clickOutsideShops() {
  outsideShops.classList.add("show-shop");
  inShops.classList.add("show-shop");
  iOutsideShop.classList.add("show-shop");
  iInShop.classList.add("show-shop");
}
function clickInShops() {
  outsideShops.classList.remove("show-shop");
  inShops.classList.remove("show-shop");
  iOutsideShop.classList.remove("show-shop");
  iInShop.classList.remove("show-shop");
}

outsideShop.addEventListener("click", clickOutsideShops);
inShop.addEventListener("click", clickInShops);

//Price
const lbPrice = document.querySelector(".lb-price");
const lbPriceHigh = document.querySelector(".lb-high");
const lbPriceShort = document.querySelector(".lb-short");
const liPriceHigh = document.querySelector(".price-high");
const liPriceShort = document.querySelector(".price-short");

function showPriceHigh() {
  lbPrice.classList.add("show-price");
  lbPriceHigh.classList.add("show-price");
  lbPriceShort.classList.remove("show-price");
}
function showPriceShort() {
  lbPrice.classList.add("show-price");
  lbPriceShort.classList.add("show-price");
  lbPriceHigh.classList.remove("show-price");
}

liPriceHigh.addEventListener("click", showPriceHigh);
liPriceShort.addEventListener("click", showPriceShort);

//Button sorted by

const btnPoppular = document.querySelector(".btn-poppular");
const btnLastest = document.querySelector(".btn-lastest");
const btnSelling = document.querySelector(".btn-selling");

function changButtonPoppularPrimary() {
  btnPoppular.classList.add("btn--primary");
  btnLastest.classList.remove("btn--primary");
  btnSelling.classList.remove("btn--primary");
}
function changButtonLastestPrimary() {
  btnLastest.classList.add("btn--primary");
  btnSelling.classList.remove("btn--primary");
  btnPoppular.classList.remove("btn--primary");
}
function changButtonSellingPrimary() {
  btnSelling.classList.add("btn--primary");
  btnPoppular.classList.remove("btn--primary");
  btnLastest.classList.remove("btn--primary");
}

btnPoppular.addEventListener("click", changButtonPoppularPrimary);
btnLastest.addEventListener("click", changButtonLastestPrimary);
btnSelling.addEventListener("click", changButtonSellingPrimary);

//Change language

const languageVn = document.querySelector(".language-vn");
const languageEl = document.querySelector(".language-el");
const pVn = document.querySelector(".p-vn");
const pEl = document.querySelector(".p-el");

function clickLanguageEl() {
  languageEl.classList.add("show-language");
  languageVn.classList.add("show-language");
}
function clickLanguageVn() {
  languageEl.classList.remove("show-language");
  languageVn.classList.remove("show-language");
}
pEl.addEventListener("click", clickLanguageEl);
pVn.addEventListener("click", clickLanguageVn);