function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el primer Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  
  
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  
  });
  
  function addToCart(button) {
    // Guardar estilos originales
    var originalBackgroundColor = button.style.backgroundColor;
    var originalColor = button.style.color;
    var originalText = button.innerHTML;
  
    // Cambiar estilos durante la ejecución de la función
    button.style.backgroundColor = "#4E0623";
    button.style.color = "white";
    button.innerHTML = "Agregado al carrito";
  
    // Regresar a los estilos originales después de 5 segundos
    setTimeout(() => {
        // Restaurar estilos originales con un efecto de difuminado suave
        button.style.transition = "background-color 0.5s, color 0.5s";
        button.style.backgroundColor = originalBackgroundColor;
        button.style.color = originalColor;
        button.innerHTML = originalText;
  
        // Eliminar la transición después de restaurar los estilos
        setTimeout(() => {
            button.style.transition = "none";
        }, 500);
    }, 5000);
  }
  
  