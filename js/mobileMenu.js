//main nav
var menuToggle = document.querySelector(".main-nav__toggle");
var mobileMenu = document.querySelector(".main-nav__wrapper");
var contactsButton = document.querySelector(".main-nav__contacts");
//page header
var mainLogo = document.querySelector(".page-header__logo");
var leftNavigationButton = document.querySelector(".left-nav");
var rightNavigationButton = document.querySelector(".right-nav");
//page main
var pageMain = document.querySelector(".page-main");

var menuState = false;

var openMenu = function () {
  mobileMenu.classList.add("show-menu");
  mainLogo.classList.add("shift-logo");

  leftNavigationButton.classList.add("hide-left-nav");
  rightNavigationButton.classList.add("hide-right-nav");

  //leftNavigationButton.style.display = "none"
  //rightNavigationButton.style.display = "none"
  contactsButton.classList.add("contacts--mobile");
  pageMain.classList.add("page-main-mobile");
  menuState = true;
}

var closeAnimate = function () {
  mobileMenu.classList.add("hide-menu");
  mainLogo.classList.add("shift-logo-back");
}

var deleteCloseAnimate = function () {
  mobileMenu.classList.remove("hide-menu");
  mainLogo.classList.remove("shift-logo-back");
}

var closeMenu = function () {
  mobileMenu.classList.remove("show-menu");
  mainLogo.classList.remove("shift-logo");

  leftNavigationButton.classList.remove("hide-left-nav");
  rightNavigationButton.classList.remove("hide-right-nav");

  //leftNavigationButton.style.display = "block"
  //rightNavigationButton.style.display = "block"
  contactsButton.classList.remove("contacts--mobile");
  pageMain.classList.remove("page-main-mobile");
  menuState = false;
}

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuState == false) {
    openMenu();
  } else {
    closeAnimate();
    setTimeout (function() {
      closeMenu();
      deleteCloseAnimate();
    }, 900)
  }
  console.log(menuState);
});