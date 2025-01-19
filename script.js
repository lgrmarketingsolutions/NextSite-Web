document.addEventListener('DOMContentLoaded', function () {
    const serviceButton = document.getElementById('serviceButton');
    const serviceDropdown = document.getElementById('serviceDropdown');
    const selectedServiceInput = document.getElementById('selectedService');

    // Manejar selección de un servicio
    serviceDropdown.addEventListener('click', function (e) {
        if (e.target && e.target.dataset.value) {
            const selectedValue = e.target.dataset.value;

            // Mostrar el servicio seleccionado en el botón
            serviceButton.textContent = selectedValue;

            // Guardar el valor seleccionado en el input oculto
            selectedServiceInput.value = selectedValue;

            // Cerrar el dropdown
            serviceDropdown.style.display = 'none';
        }
    });

    // Abrir/Cerrar el dropdown al hacer clic en el botón
    serviceButton.addEventListener('click', function () {
        serviceDropdown.style.display = serviceDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!serviceButton.contains(e.target) && !serviceDropdown.contains(e.target)) {
            serviceDropdown.style.display = 'none';
        }
    });
});


window.addEventListener('scroll', function() {
    let menu = document.querySelector('.container');
    if (window.scrollY > 100) {
        menu.classList.add('scrolled');  // Cambia el estilo cuando se desplaza
    } else {
        menu.classList.remove('scrolled');
    }
});
