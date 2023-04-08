$(document).ready(function() {
    $('#submit').click(function() {
      var email = $('#mail').val();
      var password = $('#pass').val();
      if(email == '' || password == '') {
        alert('Địa chỉ email và mật khẩu không được để trống');
        return false;
      } else if(email == 'ngocduc@gmail.com' && password == 'Duc1234') {
       
        window.location.href = "home.html";
      }
      else{
        alert('Tài khoản hoặc mật khẩu không chính xác');
       
      }
    });
  });
  