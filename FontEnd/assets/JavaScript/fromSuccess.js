
//show Password login 
const togglePasswordLogin = document.querySelector("#togglePasswordLogin");
const togglePasswordLogins = document.querySelector(".icon-showpassLogin");
const password = document.querySelector("#password-login");
const icon = togglePasswordLogins.querySelector(".fa-toggle-on");
togglePasswordLogin.addEventListener("click", function (e) {
  if (icon.classList.contains("fa-toggle-on")) {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    icon.classList.replace("fa-toggle-on", "fa-toggle-off");
  } else {
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    icon.classList.replace("fa-toggle-off", "fa-toggle-on");
  }
});
//--------------------------------------------------

//show Password register
//Password
const togglePasswordRegister = document.querySelector(
  "#togglePasswordRegister"
);
const togglePasswordIconRegister = document.querySelector(
  ".icon-showpassRegister"
);
const passwordRegister = document.querySelector("#password");
const iconRegister = togglePasswordIconRegister.querySelector(".fa-toggle-on");
//PasswordConfirmation
const togglePasswordRegisters = document.querySelector(
  "#togglePasswordRegisters"
);
const togglePasswordIconRegisters = document.querySelector(
  ".icon-showpassRegisters"
);
const passwordConfirmation = document.querySelector("#password_confirmation");
const iconRegisters =
  togglePasswordIconRegisters.querySelector(".fa-toggle-on");

// PassWord
togglePasswordRegister.addEventListener("click", function (e) {
  if (iconRegister.classList.contains("fa-toggle-on")) {
    const type =
      passwordRegister.getAttribute("type") === "password"
        ? "text"
        : "password";
    passwordRegister.setAttribute("type", type);
    iconRegister.classList.replace("fa-toggle-on", "fa-toggle-off");
  } else {
    const type =
      passwordRegister.getAttribute("type") === "password"
        ? "text"
        : "password";
    passwordRegister.setAttribute("type", type);
    iconRegister.classList.replace("fa-toggle-off", "fa-toggle-on");
  }
});
// password_confirmation
togglePasswordRegisters.addEventListener("click", function (e) {
  if (iconRegisters.classList.contains("fa-toggle-on")) {
    const type =
      passwordConfirmation.getAttribute("type") === "password"
        ? "text"
        : "password";
    passwordConfirmation.setAttribute("type", type);
    iconRegisters.classList.replace("fa-toggle-on", "fa-toggle-off");
  } else {
    const type =
      passwordConfirmation.getAttribute("type") === "password"
        ? "text"
        : "password";
    passwordConfirmation.setAttribute("type", type);
    iconRegisters.classList.replace("fa-toggle-off", "fa-toggle-on");
  }
});

