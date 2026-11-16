// Fig. 10.12: ImagenAleatoria2.js
// Selección de imágenes al azar usando arreglos
var imgIcono;

// Tus imágenes reales ubicadas en la carpeta image
var imagenes = [ "ECP", "daft", "deitel", "camello", "inqui (1)", "inqui (2)" ];

// Las descripciones originales del libro se mantienen intactas
var descripciones = [ 
    "Error com&uacute;n de programaci&oacute;n",
    "Tip para prevenir errores", 
    "Buena pr&aacute;ctica de programaci&oacute;n",
    "Observaci&oacute;n de apariencia visual", 
    "Tip de rendimiento", 
    "Tip de portabilidad" 
];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// el elemento img en el cuerpo del documento
function elegirImagen()
{
    var indice = Math.floor( Math.random() * imagenes.length );
    var nombreArchivo = imagenes[ indice ];
    
    // Detecta automáticamente si es .jpg o .png según el archivo
    var extension = (nombreArchivo === "camello" || nombreArchivo === "daft" || nombreArchivo === "jeilo") ? ".jpg" : ".png";
    
    imgIcono.setAttribute( "src", "image/" + nombreArchivo + extension );
    imgIcono.setAttribute( "alt", descripciones[ indice ] );
} // fin de la función elegirImagen

// registra el manejador de eventos de clic de imgIcono
function iniciar()
{
    imgIcono = document.getElementById( "imagen" );
    imgIcono.addEventListener( "click", elegirImagen, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );