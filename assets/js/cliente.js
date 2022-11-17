let totalSlides = document.querySelectorAll('.cliente--inf-body').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.cliente-body--slide').style.width =
  `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width =
  `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height =
  `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  if (currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.cliente--inf-body').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.cliente-body--slide').style.marginLeft =
    `-${newMargin}px`;
}

// setInterval(goNext, 5000);