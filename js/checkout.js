$(document).ready(function () {
  /* Checkout Form */
  $("form#checkout-form").submit(function () {
    this.classList.add('was-validated');
    return false;
  });

  var firstName_err = $("input#firstName ~ div.invalid-feedback");
  var firstName_msg = $("input#firstName ~ div.valid-feedback");
  $("input#firstName").change(function () {
    if (this.value.length < 3 || this.value.length > 10) {
      this.classList.add('is-invalid');
      this.classList.remove('is-valid');
      firstName_err.html("First name must be more than 3 chars!");
    } else {
      this.classList.remove('is-invalid');
      this.classList.add('is-valid');
      firstName_msg.html("Great!");
    }

  });

});

function FillBilling(f) {
  if (f.checkbox.checked == true) {
    f.shippingadr.value = f.address.value;
    f.shippingcity.value = f.city.value;
    f.shippingState.value = f.state.value;
    f.shippingZip.value = f.zip.value;
  }
}