const blueBlock = document.querySelector('.main-screen__block');

const animateBlock = function () {
  window.addEventListener('click', function (evt) {
    evt.preventDefault();
    blueBlock.classList.add('main-screen__block--animate');
  });
};

export {animateBlock};