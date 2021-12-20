function zoomIn(event) {
    event.target.style.transform="scale(1.2)";
    event.target.style.zIndex=1;
    evnet.target.style.transition ="all 0.5s";
}
function zoomOut(event){
    event.target.style.transform="scale(1)";
    event.target.style.zIndex=1;
    event.target.style.transition ="all 0.5s";
}
const aboutChelseaHiddenBar = document.querySelector("body > div.wrapper > div.head-wrapper > div > div.head-text01 > p")
const aboutChelseaShowBar = document.querySelector(".hidden_text")

aboutChelseaHiddenBar.addEventListener("mousemove" , function(){
    aboutChelseaShowBar.classList.remove('hidden')
})
aboutChelseaHiddenBar.addEventListener("mouseleave",function(){
    aboutChelseaShowBar.classList.add('hidden')
})

const navHiddenBar = document.querySelector("#nav_slider > div:nth-child(2) > div > div > div.navi-text01 > p")
const navShowBar = document.querySelector("body > div.wrapper > div.banner > div.hidden_text02.hidden")
navHiddenBar.addEventListener("mousemove" , function(){
    navShowBar.classList.remove('hidden')
})
navHiddenBar.addEventListener("mouseleave" , function(){
    navShowBar.classList.add('hidden')
})
const navHiddenBar1 = document.querySelector("#nav_slider > div:nth-child(1) > div > div > div.navi-text01 > p")
navHiddenBar1.addEventListener("mousemove" , function(){
  navShowBar.classList.remove('hidden')
})
navHiddenBar1.addEventListener("mouseleave" , function(){
  navShowBar.classList.add('hidden')
})
const navHiddenBar2 = document.querySelector("#nav_slider > div:nth-child(1) > div > div > div.navi-text01 > p")
navHiddenBar2.addEventListener("mousemove" , function(){
  navShowBar.classList.remove('hidden')
})
navHiddenBar2.addEventListener("mouseleave" , function(){
  navShowBar.classList.add('hidden')
})


 const SHOWING_CLASS="showing"
 const firstSlide=document.querySelector(".nav_item:first-child");
 function slide(){
     const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
     if(currentSlide){
         currentSlide.classList.remove(SHOWING_CLASS);
         const nextSlide = currentSlide.nextElementSibling;
         if(nextSlide){
             nextSlide.classList.add(SHOWING_CLASS);
         }else{
             firstSlide.classList.add(SHOWING_CLASS);
         }
     }else{
         firstSlide.classList.add(SHOWING_CLASS);
     }
 }
 slide();
 setInterval(slide, 2000);
 