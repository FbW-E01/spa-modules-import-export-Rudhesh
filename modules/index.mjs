import {modulo,percentage, percentageOf, difference} from "./percentage.js"

import {fixRoundingErrors, calculateAspectRatio} from "./aspect-ratio.js"


//Modulo

const modulo_1 = document.querySelector("#modulo_1")

const modulo_2 = document.querySelector("#modulo_2")

const modulo_result = document.querySelector("#modulo_result")

const percentage_1 = document.querySelector('#percentage_1')

const percentage_2 = document.querySelector('#percentage_2')

const percentage_result = document.querySelector('#percentage_result')


// modulo_result.addEventListener("click", ()=> {
//   const result = modulo(modulo_1.value, modulo_2.value)

//   modulo_result.value = result;

// } )

let form = document.querySelector('form');
form.addEventListener('change', function() {
    // alert('Hi!');
    const result = modulo(modulo_1.value, modulo_2.value)

    modulo_result.value = result;

    console.log(result)
  
});


let percentageform = document.querySelector("#percentage-form");

percentageform.addEventListener('change', function() {
    // alert('Hi!');
    
    const result2 = percentage(percentage_1.value, percentage_2.value)

    percentage_result.value = result2 

    console.log(result2)
  
});


let percentageofform = document.querySelector("#percentageOf-form");

percentageofform.addEventListener('change', function() {
    // alert('Hi!');
  


    const result3 = percentage(percentageOf_1.value, percentageOf_2.value)

    percentageOf_result.value = result3

    console.log(result3)


  
});


let differenceform = document.querySelector("#difference-form");

differenceform.addEventListener('change', function() {
    
    const result3 = percentage(difference_1.value, difference_2.value)

    difference_result.value = result3

    console.log(result3)


  
});

const ratio_1 = document.getElementById("ratio_1");
const ratio_2 = document.getElementById("ratio_2");
const ratio_result1 = document.getElementById("ratio_result-width");
const ratio_result2 = document.getElementById("ratio_result-height");

const aspectRatio = document.querySelector("#aspect-form")

aspectRatio.addEventListener("change", function () {
    const result4 = calculateAspectRatio(ratio_2.value, ratio_1.value, ratio_result1.value )


    ratio_result2.value  = result4

    console.log(result4)


})

