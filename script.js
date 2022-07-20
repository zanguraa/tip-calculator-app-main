
let errorClass = document.getElementById("error");
let border = document.getElementById("number-people")
const inputMoney = document.getElementById("input-bill");
const numberPeople = document.getElementById("number-people");


inputMoney.value = 0;
inputMoney.addEventListener("input", (e)=> {
    // console.log(e.target.value);
    
    
});

numberPeople.value = 0;
numberPeople.addEventListener("input", (e)=> {
    // console.log(e.target.value);
    
    

});


function moneyOfPeople(percent) {
    if (inputMoney.value && numberPeople.value && percent.value) {
    const percentCheck = percent.value / 100;
    const tip = inputMoney.value * percentCheck;
    const totalBill = Number(inputMoney.value) + tip;
    
    tipAmount.innerHTML = ("$" + (tip / numberPeople.value).toFixed(2));
    totalAmount.innerHTML = ("$" + (totalBill / numberPeople.value).toFixed(2));
}
peopleZero();
}






    function customPercent(customPer) {
    if (inputMoney.value && numberPeople.value && customPer.value) {
   const percentCheck = customPer.value / 100;
   const tip = inputMoney.value * percentCheck;
    const totalBill = Number(inputMoney.value) + tip;

    
   tipAmount.innerHTML = ("$" + (tip / numberPeople.value).toFixed(2));
     totalAmount.innerHTML = ("$" + (totalBill / numberPeople.value).toFixed(2));
    }
    peopleZero();
 }



// red border and text if number of people is equal 0




// const customPercent = document.getElementById("custom");
// customPercent.value = 0;
// customPercent.addEventListener("input", (e)=> {
    
//     let cusTom = moneyOfPeople((parseFloat(customPercent.value)));
//     tipAmount.innerHTML = ("$" + forPeople);
//     totalAmount.innerHTML = ("$" + cusTom);
    
// });

let checker = true;
function peopleZero() {
    if (numberPeople.value == 0) {
    errorClass.style.display = "block";
    border.style.border = "2px solid red";
    checker = false
    } else {
        errorClass.style.display = "none";
        border.style.border = "none";
    }
    
}



const tipAmount = document.getElementsByClassName("first")[0];
tipAmount.textContent = "$0.00";

const totalAmount = document.getElementsByClassName("second")[0];
totalAmount.textContent = "$0.00";

const resetButton = document.getElementById("reset-button");

function resetAll(resetButton) {
tipAmount.textContent = "$0.00";


totalAmount.textContent = "$0.00";

inputMoney.value = 0;
numberPeople.value = 0;
customPercent.value = 0;
}



