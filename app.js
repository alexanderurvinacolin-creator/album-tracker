/**
 * Todo lo que selecionemos al principio debe ser seleccionado mediante el document.
 * 
 * *Opciones de Seleccion Clásicas.
 * getElementByld
 * getElementsByClassName
 * 
 * *Opciones de Sleccion Modernas.
 * Nos permiten seleccionar por un selector css, como:
 * etiqueta por ejemplo form
 * clase . por ejemplo: form-control
 * id
 */

const formEl = document.getElementById("album-form");
const mainEl = document.querySelector("#album-container");

/** 
 * *EVENTOS 
 * Es cualquier accion que realiza el usuario en la página web.
 * ?Escuchar por el evento.
 * ?Escuchamos por un evento que cuando ocurra desencadene una respuesta.
 * 
*/

/**
 * Pasos paar extraer la información.
 * 1. Agregar un event listener del evento submit
 * 2. Prevenir el comportamiento default
 * 3. Construir un form data dandole el elemento formulario
 */

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(event);
    console.log(formData);
    const dataArray = [...formData];
    console.log(dataArray);
    const dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);

    //*Como hacerlo en una línea: 
    // const album = Object.fromEntries([... new FormData(formEl)]);
});

const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
`;