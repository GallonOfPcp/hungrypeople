let sliderButton = document.querySelectorAll('.slider-button');
let activeButton = document.querySelector('.active');
for (let i = 0; i < sliderButton.length; i++) {

  sliderButton[i].onclick = function () {
    if (!sliderButton[i].classList.contains('active')) {
      sliderButton[i].classList.add('active');
      activeButton.classList.remove('active');
      activeButton = sliderButton[i];
    }
  }

}
