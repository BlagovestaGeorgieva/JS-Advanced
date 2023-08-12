function solve() {

  let textElement = document.getElementById('text');
  let textInput = textElement.value;
  let conventionElement = document.getElementById('naming-convention');
  let conventionInput = conventionElement.value;

  let result = '';

  if (conventionInput === 'Camel Case') {
    for (let i = 0; i < textInput.length; i++) {
      if (textInput[i] === ' ') {
        result += (textInput[i + 1].toUpperCase());
        i++;
      } else {
        result += (textInput[i].toLowerCase());
      }
    }
  } else if (conventionInput === 'Pascal Case') {
    result += (textInput[0].toUpperCase());

    for (let i = 1; i < textInput.length; i++) {
      if (textInput[i] === ' ') {
        result += (textInput[i + 1].toUpperCase());
        i++;
      } else {
        result += (textInput[i].toLowerCase());
      }
    }
  } else {
    result = 'Error!';
  }


  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}
