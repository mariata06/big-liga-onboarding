const preloader = document.querySelector('.preloader');
const preloaderText = preloader.querySelector('.preloader__text');
const nameLetters = preloader.querySelectorAll('.preloader__letter');
const symbolA = preloader.querySelector('.preloader__symbol-a');
const textLetters = preloaderText.querySelectorAll('.preloader__text-letter');

const animatePreloader = function () {

  setTimeout(function animateLetters() {
    nameLetters.forEach(function (letter) {
      letter.classList.add('preloader__letter--animate');
    }, 2000);
  });

  setTimeout(function animateA() {
    symbolA.classList.add('preloader__symbol-a--animate');
  }, 2000);

  setTimeout(function animateTextLetters() {
    textLetters.forEach(function (item) {
      item.classList.add('preloader__text-letter--animate');
    }, 10000);
  });

  window.addEventListener('click', function (evt) {
    evt.preventDefault();
    preloader.classList.add('preloader--done');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      preloader.classList.add('preloader--done');
    }
  });
};

export {animatePreloader};
