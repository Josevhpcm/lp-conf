function unirseAlEvento() {
    // Aquí puedes agregar la lógica para redirigir al evento en vivo
    alert('¡Excelente decisión! Serás redirigido al evento en vivo de Pensiónate con Más');
    // window.location.href = 'https://tueventoenvivo.com';
}

// Animación de aparición escalonada para los beneficios
document.addEventListener('DOMContentLoaded', function () {
    const beneficios = document.querySelectorAll('.beneficio');
    beneficios.forEach((beneficio, index) => {
        beneficio.style.animationDelay = `${index * 0.2 + 0.1}s`;
    });
});

// Efecto de carga progresiva
window.addEventListener('load', function () {
    document.querySelector('.contenedor-principal').style.opacity = '0';
    document.querySelector('.contenedor-principal').style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.querySelector('.contenedor-principal').style.opacity = '1';
    }, 100);
});