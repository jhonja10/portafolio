document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        document.getElementById("mensaje-confirmacion").textContent = "Mensaje enviado correctamente.";
        document.getElementById("mensaje-confirmacion").style.color = "green";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("mensaje-confirmacion").textContent = "Por favor completa todos los campos.";
        document.getElementById("mensaje-confirmacion").style.color = "red";
    }
});