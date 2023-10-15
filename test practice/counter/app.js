let numberText = document.getElementById("number");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let number = 0;

function decrementHandler(){
    if (number <= 10){
        number--;
        numberText.innerHTML = number;
    }

}

function resetHandler(){
    number = 0;
    numberText.innerHTML = number;

}

function incrementHandler(){
    number++;
    numberText.innerHTML = number;


}