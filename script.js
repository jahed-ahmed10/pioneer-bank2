// const loginPage = document.getElementById("login-area");

// const enterBtn1 = document.getElementById('submit-btn');

// const secondPage = document.getElementById('second-page');

// enterBtn1.addEventListener('click', function () {
//   loginPage.style.display="none";
//   console.log("gayab hoyegeche");
//   secondPage.style.display="block";
// });

// const depositBalance = document.getElementById("deposit-balance");

// const withdrawBalance = document.getElementById('total-withdraw');
// const RemainingBalance = document.getElementById("remaining-balance");

// const depositInput = document.getElementById('deposit-field');
// const withdrawInput = document.getElementById('withdraw-field');

// const depositBtn=document.getElementById("deposit-btn")

// const withdrawBtn = document.getElementById('Withdraw-btn');

// depositBtn.addEventListener("click", function () {
//   const depositAmount = depositInput.value;
//   const depositNumber = parseFloat(depositAmount);
//   const balanceShows = depositBalance.innerText = depositNumber;
//   console.log(balanceShows);

//   const currentDeposit = parseFloat(depositBalance.innerText);

//   const totalDeposit = depositNumber + currentDeposit;

//   depositBalance.innerText = totalDeposit;
//   console.log(totalDeposit);

// });

// withdrawBtn.addEventListener("click", function () {
//   let value = withdrawInput.value;

//   withdrawBalance.innerHTML = `$ ${value}`
//   console.log("hoiche");

//   if (value) {
//     withdrawBalance.innerHTML = `$ ${value}`
//   }
// });

// function balanceCalculating() {
//   let balance = 0;

// }

const loginPage = document.getElementById('login-area');
const enterBtn1 = document.getElementById('submit-btn');
const secondPage = document.getElementById('second-page');
const depositBalance = document.getElementById('deposit-balance');
const withdrawBalance = document.getElementById('total-withdraw');
const RemainingBalance = document.getElementById('remaining-balance');
const depositInput = document.getElementById('deposit-field');
const withdrawInput = document.getElementById('withdraw-field');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('Withdraw-btn');

// Navigate to second page
enterBtn1.addEventListener('click', function () {
  loginPage.style.display = 'none';
  secondPage.style.display = 'block';
  console.log('Navigation to the second page');
});

let totalBalance = 0; // Track the total balance

// Deposit functionality
depositBtn.addEventListener('click', function () {
  const inputValue = parseFloat(depositInput.value);
  if (!isNaN(inputValue) && inputValue > 0) {
    totalBalance += inputValue;
    depositBalance.innerHTML = `$ ${inputValue}`;
    updateRemainingBalance();
    depositInput.value = ''; // Clear the input field
    console.log(`Deposited: $${inputValue}`);
  } else {
    alert('Please enter a valid deposit amount');
  }
});

// Withdraw functionality
withdrawBtn.addEventListener('click', function () {
  const value = parseFloat(withdrawInput.value);
  if (!isNaN(value) && value > 0) {
    if (value <= totalBalance) {
      totalBalance -= value;
      withdrawBalance.innerHTML = `$ ${value}`;
      updateRemainingBalance();
      withdrawInput.value = ''; // Clear the input field
      console.log(`Withdrew: $${value}`);
    } else {
      alert('Insufficient balance!');
    }
  } else {
    alert('Please enter a valid withdrawal amount');
  }
});

// Update the remaining balance display
function updateRemainingBalance() {
  RemainingBalance.innerHTML = `$ ${totalBalance}`;
}
