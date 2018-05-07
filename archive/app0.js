function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

includeHTML();

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


