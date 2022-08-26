// selsecting the HTML elements in JS
const countEl = document.querySelector('#count-el');
const saveEl = document.querySelector('#save-el');


// count should start at 0
let count = 0;

// creating a function for the increment button
function increment(){
    count += 1;
    countEl.textContent = count
};

// creting the function for the save button
function save(){
    const saveCount = count + " - ";
    saveEl.textContent += saveCount;
    // code to ensure the count start again all over again at 0 whenever we save the previous count. 
    countEl.textContent = 0;
    count = 0;
};


