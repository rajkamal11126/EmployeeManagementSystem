
validateFirstName = () => {
    let x = document.getElementById("firstName").value;
    if (x.match(/^[A-Z]{1}[a-z]{2,20}$/)) {
      document.getElementById("firstNameError").innerHTML = " ";
    }
    else{
      document.getElementById("firstNameError").innerHTML = "invalid name";
    }
  }
  validateLastName = () => {
    let x = document.getElementById("lastName").value;
    if (x.match(/^[A-Z]{1}[a-z]{2,20}$/)) {
      document.getElementById("lastNameError").innerHTML = " ";
    }
    else{
      document.getElementById("lastNameError").innerHTML = "invalid name";
    }
  }
  validateEmail = () => {
    let x = document.getElementById("email").value;
    let pattern = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$/;
    if (x.match(pattern)) {
      document.getElementById("emailError").innerHTML = " ";
    }
    else{
      document.getElementById("emailError").innerHTML = "invalid email";
    }
  }
  validatePassword  = () => {
    let x = document.getElementById("password").value;
    let pattern = /^(?=.*[0-9])(?=.*[@#$%]{1})(?=.*[A-Z]).{8,}$/;
    if (x.match(pattern)) {
      document.getElementById("passwordError").innerHTML = " ";
    }
    else{
      document.getElementById("passwordError").innerHTML = "invalid password";
    }
  }