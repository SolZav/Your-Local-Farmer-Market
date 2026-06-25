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

//form validation