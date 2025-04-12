// Función para cambiar entre modos claro/oscuro
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Verificar preferencias al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const toggleSwitch = document.querySelector('#checkbox');
    if (savedTheme === 'dark') {
        toggleSwitch.checked = true;
    }
    
    toggleSwitch.addEventListener('change', toggleTheme);
});