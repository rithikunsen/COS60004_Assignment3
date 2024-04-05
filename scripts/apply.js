//javascript code here
"use strict";

// function storeRefNumber(e) {
//   if (e.target.id == "ui-developer") {
//     var refNumber = "12345";
//   } else if (e.target.id == "cyber-security") {
//     var refNumber = "55555";
//   }
//   localStorage.setItem("refNumber", refNumber);
//   window.location.href = "apply.html";
// }

function submitForm(event) {
  if (!validate()) {
    event.preventDefault();
  } else {
    saveData();
    var applyForm = document.getElementById("applyForm"); //get refto the HTMLelement
    applyForm.onsubmit;
  }
}

function saveData() {
  //save all the data to session storage
  sessionStorage.setItem("firstName", document.getElementById("fname").value);
  sessionStorage.setItem("lastName", document.getElementById("lname").value);
  sessionStorage.setItem('email', document.getElementById('email').value);
  sessionStorage.setItem("phone", document.getElementById("pnumber").value);
  sessionStorage.setItem("dob", document.getElementById("dob").value);
  sessionStorage.setItem("address", document.getElementById("staddr").value);
  sessionStorage.setItem("town", document.getElementById("town").value);
  sessionStorage.setItem("state", document.getElementById("state").value);
  sessionStorage.setItem("postcode", document.getElementById("postcode").value);
  sessionStorage.setItem('gender', document.querySelector('input[name="gender"]:checked').value);
  const otherSkills = document.querySelector('#otherSkills');
  if (otherSkills.checked) {
    sessionStorage.setItem("other", document.getElementById("other").value);
  }
}

function getData() {
  //get data from session storage
  document.getElementById("fname").value = sessionStorage.getItem("firstName");
  document.getElementById("lname").value = sessionStorage.getItem("lastName");
  document.getElementById("email").value = sessionStorage.getItem("email");
  document.getElementById("pnumber").value = sessionStorage.getItem("phone");
  document.getElementById("dob").value = sessionStorage.getItem("dob");
  document.getElementById("staddr").value = sessionStorage.getItem("address");
  document.getElementById("town").value = sessionStorage.getItem("town");
  document.getElementById("state").value = sessionStorage.getItem("state");
  document.getElementById("postcode").value = sessionStorage.getItem("postcode");
  document.getElementById("other").value = sessionStorage.getItem("other");
  // Get the value of the "gender" radio button from session storage
  const genderValue = sessionStorage.getItem('gender');
  // If a value is found in session storage
  if (genderValue) {
    // Get all "gender" radio buttons
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    // Loop through each "gender" radio button
    for (let i = 0; i < genderRadios.length; i++) {
      // If the radio button's value matches the value in session storage
      if (genderRadios[i].value === genderValue) {
        // Check the radio button
        genderRadios[i].checked = true;
        break; // Stop looping through the radio buttons
      }
    }
  }
  //get back the value of checked skill from session storage
  const skill = document.querySelectorAll('input[name="skills[]"]');
  for (let i = 0; i < skill.length; i++) {
    if (sessionStorage.getItem(skill[i].value)) {
      skill[i].checked = true;
    }
  }
}

