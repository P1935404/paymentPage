$(document).ready(function () {
  /* Contact Form */
  $("form#contact-form").submit(function () {
    var isvalid = checkName();
    var isvalid = checkemail();
    var isvalid = checkmessage();
    //if(isvalid)isvalid = checkEmail();
    return isvalid;
  });

  var name_invalid = $("input#name~div.invalid-feedback");
  var input_name = $("input#name");
  input_name.change(checkName);
  var email_invalid = $("input#email~div.invalid-feedback");
  var input_email = $("input#email");
  input_email.change(checkemail);
  var message_invalid = $("input#message~div.invalid-feedback");
  var input_message = $("input#message");
  input_message.change(checkmessage);

  function checkName() {
    var v = input_name.prop("value");
    if (v == "") {
      input_name.addClass('is-invalid');
      input_name.removeClass('is-valid');
      name_invalid.html("Name must be filled up!");
      return false;
    } else {
      if (v.length < 3 || v.length > 10) {
        input_name.addClass('is-invalid');
        input_name.removeClass('is-valid');
        name_invalid.html("Name must be more than 3 chars!");
        return false;
      } else {
        input_name.removeClass('is-invalid');
        input_name.addClass('is-valid');
      }
      return true;
    }
  }

  function checkemail() {
    var v = input_email.prop("value");
    if (v == "") {
      input_email.addClass('is-invalid');
      input_email.removeClass('is-valid');
      email_invalid.html("email must be filled up!");
      return false;
    } else {
      if (v.length < 10 || v.patternMismatch) {
        input_email.addClass('is-invalid');
        input_email.removeClass('is-valid');
        email_invalid.html("Invalid email");
        return false;
      } else {
        input_email.removeClass('is-invalid');
        input_email.addClass('is-valid');
      }
      return true;
    }
  }

  function checkmessage() {
    var v = input_message.prop("value");
    if (v == "") {
      input_message.addClass('is-invalid');
      input_message.removeClass('is-valid');
      message_invalid.html("We would like to hear you out.");
      return false;
    } else {
      input_message.removeClass('is-invalid');
      input_message.addClass('is-valid');
    }
    return true;
  }



  /* Thank you page */
  var urlparams = new URLSearchParams(location.search);
  var name = urlparams.get("name");
  var email = urlparams.get("email");
  var message = urlparams.get("message");
  var products = urlparams.getAll("products");

  var msg = `
  <p>Hello ${name},</p>
  <p>We have received your message below:</p>
  <hr>
  <div class="lead">
  <p>${message}</p>
  <p>Cookies preferred: ${products}</p>
  <p>From: ${name} (${email})</p>
  </div>
  <hr>
  <p>Best regards,</p>
  <p>Cookiestunts</p>
  `;
  $(".fed-form-message").html(msg);

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  }

});