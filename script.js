document.getElementById('btnSi').addEventListener('click', function() {
    document.getElementById('respuesta').innerHTML = '¡Ok! Iré la otra semana 😊';
    this.style.width = '250px'; // Ajusta el ancho del botón al mensaje
    document.getElementById('btnNo').disabled = true; // Deshabilita el botón "No"
});

document.getElementById('btnNo').addEventListener('click', function() {
    document.getElementById('respuesta').innerHTML = '😢 Ya no me quieres...';
    this.innerHTML = '😢 No';
    this.disabled = true; // Deshabilita el botón "No" después de hacer clic
    document.getElementById('btnSi').disabled = true; // Deshabilita el botón "Sí"
});