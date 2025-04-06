// Espera a que la página cargue completamente
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Agrega una clase para dispositivos que no soportan hover
    if (window.matchMedia('(hover: none)').matches) {
        document.body.classList.add('no-hover');
    }
});