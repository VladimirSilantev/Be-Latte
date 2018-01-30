var leftNavigationButton = document.querySelector(".left-nav");
var rightNavigationButton = document.querySelector(".right-nav");
var slide = document.querySelector(".page-header__welcome");
var targetValue = 1;
var minSlides = 1;
var maxSlides = 4;
var currentSlide;
var slideName;

var changeSlide = function (slideName) {
    if (currentSlide) {
      slide.classList.remove(currentSlide);
    }
    slide.classList.add(slideName);
    currentSlide = slideName;
  };

rightNavigationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (targetValue <= maxSlides) {
    if (targetValue < maxSlides) {
      targetValue++
    }
    slideName = 'page-header__welcome-' + targetValue;
    changeSlide(slideName);
    console.log(slideName);
  }
});

leftNavigationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (targetValue > minSlides) {
      targetValue--
    }
  if (targetValue >= minSlides) {
    slideName = 'page-header__welcome-' + targetValue;
    
    changeSlide(slideName);
    console.log(slideName);
  }
});