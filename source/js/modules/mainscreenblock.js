const blueBlock = document.querySelector('.main-screen__block');

const animateBlock = function () {
  let flag = true;
  window.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (flag) {
      blueBlock.classList.add('main-screen__block--animate');
      blueBlock.classList.remove('main-screen__block--animateback');
      flag = !flag;
    } else {
      blueBlock.classList.add('main-screen__block--animateback');
      blueBlock.classList.remove('main-screen__block--animate');
      flag = !flag;
    }
  });
};

export {animateBlock};
