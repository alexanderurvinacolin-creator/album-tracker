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