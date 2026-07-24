//rutas en gut:     {url: "/Paginas/Temas/Tema I/Características de Ondas.html", texto: "Características de una onda"},

// Datos de búsqueda
const datosBusqueda = [
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema I/Características de Ondas.html", texto: "Características de una onda"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema I/Huygens.html", texto: "Principio de Huygens"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Propagación de la luz y radiometría.html", texto: "Propagación de la luz y radiometría"},
    {url: "/Paginas/Temas/Tema II/Radiometría II.html", texto: "Radiometría II"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Potencia Radiante.html", texto: "Potencia Radiante"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Coseno Lambert.html", texto: "Ley coseno de Lambert"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Radiómetro Crooks.html", texto: "Cometas y el radiómetro de Crookes"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Velocidad Luz.html", texto: "Velocidad de la Luz"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema II/Método Roemer.html", texto: "Método de Roemer"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema III/Polarización Lineal.html", texto: "Polarización Lineal"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema III/Antenas y Polarización del Cielo.html", texto: "Antenas y polarización del Cielo"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema IV/Interferencia y Difracción.html", texto: "Interferencia y difracción"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema IV/Multiples Rendijas.html", texto: "Múltiples rendijas"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema IV/Interferómetro de Michelson.html", texto: "Interferómetro de Michelson"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-EstesiC:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema V/Estructuras y Difracción.html", texto: "Estructuras y difracción"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema V/Punto de Arago.html", texto: "Punto de Arago"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema V/Babinet.html", texto: "Principio de Babinet"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema VI/Reflexión y refracción.html", texto: "Reflexión y refracción"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema VI/Velocidad de la Luz en Materiales.html", texto: "Velocidad de la Luz en Materiales"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema VI/Métodos de Índice de Refracción.html", texto: "Métodos para medir Índice de Refracción"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema VI/Gradiente de Índice de Refracción.html", texto: "Gradiente de Índice de Refracción"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Temas/Tema VI/Ecuaciones de Fresnel.html", texto: "Ecuaciones de Fresnel"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Electronica.html", texto: "Electrónica"},
    {url: "C:/Users/dorit/OneDrive/Documentos/Tsikbal-Estesi/Paginas/Mecanica.html", texto: "Mecánica"}
];

// Ejecutando funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log("Buscador iniciado con rutas absolutas");
    
    // Generar la lista de búsqueda
    generarListaBusqueda();
    
    // Configurar event listeners
    const iconSearch = document.getElementById("ctn-icon-search");
    const coverSearch = document.getElementById("cover-ctn-search");
    const inputSearch = document.getElementById("inputSearch");
    
    if (iconSearch) {
        iconSearch.addEventListener("click", mostrar_buscador);
    }
    
    if (coverSearch) {
        coverSearch.addEventListener("click", ocultar_buscador);
    }
    
    if (inputSearch) {
        inputSearch.addEventListener("keyup", buscador_interno);
    }
});

// Función para generar la lista de búsqueda dinámicamente
function generarListaBusqueda() {
    const boxSearch = document.getElementById("box-search");
    if (!boxSearch) return;
    
    if (datosBusqueda.length === 0) {
        boxSearch.innerHTML = '<li><a href="#">No hay resultados disponibles</a></li>';
        return;
    }
    
    let html = '';
    datosBusqueda.forEach(item => {
        html += `
            <li>
                <a href="${item.url}">
                    <i class="fas fa-search"></i> ${item.texto}
                </a>
            </li>
        `;
    });
    
    boxSearch.innerHTML = html;
    console.log("Lista generada con", datosBusqueda.length, "elementos usando rutas absolutas");
}

// Variables de elementos
let bars_search = document.getElementById("ctn-bars-search");
let cover_ctn_search = document.getElementById("cover-ctn-search");
let inputSearch = document.getElementById("inputSearch");
let box_search = document.getElementById("box-search");

// Función para mostrar el buscador
function mostrar_buscador() {
    if (bars_search) bars_search.style.top = "150px";
    if (cover_ctn_search) cover_ctn_search.style.display = "block";
    if (inputSearch) {
        inputSearch.focus();
        if (inputSearch.value === "") {
            if (box_search) box_search.style.display = "none";
        }
    }
}

// Función para ocultar el buscador
function ocultar_buscador() {
    if (bars_search) bars_search.style.top = "-100px";
    if (cover_ctn_search) cover_ctn_search.style.display = "none";
    if (inputSearch) inputSearch.value = "";
    if (box_search) box_search.style.display = "none";
}

// Función de filtrado de búsqueda
function buscador_interno() {
    if (!inputSearch || !box_search) return;
    
    let filter = inputSearch.value.toUpperCase();
    let li = box_search.getElementsByTagName("li");
    
    let tieneResultados = false;
    
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a) {
            let textValue = a.textContent || a.innerText;
            
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                tieneResultados = true;
            } else {
                li[i].style.display = "none";
            }
        }
    }
    
    if (tieneResultados && inputSearch.value !== "") {
        box_search.style.display = "block";
    } else {
        box_search.style.display = "none";
    }
}