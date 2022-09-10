
document.getElementById("btn-withdraw").addEventListener("click", () => {
  // fix: get value from withdrawal input field.
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");

  if (newWithdrawAmount > 0) {
    if (newWithdrawAmount <= previousBalanceTotal) {
      // FIX: SET INNER TEXT OF WITHDRAWAL AMOUNT :
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      setTextElementValueById("withdraw-total", newWithdrawTotal);
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      setTextElementValueById("balance-total", newBalanceTotal);
    } else {
      alert(`You Don't Have $${ newWithdrawAmount } In Your Account.`)
    }
  }
});
