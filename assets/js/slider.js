let sliderButton = document.querySelectorAll('.slider-button');
let activeButton = document.querySelector('.active');
let sliderContainer = document.querySelector('.slider-container');

for (let i = 0; i < sliderButton.length; i++) {

  sliderButton[i].onclick = function () {
    if (!sliderButton[i].classList.contains('active')) {
      sliderButton[i].classList.add('active');
      activeButton.classList.remove('active');
      activeButton = sliderButton[i];
    }
    if (i === 0) {
      sliderContainer.style.transform = "translate(0)";
    } else if (i === 1) {
      sliderContainer.style.transform = "translate(-1280px)";
    } else if (i === 2) {
      sliderContainer.style.transform = "translate(-2560px)";
    }
  }
}
