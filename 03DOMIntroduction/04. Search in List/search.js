function search() {
   
   let inputElement = document.getElementById('searchText').value;
   let townlist = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let counter = 0;
   
   for (let i = 0; i < townlist.length; i++) {
      let currentTown = townlist[i].textContent;
      let currentTownElement = townlist[i];
      
      if (currentTown.includes(inputElement) && inputElement !== '') {
         counter++;
         currentTownElement.style.fontWeight = 'bold';
         currentTownElement.style.textDecoration = 'underline';
      } else {
         currentTownElement.style.fontWeight = 'normal';
         currentTownElement.style.textDecoration = 'none';
      }
   }
   
   let text = `${counter} matches found`;
   result.textContent = text;
}
