const cardnumberinput = document.getElementById('num_card_input');
const cardnumberoutput = document.getElementById('num_card_output');
const cardholdernameinput = document.getElementById('num_card_nameholder_input');
const cardholdernameoutput = document.getElementById('num_card_nameholder_output');
const expdateinput = document.getElementById('exp_date_input');
const expdateinput1 = document.getElementById('exp_date_input1');
const expdateoutput = document.getElementById('exp_date_output');
const expdateoutput1 = document.getElementById('exp_date_output1');
const cvcinput = document.getElementById('cvc_input');
const cvcoutput = document.getElementById('cvc_output');
const cardnumbwrong = document.getElementById('card_number_wrong');

cardnumberinput.addEventListener('input', (event) => {
  cardnumberoutput.innerHTML = event.target.value;
});

cardholdernameinput.addEventListener('input', (event) => {
    cardholdernameoutput.innerHTML = event.target.value;
});

cvcinput.addEventListener('input', (event) => {
  cvcoutput.innerHTML = event.target.value;
});

function updateExpirationDate() {
  var expDateInput = document.getElementById("exp_date_input").value;
  var expDateInput1 = document.getElementById("exp_date_input1").value;
  var expDateOutput = document.getElementById("exp_date_output");

  // Mettre à jour le champ "exp_date_output" avec les chiffres séparés par "/"
  expDateOutput.innerHTML = expDateInput + "/" + expDateInput1;
}


document.getElementById("exp_date_input").addEventListener("input", updateExpirationDate);
document.getElementById("exp_date_input1").addEventListener("input", updateExpirationDate);



function limitinput(inputElement) {
  var maxLength = parseInt(inputElement.getAttribute("maxlength"));
  if (inputElement.value.length > maxLength) {
    inputElement.value = inputElement.value.slice(0, maxLength);
  }
}

function blankinput(inputElement) {
  var mmError = document.getElementById("mmerror");
  var maxLength = parseInt(inputElement.getAttribute("maxlength"));

  if (inputElement.value.length !== maxLength) {
      mmError.style.display = 'inline';
      inputElement.style.borderColor = 'red';
      inputElement.setAttribute('aria-invalid', 'true');
  } else {
      mmError.style.display = 'none';
      inputElement.style.borderColor = '';
      inputElement.setAttribute('aria-invalid', 'false');
  }
}

function blankinput1(inputElement) {
  var mmError1 = document.getElementById("mmerror1");
  var maxLength = parseInt(inputElement.getAttribute("maxlength"));

  if (inputElement.value.length !== maxLength) {
      mmError1.style.display = 'inline';
      inputElement.style.borderColor = 'red';
      inputElement.setAttribute('aria-invalid', 'true');
  } else {
      mmError1.style.display = 'none';
      inputElement.style.borderColor = '';
      inputElement.setAttribute('aria-invalid', 'false');
  }
}

function validateCardNumber(inputElement) {
  var cardNumber = inputElement.value;
  var cardNumberError = document.getElementById("card_number_error");

  if (/^\d{16}$/.test(cardNumber)) {
      cardNumberError.style.display = 'none';
      inputElement.setAttribute('aria-invalid', 'false');
      inputElement.style.borderColor = '';
  } else {
      cardNumberError.style.display = 'inline';
      cardnumberinput.style.borderColor = 'red';
      inputElement.setAttribute('aria-invalid', 'true');
  }
}

document.getElementById('form').addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut de l'envoi du formulaire
  document.querySelector("form").style.display = "none";
  document.getElementById('submitcontent').style.display = "flex";
});