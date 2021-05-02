

function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 70 * i);       
       });
      }
            



const título = document.querySelector('h1');
typeWriter(título);
