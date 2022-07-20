
let errorClass = document.getElementById("error");
let border = document.getElementById("number-people")
const inputMoney = document.getElementById("input-bill");
const numberPeople = document.getElementById("number-people");
const tipAmount = document.getElementsByClassName("first")[0];
const totalAmount = document.getElementsByClassName("second")[0];
const resetButton = document.getElementById("reset-button");
let customInput = document.getElementById("custom");

tipAmount.textContent = "$0.00";
totalAmount.textContent = "$0.00";
inputMoney.value = 0;
numberPeople.value = 0;

inputMoney.addEventListener("input", (e)=> {
    // console.log(e.target.value);
    
    
});

numberPeople.addEventListener("input", (e)=> {
    // console.log(e.target.value);
    if(numberPeople.value > 0 ) {
    
    } else {
    }
});


function moneyOfPeople(percent) {
    if (numberPeople.value > 0 && inputMoney.value > 0) {
    const percentCheck = percent.value / 100;
    const tip = inputMoney.value * percentCheck;
    const totalBill = Number(inputMoney.value) + tip;
    
    tipAmount.innerHTML = ("$" + (tip / numberPeople.value).toFixed(2));
    totalAmount.innerHTML = ("$" + (totalBill / numberPeople.value).toFixed(2));
}
peopleZero();
}

function customPercent(customPer) {
        if (numberPeople.value > 0 && inputMoney.value > 0) {
            const percentCheck = customPer.value / 100;
            const tip = inputMoney.value * percentCheck;
            const totalBill = Number(inputMoney.value) + tip;

   tipAmount.innerHTML = ("$" + (tip / numberPeople.value).toFixed(2));
     totalAmount.innerHTML = ("$" + (totalBill / numberPeople.value).toFixed(2));
    }
    peopleZero();
 }

    let checker = true;
// this function is for red border and text if number of people is equal 0
function peopleZero() {
    if (numberPeople.value <= 0) {
    errorClass.style.display = "block";
    border.style.border = "2px solid red";
    checker = false
    } else {
        errorClass.style.display = "none";
        border.style.border = "none";
    }
    
}

    
// this function will reset to default value
function resetAll(resetButton) {
    tipAmount.textContent = "$0.00";


    totalAmount.textContent = "$0.00";

    inputMoney.value = 0;
    numberPeople.value = 0;
    // customPercent.value = 0;
    customInput.value = "Custom";
}



