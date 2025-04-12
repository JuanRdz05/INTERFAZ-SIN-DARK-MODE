// Función para actualizar el logo según el tema
function updateLogo(theme) {
    const logo = document.getElementById('logo-imagen');
    if (!logo) {
        console.warn('Elemento del logo no encontrado');
        return;
    }

    const lightSrc = logo.getAttribute('data-light-src');
    const darkSrc = logo.getAttribute('data-dark-src');
    const newSrc = theme === 'dark' ? darkSrc : lightSrc;

    console.log(`Intentando cargar: ${newSrc}`); // Verifica en consola

    // Crear imagen temporal para verificar
    const testImage = new Image();
    testImage.onload = function() {
        console.log('Imagen encontrada y cargada:', newSrc);
        logo.src = newSrc;
    };
    testImage.onerror = function() {
        console.error('ERROR: No se pudo cargar la imagen:', newSrc);
        // Mantener la imagen actual si hay error
    };
    testImage.src = newSrc;
}
// Función principal para cambiar el tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateLogo(newTheme);
    
    // Actualizar estado del interruptor
    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        themeSwitch.checked = newTheme === 'dark';
    }
}

// Verificar el tema al cargar la página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    if (savedTheme) {
        theme = savedTheme;
    } else if (systemPrefersDark) {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    updateLogo(theme);
    
    // Configurar el interruptor según el tema actual
    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        themeSwitch.checked = theme === 'dark';
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema
    loadTheme();
    
    // Configurar evento para el interruptor
    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
    }
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateLogo(newTheme);
            
            // Actualizar estado del interruptor
            const themeSwitch = document.getElementById('checkbox');
            if (themeSwitch) {
                themeSwitch.checked = newTheme === 'dark';
            }
        }
    });
    
    // Marcar el body como cargado para animaciones
    document.body.classList.add('loaded');
});