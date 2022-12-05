//============slider banner
let couterIndex = 0;
showCouter(couterIndex);
// Next/previous controls
function plusSlides(n) {
  showCouter(couterIndex);
}
// Thumbnail image controls
function currentSlide(n) {
  showCouter(couterIndex);
}
function showCouter(n) {
  let i;
  let couter = document.getElementsByClassName("slider__img");
  let manualBtn = document.getElementsByClassName("manual-btn");
  if (n > couter.length) {
    couterIndex = 1;
  }
  if (n < 1) {
    couterIndex = couter.length;
  }
  for (i = 0; i < couter.length; i++) {
    couter[i].style.display = "none";
  }
  couterIndex++;
  if (couterIndex > couter.length) {
    couterIndex = 1;
  }
  for (i = 0; i < manualBtn.length; i++) {
    manualBtn[i].className = manualBtn[i].className.replace(" active", "");
  }
  couter[couterIndex - 1].style.display = "block";
  manualBtn[couterIndex - 1].className += " active";
  setTimeout(showCouter, 5000);
}
// Focus search results

const inputFocus = document.getElementById("search-input");
const btnFocus = document.getElementById("btn-focus");
const resultFocus = document.getElementById("result");

btnFocus.addEventListener("click", function (e) {
  // Storing data:
  var data = {
    inputFocus: inputFocus.value,
  };
  const myJSON = JSON.stringify(data);
  localStorage.setItem("btn-focus", myJSON);
  // Storing data:
  let text = localStorage.getItem("btn-focus");
  let obj = JSON.parse(text);
  //clear input
  inputFocus.value = "";
  //save item
  var e = obj.inputFocus;
  for (var y = 0; (y = data.length); y++) {
    e.value = data[y].value;
  }
  var tag = document.createElement("a");
  // var btn = document.createElement("button");
  // btn.id = "::img";
  // btn.style.cssText =
  //   "width:20px;height:20px;border:1px  solid balck; margin-top: 10px";
  var texts = document.createTextNode(e);
  // var btns = document.createTextNode("x");
  tag.appendChild(texts);
  // btn.appendChild(btns);
  var elment = document.getElementById("newItems");
  elment.appendChild(tag);
  // elment.appendChild(btn);

  //remove item
});

////------------------------------------------------------------
