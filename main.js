let togolBar = document.querySelector('.fa-bars');
let forShow = document.querySelector('.forShow')
let htsyhMainConFristP = document.querySelectorAll('.htsyhMainConFrist p');

togolBar.addEventListener('click', function () {
  forShow.classList.toggle('ULshow');
  togolBar.classList.toggle('fa-times')
});

function coundown() {
  
htsyhMainConFristP.forEach( (counter) => {
  counter.innerText = '0';

  function updetCounter () {
    const target = counter.getAttribute('data-target');
    const kaj = Number(counter.innerText);

    const inc = target / 300;
    
 
    if(kaj < target){
      counter.innerText = `${Math.round(kaj + inc)}`;
      setTimeout(updetCounter, 5);
    } else{
      counter.innerText = target;
    }
  }
  updetCounter();
});
}
coundown();
// window.addEventListener('scroll', function(){
//   let scrollHeight = window.pageYOffset;
//   if(scrollHeight <= 688){
//     coundown();
//   } else{
//     console.log('hop');
//   }
// })

// let scrollHeight = window.pageYOffset;
// console.log(scrollHeight);





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});