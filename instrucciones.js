window.addEventListener("scroll",function(){
   var menu=document.querySelector(".menu");
   menu.classList.toggle("fixed",window.scrollY>0);
})
const inputs=document.querySelectorAll('input');
inputs.forEach( input =>{
    input.onfocus = ( )=>{
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
    }
    input.onblur = ( )=>{
        input.previousElementSibling.classList.remove('top');
        input.previousElementSibling.classList.remove('focus');
    }
} );