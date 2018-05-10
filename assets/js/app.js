// Store navbar classes
var navClasses = document.querySelector("nav").classList;
  
  function homeAction() {
    console.log("home");
  }
  
  function downAction() {
    navClasses.remove('nav-open');
    navClasses.add('nav-collapse');
  }
  
  function upAction() {
    navClasses.remove('nav-collapse');
    navClasses.add('nav-open');
  }
  
  // returns current scroll position
  var scrollTop = function() {
    return window.scrollY;
  };
  
  // Initial scroll position
  var scrollState = 0;
  
  // Primary scroll event function
  var scrollDetect = function(home, down, up) {
    // Current scroll position
    var currentScroll = scrollTop();
    if (scrollTop() === 0) {
      home();
    } else if (currentScroll > scrollState) {
      down();
    } else {
      up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
  };

  window.addEventListener("scroll", function() {
    scrollDetect(homeAction, downAction, upAction);
  });





