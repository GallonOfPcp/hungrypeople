let scrollBtn = document.querySelector('.scroll-btn');

scrollBtn.onclick = function () {
  window.scrollTo ({
    top: 0,
    behavior: "smooth"
  });
};

window.onscroll = function () {
  if (pageYOffset > 500) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible')
  }
};

let outlineBtn = document.querySelector('.outline-btn');

outlineBtn.onclick = function () {
  window.scrollTo ({
    top: 1875,
    behavior: "smooth"
  });
};
