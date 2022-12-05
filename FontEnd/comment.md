let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  //-------------------------------------------------------------------------------------
  //effect error
const usernameEle = document.getElementById("username");
const emailEle = document.getElementById("email");
const phoneEle = document.getElementById("phone");
const passwordEle = document.getElementById("password");
const passwordConfirmationEle = document.getElementById(
  "password_confirmation"
);
const authFrmGroup = document.querySelectorAll(".auth--form-group");

//set Error
function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add("error");
  parentEle.querySelector("small").innerText = message;
}
//check success
function setSuccess(ele) {
  ele.parentNode.classList.add("success");
}
//success register
submitRegister.addEventListener("click", function () {
  Array.from(authFrmGroup).map((ele) =>
    ele.classList.remove("success", "error")
  );
  let isValid = checkValidate();

  if (isValid) {
    alert("Gửi đăng ký thành công");
  }
});
//success login
submitLogin.addEventListener("click", function () {
  Array.from(authFrmGroup).map((ele) =>
    ele.classList.remove("success", "error")
  );
  let isValid = checkValidate();

  if (isValid) {
    alert("Gửi đăng Nhập thành công");
  }
});

//Check Values
function checkValidate() {
  let usernameValue = usernameEle.value;
  let emailValue = emailEle.value;
  let phoneValue = phoneEle.value;
  let passwordValue = passwordEle.value;

  let isCheck = true;

  // Kiểm tra trường username
  if (usernameValue == "") {
    setError(usernameEle, "Tên không được để trống");
    isCheck = false;
  } else {
    setSuccess(usernameEle);
  }

  // Kiểm tra trường email
  if (emailValue == "") {
    setError(emailEle, "Email không được để trống");
    isCheck = false;
  } else if (!isEmail(emailValue)) {
    setError(emailEle, "Email không đúng định dạng");
    isCheck = false;
  } else {
    setSuccess(emailEle);
  }

  // Kiểm tra trường phone
  if (phoneValue == "") {
    setError(phoneEle, "Số điện thoại không được để trống");
    isCheck = false;
  } else if (!isPhone(phoneValue)) {
    setError(phoneEle, "Số điện thoại không đúng định dạng");
    isCheck = false;
  } else {
    setSuccess(phoneEle);
  }
  // Kiểm tra trường password
  if (passwordValue == "") {
    setError(passwordEle, "PassWord không được để trống");
    isCheck = false;
  } else if (!isPassword(passwordValue)) {
    setError(passwordEle, "Password không đúng định dạng");
    isCheck = false;
  } else {
    setSuccess(passwordEle);
  }
  // Kiểm tra trường comfirm password
  if (passwordValue == "") {
    setError(passwordConfirmationEle, "PassWord không được để trống");
    isCheck = false;
  } else if (!isConfirmPassword(passwordConfirmationEle)) {
    setError(passwordConfirmationEle, "Password không đúng định dạng");
    isCheck = false;
  } else {
    setSuccess(passwordConfirmationEle);
  }

  return isCheck;
}

// check value username - phoneEle - emailEle
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
// function isName(selector, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//         var result;
//         if( typeof value === 'string') {
//             result = value.trim() ? undefined : message || "Vui Lòng Nhập";
//         }else result =  value ? undefined : message || "Vui Lòng Nhập";
//         return result;
//     },
//   };
// };
// function isEmail(selector, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       return regex.test(value)
//         ? undefined
//         : message || "Vui Lòng Nhập Đúng Email Của Bạn";
//     },
//   };
// };
// function isPhone(selector, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       var regex =/(84|0[3|5|7|8|9])+([0-9]{8})\b/;
//       return regex.test(value)
//         ? undefined
//         : message || "Vui Lòng Nhập Đúng Số Điện Thoại Của Bạn";
//     },
//   };
// }

// function isPassword  (selector, min) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value.length >= min
//         ? undefined
//         : ` Vui Lòng Nhập Tối Thiểu ${min} Kí Tự`;
//     },
//   };
// };

// function isConfirmPassword(selector, getConformValue, message) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value === getConformValue()
//         ? undefined
//         : message || "Giá Trị Nhập Vào Không Chính Xác";
//     },
//   };
// };
///------------------------------------------------------------------------------
// Submit Login and Register Tablet
// function hideShowTabletSubmitLogin() {
//   modal.classList.remove("open");
//   tabletUserSubmit.classList.add("showTablet");
//   tabletNoSubmit.classList.add("showTablet");
//   noCart.classList.add("show-cart");
//   moneyCart.classList.add("show-cart");
// }
// function hideShowTabletSubmitRegister() {
//   modal.classList.remove("open");
//   tabletUserSubmit.classList.add("showTablet");
//   tabletNoSubmit.classList.add("showTablet");
//   noCart.classList.add("show-cart");
//   moneyCart.classList.add("show-cart");
// }
//----------------------------------------------------------------
class LocalStorageService {
  #keys = {
    persons: 'persons',
  };

  constructor() {
    this.storage = window.localStorage;
  }

  addPerson(person) {
    const persons = this.getPersons();
    persons.push(person);
    this.setPersons(persons);
  }

  getPersons() {
    return JSON.parse(this.storage.getItem(this.#keys.persons)) || [];
  }

  getPerson(id) {
    const persons = this.getPersons();
    return persons.find((person) => person.id === id);
  }

  setPersons(persons) {
    this.storage.setItem(this.#keys.persons, JSON.stringify(persons));
  }

  removePerson(person) {
    const persons = this.getPersons();
    const index = persons.indexOf(person);
    persons.splice(index, 1);
    this.setPersons(persons);
  }

  clear() {
    this.storage.clear();
  }
}

const storageService = new LocalStorageService();
const person = {
  id: '1',
  name: 'John',
  age: '20',
};

storageService.addPerson(person);

const persons = storageService.getPersons();
console.log(persons);


switch (giá trị){
    case trường hợp 1:
trường hợp 1
        break;
    case trường hợp 2:
        trường hợp 2
        break;
    case trường hợp 3:
trường hợp 3
        break;
    default:
        //đoạn mã này sẽ được thực thi khi giá trị KHÔNG trùng khớp trường hợp nào cả
        break;
}
bản 27
hình 34

<script>
    function print_message() {
        // Khai báo đầu function
        "use strict";
    }
    print_message();
    message = "Phạm vi ngoài hàm print_message";
    document.write(message);
</script>
//------------------------------------------------------------------
.mobile__category_list {
  display: flex;
  list-style: none;
  padding-left: 0;
  max-width: 100%;
  overflow-x: auto;
}

.mobile__category_list::-webkit-scrollbar {
  display: none;
}

.mobile__category_list--item {
  flex-shrink: 0;
  margin-right: 10px;
}
.mobile__category_list--item:nth-last-of-type(3n)
  .mobile__category_list--item-link {
  background-color: #87afd8;
}

.mobile__category_list--item:nth-last-of-type(3n + 1)
  .mobile__category_list--item-link {
  background-color: #76c9bd;
}

.mobile__category_list--item:nth-last-of-type(3n + 2)
  .mobile__category_list--item-link {
  background-color: #88cf81;
}
.mobile__category_list--item-link {
  --line-height: 2rem;
  color: var(--white-color);
  text-decoration: none;
  font-size: 1.4rem;
  line-height: var(--line-height);
  height: calc(var(--line-height) * 2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: center;
  width: 110px;
  display: block;
  border-radius: 4px;
  font-weight: 300px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}