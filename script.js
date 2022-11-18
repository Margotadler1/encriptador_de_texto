//Encriptador de Texto

//Cuando se ingresen las siguientes vocales serán modificadas por:

//la letra "e" es convertida en "enter"
//la letra "i" es convertida en "imes"
//la letra "a" es convertida en "ai"
//la letra "o" es convertida en "ober"
//la letra "u" es convertida en "ufat"


const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar() {

    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    document.getElementById("mensaje_no_encontrado").style.display = "none";
    document.getElementById("ingrese_texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {


        if (stringEncriptada.includes(matrizCodigo[i][0])) {

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;

}

function btnDesencriptar() {

    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
    document.getElementById("mensaje_no_encontrado").style.display = "none";
    document.getElementById("ingrese_texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();


    for (let i = 0; i < matrizCodigo.length; i++) {


        if (stringDesencriptada.includes(matrizCodigo[i][1])) {

            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }

   return stringDesencriptada;
}

// Funcion para copiar el texto, y luego poder pegarlo

function copiar() {
    var contenido = document.getElementById("mensaje");
    contenido.select();
    contenido.setSelectionRange(0,999999);
    document.execCommand("copy");
    alert("Texto copiado")
}