function validate() {
  var result = true;

  //Firstname
  var firstName = document.getElementById("fname").value;
  var firstNameInput = document.getElementById("fname");

  //Lastname
  var lastName = document.getElementById("lname").value;
  var lastNameInput = document.getElementById("lname");

  // For the date of birth text field, a valid date must be entered in valid dd/mm/yyyy format. Applicants must be at between 15 and 80 years old at the time they fill in the form.
  var dob = document.getElementById("dob").value;
  var dobPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  var dobDate = new Date(dob);
  var today = new Date();
  var age = today.getFullYear() - dobDate.getFullYear();
  var dobInput = document.getElementById("dob");

  //gender validation
  var male = document.getElementById("male").checked;
  var female = document.getElementById('female').checked;
  var genderInput = document.getElementById('gender');

  //street address validation
  var streetAddress = document.getElementById("staddr").value;
  var streetAddressInput = document.getElementById("staddr");

  //town validation
  var town = document.getElementById("town").value;
  var townInput = document.getElementById("town");


  //State and postcode validation
  var state = document.getElementById("state").value;
  var state = document.getElementById("state").value;
  var stateInput = document.getElementById("state");
  var postcode = document.getElementById("postcode").value;
  var postCodeInput = document.getElementById("postcode");
  var postcodeFirstDigit = postcode.charAt(0);
  var statePostcodeMap = {
    VIC: ["3", "8"],
    NSW: ["1", "2"],
    QLD: ["4", "9"],
    NT: ["0"],
    WA: ["6"],
    SA: ["5"],
    TAS: ["7"],
    ACT: ["0"],
  };

  //email validation
  var email = document.getElementById("email").value;
  var emailInput = document.getElementById("email");

  // If the “Other skills...” is selected in the Skills Checkbox list, the Other Skills text area cannot be blank.
  var otherSkills = document.getElementById("otherSkills");
  var other = document.getElementById("other");
  var skills = document.querySelectorAll("input[type='checkbox']:checked");
  var skillsInput = document.querySelectorAll("input[type='checkbox']");

  //phone validation
  var phone = document.getElementById("pnumber").value;
  var phoneInput = document.getElementById("pnumber");

  //firstname validation
  if (firstName === "") {
    firstNameInput.style.border = "1px solid red";
    firstNameInput.style.backgroundColor = "#ffcccc";
    firstNameInput.focus();
    firstNameInput.select();
    document.querySelector(".fname-error").innerHTML =
      "Please enter your first name";
    document.querySelector(".fname-error").style.display = "block";
    result = false;
  } else if (firstName !== "") {
    firstNameInput.style.border = "";
    firstNameInput.style.backgroundColor = "";
    document.querySelector(".fname-error").style.display = "none";
    result = true;
  }

  //lastname validation
  if (lastName === "") {
    lastNameInput.style.border = "1px solid red";
    lastNameInput.style.backgroundColor = "#ffcccc";
    lastNameInput.focus();
    lastNameInput.select();
    document.querySelector(".lname-error").innerHTML =
      "Please enter your last name";
    document.querySelector(".lname-error").style.display = "block";
    result = false;
  } else if (lastName !== "") {
    lastNameInput.style.border = "";
    lastNameInput.style.backgroundColor = "";
    document.querySelector(".lname-error").style.display = "none";
    result = true;
  }

  //Validate the date format and set the format to dd/mm/yyyy
  if (!dobPattern.test(dobDate.toLocaleDateString())) {
    dobInput.style.border = "1px solid red";
    dobInput.style.backgroundColor = "#ffcccc";
    dobInput.focus();
    dobInput.select();
    document.querySelector(".dob-error").innerHTML =
      "Please enter a valid date in dd/mm/yyyy format";
    document.querySelector(".dob-error").style.display = "block";
    result = false;
  } else if (age < 15 || age > 80) {
    dobInput.style.border = "1px solid red";
    dobInput.style.backgroundColor = "#ffcccc";
    dobInput.focus();
    dobInput.select();
    document.querySelector(".dob-error").innerHTML =
      "Applicants must be at between 15 and 80 years old at the time they fill in the form";
    document.querySelector(".dob-error").style.display = "block";
    result = false;
  } else {
    dobInput.style.border = "";
    dobInput.style.backgroundColor = "";
    document.querySelector(".dob-error").style.display = "none";
    result = true;
  }

  //gender validation
  if (!male && !female) {
    genderInput.style.border = "1px solid red";
    genderInput.style.backgroundColor = "#ffcccc";
    dobInput.focus();
    dobInput.select();
    document.querySelector(".gender-error").innerHTML =
      "Please select gender";
    document.querySelector(".gender-error").style.display = "block";
    result = false;
  } else {
    genderInput.style.border = "";
    genderInput.style.backgroundColor = "";
    document.querySelector(".gender-error").style.display = "none";
    result = true;
  }

  //street address validation
  if (streetAddress === "") {
    streetAddressInput.style.border = "1px solid red";
    streetAddressInput.style.backgroundColor = "#ffcccc";
    streetAddressInput.focus();
    streetAddressInput.select();
    document.querySelector(".staddr-error").innerHTML =
      "Please enter your street address";
    document.querySelector(".staddr-error").style.display = "block";
    result = false;
  } else {
    streetAddressInput.style.border = "";
    streetAddressInput.style.backgroundColor = "";
    document.querySelector(".staddr-error").style.display = "none";
    result = true;
  }

  //town validation
  if (town === "") {
    townInput.style.border = "1px solid red";
    townInput.style.backgroundColor = "#ffcccc";
    townInput.focus();
    townInput.select();
    document.querySelector(".town-error").innerHTML =
      "Please enter your town";
    document.querySelector(".town-error").style.display = "block";
    result = false;
  } else {
    townInput.style.border = "";
    townInput.style.backgroundColor = "";
    document.querySelector(".town-error").style.display = "none";
    result = true;
  }

  //state and postcode validation
  if (state === "") {
    stateInput.style.border = "1px solid red";
    stateInput.style.backgroundColor = "#ffcccc";
    stateInput.focus();
    document.querySelector(".state-error").innerHTML = "Please select your state";
    document.querySelector(".state-error").style.display = "block";
    result = false;
  } else if (state !== "") {
    if (statePostcodeMap[state].indexOf(postcodeFirstDigit) === -1) {
      postCodeInput.style.border = "1px solid red";
      postCodeInput.style.backgroundColor = "#ffcccc";
      postCodeInput.focus();
      postCodeInput.select();
      document.querySelector(".postcode-error").innerHTML = "The selected state must match the first digit of the postcode";
      document.querySelector(".postcode-error").style.display = "block";
      result = false;
    } else {
      stateInput.style.border = "";
      stateInput.style.backgroundColor = "";
      document.querySelector(".state-error").style.display = "none";
      result = true;
    }
  }

  //email validation
  if (email === "") {
    emailInput.style.border = "1px solid red";
    emailInput.style.backgroundColor = "#ffcccc";
    emailInput.focus();
    emailInput.select();
    document.querySelector(".email-error").innerHTML =
      "Please enter your email address";
    document.querySelector(".email-error").style.display = "block";
    result = false;
  } else {
    emailInput.style.border = "";
    emailInput.style.backgroundColor = "";
    document.querySelector(".email-error").style.display = "none";
    result = true;
  }

  if (phone === "") {
    phoneInput.style.border = "1px solid red";
    phoneInput.style.backgroundColor = "#ffcccc";
    phoneInput.focus();
    phoneInput.select();
    document.querySelector(".pnumber-error").innerHTML =
      "Please enter your phone number";
    document.querySelector(".pnumber-error").style.display = "block";
    result = false;
  } else {
    phoneInput.style.border = "";
    phoneInput.style.backgroundColor = "";
    document.querySelector(".pnumber-error").style.display = "none";
    result = true;
  }

  //skills validation
  if (skills.length === 0) {
    skillsInput.forEach((item) => {
      item.style.border = "1px solid red";
      item.style.backgroundColor = "#ffcccc";
    });
    document.querySelector(".skills-error").innerHTML =
      "Please select at least one skill";
    document.querySelector(".skills-error").style.display = "block";
    result = false;
    if (otherSkills.checked) {
      other.style.border = "1px solid red";
      other.style.backgroundColor = "#ffcccc";
      other.focus();
      other.select();
      document.querySelector(".other-error").innerHTML =
        "If the “Other skills...” is selected in the Skills Checkbox list, the Other Skills text area cannot be blank";
      document.querySelector(".other-error").style.display = "block";
      result = false;
    } else {
      other.style.border = "";
      other.style.backgroundColor = "";
      document.querySelector(".other-error").style.display = "none";
    }
  }
  else {
    skillsInput.forEach((item) => {
      item.style.border = "";
      item.style.backgroundColor = "";
    })
    document.querySelector(".skills-error").style.display = "none";
    // check of Other skills... is selected
    if (otherSkills.checked && other.value === "") {
      other.style.border = "1px solid red";
      other.style.backgroundColor = "#ffcccc";
      other.focus();
      other.select();
      document.querySelector(".other-error").innerHTML =
        "If the “Other skills...” is selected in the Skills Checkbox list, the Other Skills text area cannot be blank";
      document.querySelector(".other-error").style.display = "block";
      result = false;
    } else {
      other.style.border = "";
      other.style.backgroundColor = "";
      document.querySelector(".other-error").style.display = "none";
    }
  }
  return result;
}

function init() {
  //check if the route is jobs.html
  // if (window.location.pathname == "/jobs.html") {
  //   var buttons = document.getElementsByTagName("button");
  //   for (let button of buttons) {
  //     button.addEventListener("click", storeRefNumber);
  //   }
  // } else if (window.location.pathname == "/apply.html") {
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = submitForm;
  const skill = document.querySelectorAll('input[name="skills[]"]');

  //get value of checked skill and store in session storage
  for (let i = 0; i < skill.length; i++) {
    skill[i].addEventListener("change", function () {
      if (this.checked) {
        sessionStorage.setItem(this.value, this.value);
      } else {
        document.getElementById("other").value = "";
        sessionStorage.removeItem(this.value);
        sessionStorage.removeItem("other");
      }
    });
  }

  //Check if there is any date from session storage or local storage
  if (typeof Storage !== undefined) {
    // Retrieve the position description reference number from local storage
    const refNumber = localStorage.getItem("refNumber");
    // Set the text of the span element with the retrieved value
    document.getElementById("ref").value = refNumber;
    document.getElementById("ref").readOnly = true;
    //clear the local storage when user change page
    getData();
  }
}
// }

window.addEventListener("load", init);
