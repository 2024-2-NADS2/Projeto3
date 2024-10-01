document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let index = 0;
    let isTransitioning = false;

    function showSlide(index) {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        if (isTransitioning) return; // Evita múltiplos cliques durante a transição
        isTransitioning = true;
        index++;
        if (index >= totalSlides) {
            index = 0; // Reinicia no primeiro slide
        }
        showSlide(index);
        setTimeout(() => (isTransitioning = false), 500); // Libera após a transição
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        index--;
        if (index < 0) {
            index = totalSlides - 1; // Vai para o último slide
        }
        showSlide(index);
        setTimeout(() => (isTransitioning = false), 500);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Inicializa o carrossel na primeira imagem
    showSlide(index);
});

// Seleciona o botão pelo ID
const button = document.getElementById('redesaborsolidario');

// Adiciona o evento mouseover para mudar a cor quando o mouse passa por cima
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#45a049'; // Cor alterada
});

// Adiciona o evento mouseout para restaurar a cor original quando o mouse sai
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#4CAF50'; // Cor original
});


