
var nameError = document.getElementById("name-error");
var PhoneError = document.getElementById("Phone-error");
var emailError = document.getElementById("Email-error");
var messageError = document.getElementById("Message-error");
var submitError = document.getElementById("Submit-error");
var ageError = document.getElementById("age-error");


function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateNumber() {
    var number = document.getElementById("contact-number").value;

    if (number.length == 0) {
        PhoneError.innerHTML = 'Number is required';
        return false;
    }

    if (number.length !== 10) {
        PhoneError.innerHTML= "Number should be 10 digit";
        return false;
    }
     if(!number.match(/^[0-9]{10}$/)){
        PhoneError.innerHTML = 'only digits please.';
        return false;
     }
    PhoneError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validationEmail(){
    var email =document.getElementById("contact-email").value;

    if(email.length == 0){ 
        emailError.innerHTML= "email is require";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email invalid'
        return false;
    }
    emailError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validationMessage(){
    var msg =document.getElementById("contact-message").value;
    var require=10;
    var left = require - msg.length;
    if(left >0){
         messageError.innerHTML= left + 'more charecters required';
         return false;
    }
    messageError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validationForm(){
    if (!validateName() || !validateNumber() || !validationEmail() || !validationMessage() ){
        submitError.innerHTML= 'Please Fix Error to submite';
        alert("pls check the field");
        return false;
    }
    alert("Can i Submite u r form......?");
    return true;
}

