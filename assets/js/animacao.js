
// Scroll animation

const debouce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout - setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};





const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (elemento) {

    if ((windowTop) > elemento.offsetTop) {
      elemento.classList.add(animationClass);
    } else {
      elemento.classList.remove(animationClass);

    }

  })
}
animeScroll();

if (target.length) {
  window.addEventListener('scroll', debouce(function () {
    animeScroll();

  }, 200))
};



// scroll click animation

// var subir = document.querySelector('.page-top')
// subir.addEventListener('click', subirTela)

// function subirTela() {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });

// }
// window.addEventListener('scroll', botaoscroll)
// function botaoscroll() {
//   if (window.scrollY === 0) {
//     document.querySelector('.page-top').style.bottom = '-50px'
//   } else {
//     document.querySelector('.page-top').style.bottom = '0'

//   }
// }


// var homeMob = document.querySelector('.icon01')
// homeMob.addEventListener('click',homeMobile)
// function homeMobile() {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });

// }
// var servicoMob = document.querySelector('.icon02')
// servicoMob.addEventListener('click',servicomobile)
// function servicomobile() {
//   window.scrollTo({
//     top: 3075,
//     left: 0,
//     behavior: 'smooth'
//   });

// }
// var sobreMob = document.querySelector('.icon03')
// sobreMob.addEventListener('click',sobremobile)
// function sobremobile() {
//   window.scrollTo({
//     top: 6252,
//     left: 0,
//     behavior: 'smooth'
//   });

// }
// var contatoMob = document.querySelector('.icon04')
// contatoMob.addEventListener('click',contatomobile)
// function contatomobile() {
//   window.scrollTo({
//     top: 6661,
//     left: 0,
//     behavior: 'smooth'
//   });

// }




