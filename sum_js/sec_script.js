 const targetElement = document.querySelectorAll(".one");
console.log("画面の高さ",window.innerHeight)

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
 console.log("画面の高さ",window.innerHeight)
 
  document.addEventListener("scroll",function() {
         const getElementDistance = targetIntroduction.getBoundingClientRect().
         top + targetIntroduction.clientHeight * .6
 
         if(window.innerHeight > getElementDistance){
            targetIntroduction.classList.add("show");
         }
     }
  )