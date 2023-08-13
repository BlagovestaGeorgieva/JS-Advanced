function create(words) {
   
   let divElement = document.getElementById('content');
   let elements = words;

   const handleClick = (e) => {
      let childrenArr = Array.from(e.target.children);
      let children = childrenArr[0];
      children.style.display = 'inline';
   }

   for (let i = 0; i < elements.length; i++) {
      let text = elements[i];
      let div = document.createElement('div');
      divElement.appendChild(div);
      let p = document.createElement('p');
      p.textContent = text;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', handleClick)
   }
}