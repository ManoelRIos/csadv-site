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

//adicionar shadow no header ao scrollar
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');

  }else{
    header.classList.remove('scroll');
    
  }
})

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
  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function(){
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show');
      
    }else{
      backToTopButton.classList.remove('show');
    }
  })
  