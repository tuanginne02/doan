function showErrorToast() {
  toast({
    title: "Thất bại!",
    message: "Vui lòng thử lại.",
    type: "error",
    duration: 5000
  });
}

function showSuccessToastLogin() {
    toast({
      title: "Thành công!",
      message: "Đăng nhập thành công.",
      type: "success",
      duration: 5000
    });
  }
  function showErrorToastLogin() {
    toast({
      title: "Thất bại!",
      message: "Đăng Nhập Đã Bị Khóa.",
      type: "error",
      duration: 5000
    });
  }
  function showWarningToastLogin() {
    toast({
      title: "Thất bại!",
      message: "Vui Lòng Nhập Email Và Mật Khẩu",
      type: "warning",
      duration: 5000
    });
  }
  function showWarningToastLogin() {
  // var attempt = 3;  
    toast({
      title: "Có Lỗi!",
      message: "Đăng Nhập Thất Bại, còn " + attempt + " lần",
      type: "warning",
      duration: 5000
    });
  }

  function showSuccessToastRegiter() {
    toast({
      title: "Thành công!",
      message: "Đăng Ký thành công.",
      type: "success",
      duration: 5000
    });
  }
  function showInforToastRegiterName() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Tên.",
      type: "info",
      duration: 5000
    });
  }
  function showWarningToastRegiterName() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Đúng Tên.",
      type: "warning",
      duration: 5000
    });
  }
  function showInforToastRegiterSDT() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Số Điện Thoại.",
      type: "info",
      duration: 5000
    });
  }
  function showWarningToastRegiterSDT() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Đúng Số Điện Thoại.",
      type: "warning",
      duration: 5000
    });
  }
  function showInforToastRegiterEmail() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Email.",
      type: "info",
      duration: 5000
    });
  }
  function showWarningToastRegiterEmail() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Email Nhập Sai Định Dạng.",
      type: "warning",
      duration: 5000
    });
  }
  function showInforToastRegiterPassword() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Vui Lòng Nhập Mật Khẩu.",
      type: "info",
      duration: 5000
    });
  }
  function showWarningToastRegiterPassword() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Nhập Tối Thiểu 6 Kí Tự.",
      type: "warning",
      duration: 5000
    });
  }
  function showInforToastRegiterPasswordCom() {
    toast({
      title: "Chưa Hoàn Thành!",
      message: "Mật Khẩu Xác Nhập Không Đúng.",
      type: "info",
      duration: 5000
    });
  }
