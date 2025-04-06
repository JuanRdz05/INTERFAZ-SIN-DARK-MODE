document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguesa');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.menu-overlay');
    
    hamburguesa.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    overlay.addEventListener('click', function() {
        hamburguesa.classList.remove('active');
        menu.classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});