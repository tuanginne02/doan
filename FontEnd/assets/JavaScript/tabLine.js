const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".sort__bar_item");

const tabActive = $(".sort__bar_item.tab--active");
const line = $(".header__sort_bar .tab__line");

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab) => {
  tab.onclick = function () {
    $(".sort__bar_item.tab--active").classList.remove("tab--active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("tab--active");
  };
});

// number bottom content

let likeButtons = document.querySelectorAll(".lirke");
const btnLikes = document.querySelectorAll(".btn-heart");
const idLike = document.getElementById("1,2,2")
likeButtons.forEach((ele) => {
  ele.addEventListener("click", likeButtonClick);
});
// Add class on button click
function likeButtonClick() {
  btnLikes.forEach((ele) => {
    ele.classList.toggle("btn-like");
  });
}
