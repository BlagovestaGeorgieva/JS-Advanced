function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let rowsInfo = document.querySelectorAll('tbody tr');

   function onClick() {
      for (const row of rowsInfo) {
         row.classList.remove('select');

         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }

      input.value = '';
   }
}