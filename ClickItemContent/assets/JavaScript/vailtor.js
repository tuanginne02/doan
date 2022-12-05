//submit register

// Hàm Validator
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var selectorRules = {};
  //Hàm hiện đỏ khi ko nhập và nhập ko hiện
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSeletor
    ).querySelector(options.errorSelector);
    var errorMessage;
    //lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    // lặp qua từng rules và kiểm tra
    // Nếu có lỗi dừng việc kiểm tra
    for (var i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelectorAll(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSeletor).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSeletor).classList.remove(
        "invalid"
      );
    }
    return !errorMessage;
  }
  //bỏ errorElement khi nhập lại email
  function removeErrorEmail(inputElement) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSeletor
    ).querySelector(options.errorSelector);
    errorElement.innerText = "";
    getParent(inputElement, options.formGroupSeletor).classList.remove(
      "invalid"
    );
  }

  //lấy element của form validate
  var formElement = document.querySelector(options.formRegiseter); //đổi form
  if (formElement) {
    //khi submit form element
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      //lặp qua từng rules và validator
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        //trường hợp submit với javascript
        if (typeof options.onsubmit === "function") {
          var enavleInput = formElement.querySelectorAll("[name]"); // :not([disabled]//
          var formValues = Array.from(enavleInput).reduce(function (
            values,
            input
          ) {
            switch (input.type) {
              case "radio":
                values[input.name] = formElement.querySelector(
                  'input[name="' + input.name + '"]:checked'
                ).value;
                break;
              case "checkbox":
                if (!input.matches(":checked")) {
                  values[input.name] = "";
                  return values;
                }

                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                values[input.name].push(values);
                break;
              case "file":
                values[input.name] = input.files;
                break;
              default:
                values[input.name] = input.value;
            }
            return values;
          },
          {});
          options.onsubmit(formValues);
          //trường hợp submit mặc định
        } else {
          formElement.submit();
        }
      }
    };

    //xử lý  lặp qua mỗi rules và xử lý
    options.rules.forEach(function (rule) {
      //Lưu lại các rule cho mối input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function (inputElement) {
        if (inputElement) {
          //xử lý blur khỏi input
          inputElement.onblur = function () {
            validate(inputElement, rule);
          };
          //xử lý mỗi khi người dùng nhập vào email mất lỗi
          inputElement.oninput = function () {
            removeErrorEmail(inputElement);
          };
        }
      });
    });
  }
}

//Định nghĩa
//Nguyên tắc Rules
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var result;
      if (typeof value === "string") {
        result = value.trim() ? undefined : message || "Vui Lòng Nhập";
      } else result = value ? undefined : message || "Vui Lòng Nhập";
      return result;
     
    },
  };
};
Validator.isFullName = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
      return regex.test(value)
        ? undefined
        : message || "Vui Lòng Nhập Đúng Tên ";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Vui Lòng Nhập Đúng Email Của Bạn";
    },
  };
};

Validator.isPhone = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      return regex.test(value)
        ? undefined
        : message || "Vui Lòng Nhập Đúng Số Điện Thoại Của Bạn";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : ` Vui Lòng Nhập Tối Thiểu ${min} Kí Tự`;
    },
  };
};

Validator.isComformed = function (selector, getConformValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConformValue()
        ? undefined
        : message || "Giá Trị Nhập Vào Không Chính Xác";
    },
  };
};
