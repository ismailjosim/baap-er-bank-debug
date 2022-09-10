document.getElementById("btn-deposit").addEventListener("click", () => {

  // Fix: new deposit total amount
  const newDepositAmount = getInputFieldValueById("deposit-field");

  // fix: 1. get previous deposit total by id
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  // FIX: set deposit total value
  if (newDepositAmount > 0) {
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", newDepositTotal);

    // fix: get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  }
});

