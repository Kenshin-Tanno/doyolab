 const targetElement = document.querySelectorAll(".animationTarget");

 document.addEventListener("scroll",function() {
    for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().
        top + targetElement[i].clientHeight * .6

        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
 })

 const targetIntroduction = document.querySelector(".pic");
 
  document.addEventListener("scroll",function() {
         const getElementDistance = targetIntroduction.getBoundingClientRect().
         top + targetIntroduction.clientHeight * .6
 
         if(window.innerHeight > getElementDistance){
            targetIntroduction.classList.add("show");
         }
     }
  )

  const targetWords = document.querySelector(".big");
 
  document.addEventListener("scroll",function() {
         const getElementDistance = targetWords.getBoundingClientRect().
         top + targetWords.clientHeight * .6
 
         if(window.innerHeight > getElementDistance){
            targetWords.classList.add("show");
         }
     }
  )
 
 const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed:1000,

    autoplay:{
        delay:3000
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const window_width = window.innerWidth
  console.log(window_width)

  const headerElement = document.getElementById('header');

document.addEventListener('scroll', function() {
 const scrollY = window.pageYOffset;
 console.log(scrollY);

   if (scrollY > 570) {
      headerElement.classList.add('active');
   } else {
      headerElement.classList.remove('active');
   }

});
 