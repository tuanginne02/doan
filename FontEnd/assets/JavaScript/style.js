///Base modal
// Chang Value
// onclick pc
const focusLi = document.querySelector(".register");
const focusLis = document.querySelector(".login");
// onclick tablet
const tabletFocusLi = document.querySelector(".tablet-register");
const tabletocusLis = document.querySelector(".tablet-login");
//onclick mobile
const mobileClick = document.querySelector(".click-mobile");
// modal
const modal = document.querySelector(".js-modal");
// 2 Option modal
const modalRegister = document.querySelector(".js-register");
const modalLogin = document.querySelector(".js-login");
//  form sub register - login
const formMobie = document.querySelector(".js-mobile");
// 2 mobile form sub register - login
const btnMobileRegister = document.querySelector(".btn-register");
const btnMobileLogin = document.querySelector(".btn-login");

// 2 close_modal
const modalCloseRegister = document.querySelector(".close_modals");
const modalCloseLogin = document.querySelector(".close_modal");

//all close_modals
const modalBody = document.querySelector(".js-modal-body");
//============================================================
// //Submit Login and Register pC
const submitLogin = document.querySelector(".submit-login");
const submitRegister = document.querySelector(".submit-register");
const noSubmit = document.querySelector(".user-no-submit");
const userSubmit = document.querySelector(".user-submit");
const submitLogged = document.querySelector(".submit-logged");
const unSubmitLogged = document.querySelector(".unsubmit-logged");
const noCart = document.querySelector(".no-cart");
const moneyCart = document.querySelector(".money-cart");
//tablet
const tabletNoSubmit = document.querySelector(".tablet-no-submit");
const tabletUserSubmit = document.querySelector(".tablet-user-submit");
//====================================================================
// Exit User
const exitUser = document.querySelector(".exit-user");
const exitTabletUser = document.querySelector(".tablet-exit-user");
const exitMobiletUser = document.querySelector(".mobile-exit-user");

//===============================================================
//Disibale Button Login -Register
const dsBtnColor = document.querySelector(".btn--primary");
//user mobile
const showUserMobile = document.querySelector(".mobile-user-submit");
const clickExitUserMobile = document.querySelector(".mobile-exit-user");

//------------------------------------------------
/// Create function
//Pc
function showModalRegister() {
  modal.classList.add("open");
  modalRegister.classList.add("show");
  modalLogin.classList.remove("show");
  formMobie.classList.remove("showMobile");
}
function showModalLogin() {
  modal.classList.add("open");
  modalRegister.classList.remove("show");
  modalLogin.classList.add("show");
  formMobie.classList.remove("showMobile");
}
//click form sub register - login
function showFormMobile() {
  modal.classList.add("open");
  formMobie.classList.add("showMobile");
}
function showModalRegisterMobile() {
  // modal.classList.add("open");
  formMobie.classList.remove("showMobile");
  modalLogin.classList.remove("show");
  modalRegister.classList.add("show");
}
function showModalLoginMobile() {
  // modal.classList.add("open");
  modalRegister.classList.remove("show");
  modalLogin.classList.add("show");
  formMobie.classList.remove("showMobile");
}

function hideModal() {
  modal.classList.remove("open");
  modalRegister.classList.remove("show");
  modalLogin.classList.remove("show");
  formMobie.classList.remove("showMobile");
}
//=================================================================
//Submit Login and Register PC

function hideShowSubmitLogin() {
  modal.classList.remove("open");
  userSubmit.classList.add("submit");
  noSubmit.classList.add("noSubmit");
  submitLogged.classList.add("show-logged");
  unSubmitLogged.classList.add("show-logged");
  noCart.classList.add("show-cart");
  moneyCart.classList.add("show-cart");
}
function hideShowSubmitRegister() {
  modal.classList.remove("open");
  userSubmit.classList.add("submit");
  noSubmit.classList.add("noSubmit");
  submitLogged.classList.add("show-logged");
  unSubmitLogged.classList.add("show-logged");
  noCart.classList.add("show-cart");
  moneyCart.classList.add("show-cart");
}
// Submit Login and Register Tablet
function hideShowTabletSubmitLogin() {
  modal.classList.remove("open");
  tabletUserSubmit.classList.add("showTablet");
  tabletNoSubmit.classList.add("showTablet");
  noCart.classList.add("show-cart");
  moneyCart.classList.add("show-cart");
}
function hideShowTabletSubmitRegister() {
  modal.classList.remove("open");
  tabletUserSubmit.classList.add("showTablet");
  tabletNoSubmit.classList.add("showTablet");
  noCart.classList.add("show-cart");
  moneyCart.classList.add("show-cart");
}
function hideShowMobileSubmitLoginRegister() {
  showUserMobile.classList.add("showMobileUser");
}

//====================================================================
//PC
function clickExitUser() {
  userSubmit.classList.remove("submit");
  noSubmit.classList.remove("noSubmit");
  submitLogged.classList.remove("show-logged");
  unSubmitLogged.classList.remove("show-logged");
  noCart.classList.remove("show-cart");
  moneyCart.classList.remove("show-cart");
}
//Tablet
function clickTabletExitUser() {
  tabletUserSubmit.classList.remove("showTablet");
  tabletNoSubmit.classList.remove("showTablet");
  noCart.classList.remove("show-cart");
  moneyCart.classList.remove("show-cart");
}
//Mobile
function clickMobileExitUser() {
  showUserMobile.classList.remove("showMobileUser");
  modalRegister.classList.remove("show");
  modalLogin.classList.remove("show");
  formMobie.classList.remove("showMobile");
}
clickExitUserMobile.addEventListener("click", clickMobileExitUser);
//bottom number

