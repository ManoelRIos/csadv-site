//Abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  })
}

//esconder o menu ao clica em um item
const links = document.querySelectorAll('nav ul li a');

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

//adicionar sombra no header ao scrollar
function addShadowOnHeader(){
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight){
      //scroll é maior que a altura do header
      header.classList.add('scroll'); 
    }else{
      //menor que a altura do header
      header.classList.remove('scroll');      
    }
}

/* Testimonial carousel*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: {
    releaseOnEdges: true,	
  },
  keyboard: true,
  // Navigation arrows

});

/*ScrollReveal: Mostrar elementos quando der scroll na página*/ 
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  {interval: 100}
  )

  /*Back to the top button*/
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top');
    
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show');
    }else{
      backToTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', function(){
  addShadowOnHeader();
  backToTop();
})
  