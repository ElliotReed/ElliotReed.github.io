// IFFE function
(function() {
  'use strict';
  var navbar = document.querySelector('nav');
  var navClasses = navbar.classList;

  var scrollState = 0;
  var newScrollState = function() {
    window.scrollY;
  }
  function downAction() {
    navClasses.remove('nav-open');
    navClasses.add('nav-collapse');
  }

  function upAction() {
    navClasses.remove('nav-collapse');
    navClasses.add('nav-open');
  }
  
  var handler = function() {
    var navbarHeight = navbar.offsetHeight;
    console.log('state: ' + scrollState );
    console.log(newScrollState());
    if (newScrollState === 0) {
      return;
    } else if (newScrollState > scrollState) {
      downAction();
    } else {
      upAction();
    }

    scrollState = newScrollState;
  };

  window.addEventListener('scroll', handler, false);
})();
