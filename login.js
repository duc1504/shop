$(document).ready(function() {
    $('#submit').click(function() {
      var email = $('#mail').val();
      var password = $('#pass').val();
      if(email == '' || password == '') {
        alert('Địa chỉ email và mật khẩu không được để trống');
        return false;
      }else{
        alert('Đăng nhập thành công');
        window.location.href = "home.html";
      }
    });
  });
  