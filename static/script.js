
function copiarPassword() {
    const elemento = document.getElementById("password");

    if (!elemento) {
        alert("No hay contraseña para copiar");
        return;
    }

    const texto = elemento.textContent;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto)
            .then(() => alert("Contraseña copiada"))
            .catch(() => copiarMetodoAlterno(texto));
    } else {
        copiarMetodoAlterno(texto);
    }
}

function copiarMetodoAlterno(texto) {
    const temp = document.createElement("textarea");
    temp.value = texto;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("Contraseña copiada");
}

