// TODO: GET INPUT VALUE BY ID :
const getInputFieldValueById = elementId => {
  const inputEl = document.getElementById(elementId);
  const inputValue = inputEl.value;
  inputEl.value = '';
  if (isNaN(inputValue) === true) {
    alert("Enter a Number value!")
    return 0;
  } else {
    const convertNumberValue = parseFloat(inputValue);
    return convertNumberValue;
  }

}

// todo: get inner text by id :
const getTextElementValueById = elementId => {
  const textElement = document.getElementById(elementId).innerText;
  const convertNumber = parseFloat(textElement);
  return convertNumber;
}

// TODO: SET ELEMENT INNER TEXT VALUE BY ID
const setTextElementValueById = (elementId, newValue) => {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

