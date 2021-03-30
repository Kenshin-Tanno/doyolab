 const targetElement = document.querySelectorAll(".one");

 document.addEventListener("scroll",function() {
    for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().
        top + targetElement[i].clientHeight * .6

        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
 })

 const targetIntroduction = document.querySelector(".name");
 
  document.addEventListener("scroll",function() {
         const getElementDistance = targetIntroduction.getBoundingClientRect().
         top + targetIntroduction.clientHeight * .6
 
         if(window.innerHeight > getElementDistance){
            targetIntroduction.classList.add("show");
         }
     }
  )
  
const headerElement = document.getElementById('header');

document.addEventListener('scroll', function() {
 const scrollY = window.pageYOffset;
 console.log(scrollY);
    
    if (scrollY > 1) {
        headerElement.classList.add('active');
    } else {
        headerElement.classList.remove('active');
    }
});

