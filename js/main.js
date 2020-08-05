const header = document.querySelector('.header');

window.onscroll = function(){
	let scroll = window.scrollY;

     if(scroll >= 300){
     	header.classList.add('sticky')

     }else{
     	header.classList.remove('sticky')

     }
};


const hum = document.querySelector('.hum-burger');

hum.addEventListener("click", () => {
	header.classList.toggle('change');
});
