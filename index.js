function encriptar(){

    var texto = document.getElementById("encriptar").value.toLowerCase();

    if (texto) { 

        texto = texto.replaceAll("e", "enter");
        texto = texto.replaceAll("i", "imes");
        texto = texto.replaceAll("a", "ai");
        texto = texto.replaceAll("o", "ober");
        texto = texto.replaceAll("u", "ufat");

        document.getElementById("munieco").style.display = "none";
        document.getElementById("encriptado").innerHTML = texto;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

    } else if (texto == ""){

        alert("No se ha ingresado ningún texto");
    }   
    
    document.getElementById("encriptar").value = "";  
}    

function desencriptar(){
    
    var texto = document.getElementById("encriptar").value.toLowerCase();

    if (texto) { 

        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");

        document.getElementById("munieco").style.display = "none";     
        document.getElementById("encriptado").innerHTML = texto;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";

    }  else if (texto == ""){

        alert("No se ha ingresado ningún texto");

    } 

    document.getElementById("encriptar").value = "";
}    


function copiartexto(){
    var copiado = document.querySelector("#encriptado");
    copiado.select();
    document.execCommand("copy");
    
}
