var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector("nav").offsetHeight;
console.log(navbarHeight);

// On scroll,
window.onscroll = function() {
  didScroll = true;
  console.log(didScroll);
}

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var scrollPosition = window.pageYOffset;
  console.log(scrollPosition);
  if (Math.abs(lastScrollTop - scrollPosition) <= delta) {
    return;
  }

  if (scrollPosition > lastScrollTop && scrollPosition > navbarHeight) {
    document.querySelector('nav').classList.add('nav-up');
  } else {
    if (scrollPosition + window.outerHeight < document.outerHeight) {
      document.querySelector('nav').classList.remove('nav-up');
    }
  }

  lastScrollTop = scrollPosition;
}
