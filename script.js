
const inputMoney = document.getElementById("input-bill");
inputMoney.value = 0;
inputMoney.addEventListener("input", (e)=> {
    console.log(e.target.value);
    peopleZero();
});

const numberPeople = document.getElementById("number-people");
numberPeople.value = 0;
numberPeople.addEventListener("input", (e)=> {
    console.log(e.target.value);
});

function moneyOfPeople(percent) {
    let percentCheck = ((100 * percent) / 100);
    let totalPayment = inputMoney.value / numberPeople.value
    const forPeople = percentCheck / numberPeople.value;
    let sum = totalPayment + forPeople;
    tipAmount.innerHTML = ("$" + forPeople);
    totalAmount.innerHTML = ("$" + sum);
}


let errorClass = document.getElementById("error");
let border = document.getElementById("number-people")

let checker = true;
function peopleZero() {
    if (numberPeople.value == 0) {
    errorClass.style.display = "block";
    border.style.border = "2px solid red";
    } else {
        errorClass.style.display = "none";
        border.style.border = "none";
    }
    
}



const customPercent = document.getElementById("custom");
customPercent.value = 0;
customPercent.addEventListener("input", (e)=> {
    
    let cusTom = moneyOfPeople((parseFloat(customPercent.value)));
    tipAmount.innerHTML = ("$" + forPeople);
    totalAmount.innerHTML = ("$" + cusTom);
    
});




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



