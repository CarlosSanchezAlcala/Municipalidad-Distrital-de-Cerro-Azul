document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("modal");

    // Obtener el botón de cerrar
    var span = document.getElementsByClassName("close")[0];

    // Mostrar el modal al cargar la página
    modal.style.display = "block";

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal cuando se hace clic fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});