//using strict mode
"use strict";


//dark/light mode
const toggleButton = document.getElementById('theme-toggle');
  
    toggleButton.addEventListener('click', () => {
      const body = document.body;
  
      // Toggle manually between light and dark mode
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      } else if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        // No class set yet, determine system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'light-mode' : 'dark-mode');
      }
    });

//product display
//create variables for all buttons and services sections
 let service1 = document.querySelector("#service1");
 let service2 = document.querySelector("#service2");
 let service3 = document.querySelector("#service3");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

 
/*when button 2 is clicked, service2 gets assigned the current item class, 
other two services get currentItem removed and hiddenItem assigned*/
btn2.addEventListener('click', (e) => {
    service1.classList.remove("currentItem");
    service1.classList.add("hiddenItem");
    service3.classList.remove("currentItem");
    service3.classList.add("hiddenItem");
    service2.classList.remove("hiddenItem");
    service2.classList.add("currentItem");
}) 

/*when button 3 is clicked, service3 gets assigned the current item class, 
other two services get currentItem removed and hiddenItem assigned */
btn3.addEventListener('click', () => {
    service2.classList.remove("currentItem");
    service2.classList.add("hiddenItem");
    service1.classList.remove("currentItem");
    service1.classList.add("hiddenItem");
    service3.classList.remove("hiddenItem");
    service3.classList.add("currentItem");
})

/*when button 1 is clicked, service1 gets assigned the current item class, 
other two services get currentItem removed and hiddenItem assigned
did this one last since it's the currentItem by default and wasn't functioning correctly 
when done first */
btn1.addEventListener('click', () => {
    service3.classList.remove("currentItem");
    service3.classList.add("hiddenItem");
    service2.classList.remove("currentItem");
    service2.classList.add("hiddenItem");
    service1.classList.remove("hiddenItem");
    service1.classList.add("currentItem");
})



//game play

//create function to get pseudo random number
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create game play function
function gamePlay(e){
  //prevents default from submission
  e.preventDefault();

  //declare variables
  let gameErrorMessg = document.querySelector("#gamePlay span"); //error msg to be displayed
  let gameOutput = document.querySelector("#gameOutput"); //game result message
  let inputNumber = document.getElementById("numGuess"); //number input by user
  let randNumber = getRandomNumber(1, 10); //creates random number to compare with user input
 
  let num = parseInt(inputNumber.value); //make the number input from a string type to a integer type

   //reset the game after every play
  gameOutput.innerHTML = ""; //clear output
  inputNumber.value = ""; //clear input
  gameErrorMessg.classList.add("message"); //hide error message
  inputNumber.classList.remove("errorInput"); //remove red border from input 
  
  //use boolean to track validity
  let isValid = true;

  //validate that the input number is between 1 and 10 or if there's no input
  if(isNaN(num) || num < 1 || num > 10){
    inputNumber.classList.add("errorInput");
    gameErrorMessg.classList.remove("message");
    gameOutput = "";
    isValid = false;
  }

  //if number is valid check if user wins or lose and display appropriate message
  if(isValid){
    if(num == randNumber){
      gameOutput.innerHTML = "You win! Your number: " + num + " Winning number: " + randNumber;
    } else {
      gameOutput.innerHTML = "You lose! Your number: " + num + " Winning number: " + randNumber + " Try again!";
    } 
  }
}

//add event listener to run the game play function
document.getElementById("guessGame").addEventListener("click", gamePlay);



//form validation
//create form validation function
function validateForm(e) {
  //prevent default form submission
  e.preventDefault();

  //access the form
  let myForm = document.querySelector("#contactForm");

  //create an array with all the error messages
  let errorSpans = document.querySelectorAll("#contactForm .message");

  //create an object to hold submitted information
  let mySubmission = {};

  //boolean to track validity
  let isValid = true;

  //reset error input display
  myForm.fullName.classList.remove("errorInput");
  myForm.phoneNumber.classList.remove("errorInput");
  myForm.email.classList.remove("errorInput");
  myForm.myMessage.classList.remove("errorInput");
  
  //reset error message display
  errorSpans.forEach(function(span){
    span.classList.remove("error");
  })

  //add hide class to success section
  document.querySelector("#success").classList.add("hide");

  //create reg expressions to validate phone number and email
  let phoneRegex = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

  //validate name is not blank
  if(myForm.fullName.value === ""){
    //add errorInput class to input field
    myForm.fullName.classList.add("errorInput");

    //display error message
    errorSpans[0].classList.add("error");

    //set is valid to false to prevent submission
    isValid = false;
  }

  //validate that phone number is not blank and matches the regex
  if(myForm.phoneNumber.value === "" || !(phoneRegex.test(myForm.phoneNumber.value))){
    //only when phone is selected as preferred contact method
    if(myForm.phoneBtn.checked === true){
    //add errorInput class to input field
      myForm.phoneNumber.classList.add("errorInput");

      //display error message
      errorSpans[1].classList.add("error");

      //set is valid to false to prevent submission
      isValid = false;
    }
  }

  //validate that email is not blank and matches the regex
  if(myForm.email.value === "" || !(emailRegex.test(myForm.email.value))){
    //only when email is selected as preferred contact method
    if(myForm.emailBtn.checked === true){
    //add errorInput class to input field
      myForm.email.classList.add("errorInput");

      //display error message
      errorSpans[2].classList.add("error");

      //set is valid to false to prevent submission
      isValid = false;
    }
  }

  //validate that myMessage is not blank
  if(myForm.myMessage.value === ""){
    //add errorInput class to input field
      myForm.myMessage.classList.add("errorInput");

      //display error message
      errorSpans[3].classList.add("error");

      //set is valid to false to prevent submission
      isValid = false;
  }

  //if form is valid add information submitted to the object created and display
  if(isValid){
    //if user checked phone number
    if(myForm.phoneBtn.checked === true){
      //add full name, phone number, and message to the object
      mySubmission.fullName = myForm.fullName.value;
      mySubmission.phoneNumber = myForm.phoneNumber.value;
      mySubmission.myMessage = myForm.myMessage.value;

      //display object
      document.getElementById("formSub").innerHTML = `Full name: ${mySubmission.fullName}<br>
      Phone number: ${mySubmission.phoneNumber}<br>
      Message: ${mySubmission.myMessage}`;
      document.querySelector("#success").classList.remove("hide");
    }
    
    else if(myForm.emailBtn.checked === true){
      //add full name, email, and message to the object
      mySubmission.fullName = myForm.fullName.value;
      mySubmission.email = myForm.email.value;
      mySubmission.myMessage = myForm.myMessage.value;

      //display object
      document.getElementById("formSub").innerHTML = `Full name: ${mySubmission.fullName}<br>
      Email: ${mySubmission.email}<br>
      Message: ${mySubmission.myMessage}`;
      document.querySelector("#success").classList.remove("hide");
    }
  }

  //clear form input
  myForm.reset();

}

//add event listener to run the validateForm function
document.getElementById("mySubmit").addEventListener("click", validateForm);