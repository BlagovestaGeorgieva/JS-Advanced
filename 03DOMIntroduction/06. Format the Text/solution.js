function solve() {
    let text = document.getElementById('input').value;
    let textArr = text.split('.').filter(s => s !== '');

    let result = document.getElementById('output');

    while (textArr.length > 0) {
      let finalText = textArr.splice(0, 3).join('. ') + '.';
      let paragraph = document.createElement('p');
      paragraph.textContent = finalText;
      result.appendChild(paragraph);
    }

}