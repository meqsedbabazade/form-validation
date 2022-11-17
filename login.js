$(document).ready(function () {

  $('.sub').click(function (e) {
    e.preventDefault();
    var password = $("#password").val();
    var first_name = $('#first_name').val();
    var email = $('#email').val();
    var at_index = email.lastIndexOf("@")
    var nokte_index = email.lastIndexOf(".")

    $(".error").remove();

    if (first_name.length == 0) {
      $('#first_name').after('<span class="error">adinizi duzgun daxil edin</span>');
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">emailinizi  daxil edin</span>');
    } else {
      if ((nokte_index - at_index) == 1) {
        $('#email').after('<span class="error">@ ve . arasinda simvol yoxdur</span>');
      }
    }
    if (password.length < 5) {
      $('.pas').after('<span class="error">Parol en az 5 simvoldan ibaret olmalidi</span>');
    }
  });
  $(function () {
    $("#toggle_pwd").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
      $(".txtPassword").attr("type", type);
    });
  })
});