//----------------------------------------------------------------------
//Run Function
//pc click
focusLi.addEventListener("click", showModalRegister);
focusLis.addEventListener("click", showModalLogin);

//tablet click
tabletFocusLi.addEventListener("click", showModalRegister);
tabletocusLis.addEventListener("click", showModalLogin);

// mobile click form sub register - login
mobileClick.addEventListener("click", showFormMobile);
// mobile click modal
btnMobileRegister.addEventListener("click", showModalRegisterMobile);
btnMobileLogin.addEventListener("click", showModalLoginMobile);

//hiden modal
modalCloseRegister.addEventListener("click", hideModal);
modalCloseLogin.addEventListener("click", hideModal);

//hiden modal mobile
const closeMobile = document.querySelector(".close_mobile");
closeMobile.addEventListener("click", hideModal);

//click growUp
modal.addEventListener("click", clickGrowUpModal);
function clickGrowUpModal() {
  modalRegister.classList.add("growUp");
  modalLogin.classList.add("growUp");
}

modalBody.addEventListener("click", function (e) {
  e.stopPropagation();
});

//===================================================
//Submit Login and Register  notification
const notificationLogin = document.querySelector(".notify__login");
const notificationRegister = document.querySelector(".notify__register");

notificationRegister.addEventListener("click", showModalRegister);
notificationLogin.addEventListener("click", showModalLogin);
//========================================================
//PC
exitUser.addEventListener("click", clickExitUser);
//Tablet
exitTabletUser.addEventListener("click", clickTabletExitUser);
// bottom number

///=====================================================////===============================

// Success Login - Register
//Error times
function showSuccess() {
  if (attempt > 0) {
    showWarningToastLogin();
  } else {
    showErrorToastLogin();
  }
}
var regexName =
  /^^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
var regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var min = 6;
//clear values input
function clearInputLogin() {
  document.getElementById("form__login").reset();
}
function clearInputRegiter() {
  document.getElementById("form__register").reset();
}
//Fun run login
var attempt = 3;
submitLogin.addEventListener("click", (e) => {
  const userName = document.getElementById("emails").value;
  const password = document.getElementById("password-login").value;

  if (
    (userName === "tuangin@gmail.com" && password === "123456") ||
    (userName === "gin@gmail.com" && password === "098765")
  ) {
    showSuccessToastLogin();
    hideShowTabletSubmitLogin();
    hideShowSubmitLogin();
    hideShowMobileSubmitLoginRegister();
    clearInputLogin();
    return true;
  } else if (userName === "") {
    showInforToastRegiterEmail();
    return false;
  } else if (!userName.match(regexEmail)) {
    showWarningToastRegiterEmail();
    return false;
  } else if (password === "") {
    showInforToastRegiterPassword();
    return false;
  } else if (password.length < min) {
    showWarningToastRegiterPassword();
    return false;
  } else {
    attempt--;
    showSuccess();
    if (attempt === 0) {
      document.getElementById("emails").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit-login").disabled = true;
      dsBtnColor.classList.add("disable");
      return modal.classList.remove("open");
    }
  }
});
//Function run Register

submitRegister.addEventListener("click", (e) => {
  const fullName = document.getElementById("fullname").value;
  const phoneNumber = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const passwords = document.getElementById("password").value;
  const passConfirmation = document.getElementById(
    "password_confirmation"
  ).value;

  if (
    fullName !== "" &&
    phoneNumber !== "" &&
    email !== "" &&
    passwords !== "" &&
    passConfirmation !== "" &&
    passConfirmation === passwords
  ) {
    showSuccessToastRegiter();
    hideShowTabletSubmitRegister();
    hideShowSubmitRegister();
    hideShowMobileSubmitLoginRegister();
    clearInputRegiter();
    return true;
  } else if (
    fullName === "" &&
    phoneNumber === "" &&
    email === "" &&
    passwords === "" &&
    passConfirmation === ""
  ) {
    showErrorToast();
    return false;
  } else if (fullName === "") {
    showInforToastRegiterName();
    return false;
  } else if (!fullName.match(regexName)) {
    showWarningToastRegiterName();
    return false;
  } else if (phoneNumber === "") {
    showInforToastRegiterSDT();
    return false;
  } else if (!phoneNumber.match(regexPhone)) {
    showWarningToastRegiterSDT();
    return false;
  } else if (email === "") {
    showInforToastRegiterEmail();
    return false;
  } else if (!email.match(regexEmail)) {
    showWarningToastRegiterEmail();
    return false;
  } else if (passwords === "") {
    showInforToastRegiterPassword();
    return false;
  } else if (passwords.length < min) {
    showWarningToastRegiterPassword();
    return false;
  } else if (passConfirmation === "" || passConfirmation !== passwords) {
    showInforToastRegiterPasswordCom();
    return false;
  } else {
    showErrorToast();
    return false;
  }
});

// clear filters

const btnClearFilters = document.querySelector(".btn--clear-filter");

btnClearFilters.addEventListener("click", () => {
  document.getElementById("from-fillter1").reset();
  document.getElementById("from-fillter2").reset();
  document.getElementById("from-fillter3").reset();
  document.getElementById("from-fillter4").reset();
  document.getElementById("from-fillter5").reset();
  document.getElementById("from-fillter6").reset();
  document.getElementById("from-fillter7").reset();
  document.getElementById("from-fillter8").reset();
  document.getElementById("from-fillter9").reset();
});
