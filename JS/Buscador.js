//Buscador de contenido
//Declaramos variables
const bars_search = document.getElementById("ctn-bars-search");
const icon_search = document.getElementById("ctn-icon-search");
const box_search = document.getElementById("box_search"); 
const inputSearch = document.getElementById("inputSearch");
const opciones_buscador = document.getElementById("Opciones_buscador"); 

function mostrar_buscador(){
    bars_search.style.display = "flex";
	inputSearch.focus();
}

function ocultar_buscador(event){
    // Verifica si el clic fue fuera de la barra, del ícono y de las opciones
    if (
        !bars_search.contains(event.target) && 
        !icon_search.contains(event.target)
    ) {
        bars_search.style.display = "none"; // Ocultar barra de búsqueda
    }
}

function ocultar_box_search(event) {
    // Verifica si el clic fue fuera del contenedor de opciones
    if (
        !opciones_buscador.contains(event.target) && // Contenedor de las opciones
        !inputSearch.contains(event.target) // El input de búsqueda
    ) {
        opciones_buscador.style.display = "none"; // Ocultar las opciones
    }
}

//Filtro de busqueda
function buscador_opciones() {
    // Obtener el valor ingresado en el input
    const filter = inputSearch.value.toUpperCase();
    // Seleccionar todos los elementos <li> dentro de #box-search
    const li = document.querySelectorAll("#box-search li");
	let hasResults = false;

    // Recorrer cada elemento <li>
    li.forEach((item) => {
        // Obtener el texto dentro del <a>
        const a = item.querySelector("a");
        const textValue = a.textContent || a.innerText;

        // Comparar el texto con el filtro
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = ""; // Mostrar si coincide
			hasResults = true;
        } else {
            item.style.display = "none"; // Ocultar si no coincide
        }
    });
	
	const boxSearch = document.getElementById("box-search");
    if (filter && hasResults) {
        boxSearch.style.display = "block"; // Mostrar si hay coincidencias
    } else {
        boxSearch.style.display = "none"; // Ocultar si no hay coincidencias o el input está vacío
    }
}

// Agregar eventos al ícono
icon_search.addEventListener("mouseover", mostrar_buscador);
icon_search.addEventListener("click", mostrar_buscador);
document.addEventListener("click", (event) => {
    ocultar_buscador(event);  // Oculta la barra de búsqueda
    ocultar_box_search(event); // Oculta las opciones
});
inputSearch.addEventListener("keyup", buscador_opciones);

