

function typeWriter (elemento) {
<<<<<<< HEAD
    const textoArray = elemento.innerHTML.split('_');
=======
     const textoArray = elemento.innerHTML.split('_');
>>>>>>> 34f2d2949b31329ce5e2595234d388a57dc4ac65
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 70 * i);       
       });
      }
            



const título = document.querySelector('h1');
typeWriter(título);
