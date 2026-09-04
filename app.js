// * Seleccionamos el formulario y el contenedor donde irán las tarjetas
const formEl = document.getElementById("album-form");
const mainEl = document.querySelector("#album-container");

// * Creamos nuestra lista vacía donde guardaremos todos los álbumes (nuestra mochila)
let albums = [];

// * CORRECCIÓN 1: Faltaba un punto entre 'window' y 'addEventListener'.
// * Esto se ejecuta apenas carga la página para recuperar los datos guardados.
window.addEventListener("load", (event) => {
  // * Si no hay nada guardado en el LocalStorage con el nombre "albums", no hacemos nada y salimos.
  if (getitemLocalStorage("albums") == undefined) return;
  
  // * Si sí hay datos, los sacamos y los metemos a nuestra lista 'albums'
  albums = [...getitemLocalStorage("albums")];
  console.log(albums);

  // * CORRECCIÓN 2: Faltaba dibujar las tarjetas. 
  // * Los datos ya estaban en la memoria, pero hay que decirle que los pinte en la pantalla.
  albums.map((album) => renderCard(album, mainEl));
});

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const dataArray = [...formData];
    const album = Object.fromEntries(dataArray);
    
    // * Metemos el nuevo álbum a nuestra lista
    albums.push(album);
    // * Guardamos la lista actualizada en el disco duro del navegador (LocalStorage)
    setLocalStorage("albums", albums);
    
    // * Limpiamos la mesa (el contenedor) antes de volver a dibujar
    mainEl.innerHTML = "";
    
    // * Renderizamos (dibujamos) todas las tarjetas una por una
    albums.map((album) => renderCard(album, mainEl));
    
    // * Limpiamos las cajitas del formulario para el siguiente registro
    formEl.reset();
});

const renderCard = (albumObject, contenedor) => {
    const card = `
      <div class="card" style="width: 18rem; margin-bottom: 10px;">
        <div class="card-body">
          <h5 class="card-title">Album: ${albumObject.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Artist: ${albumObject.artist}</h6>
          <p class="card-text">Genre: ${albumObject.genre}</p>
          <a href="#" class="card-link">Release Year: ${albumObject.releaseYear}</a>
          <a href="#" class="card-link">Rating: ${albumObject.rating}</a>
        </div>
      </div>
    `;
    
    contenedor.insertAdjacentHTML("beforeend", card);
};

const setLocalStorage = (key, value) => {
  // * Paso 1: Convertimos nuestra lista de álbumes en un texto largo
  const tetxValue = JSON.stringify(value);
  // * Paso 2: Lo guardamos en la "caja fuerte" del navegador
  localStorage.setItem(key, tetxValue);
};

const getitemLocalStorage = (key) => {
  // * Si la caja fuerte está vacía, regresamos nada
  if (localStorage.getItem(key) == null) return;
  // * Si hay texto, lo convertimos de vuelta a piezas de JavaScript (objetos y listas)
  const data = JSON.parse(localStorage.getItem(key)); 
  return data;
};