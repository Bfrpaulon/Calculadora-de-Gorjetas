document.getElementById("calculate-tip").addEventListener("click", function() {
  // Get the account value
  let billAmount = document.getElementById("bill-amount").value;
  // Get the tip percentage
  let tipPercentage = document.getElementById("tip-percentage").value;
  // Calculate the tip amount
  let tipAmount = billAmount * (tipPercentage/100);
  // Display the tip amount
  document.getElementById("tip-amount").innerHTML =
  `${tipAmount} €`;
});

function divideBill() {
  // Get the account value
  let billAmount = document.getElementById("bill-amount").value;
  // Get the number of people sharing the bill
  let numberOfPeople = document.getElementById("number-of-people").value;
  // Calculate the amount to be paid by each person
  let amountPerPerson = billAmount / numberOfPeople;
  // Displays the amount to be paid by each person
  document.getElementById("amount-per-person").innerText = "$" + amountPerPerson.toFixed(2);
}

// Add event listener to split bill button
document.getElementById("divide-bill-button").addEventListener("click", divideBill);