// Store navbar classes
var navClasses = document
  .querySelector("nav")
  .classList;

function homeAction() {
  // console.log("home");
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
var scrollTop = function () {
  return window.scrollY;
};

// Initial scroll position
var scrollState = 0;

// Primary scroll event function
var scrollDetect = function (home, down, up) {
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

window.addEventListener("scroll", function () {
  scrollDetect(homeAction, downAction, upAction);
});

// Email
function handleEmail() {
  var name = document
    .getElementById("name")
    .value
    .trim();
  var email = document
    .getElementById("email")
    .value
    .trim();
  var message = document
    .getElementById("message")
    .value
    .trim();

  var formContent = new formValidator(name, email, message);
  if (!formContent.validateName()) {
    const nameError = document.getElementById('nameError');
    nameError.innerText = "Please enter a valid name.";
    return false;
  } else {
    nameError.innerText = "";
  }

  if (!formContent.validateEmail()) {
    const emailError = document.getElementById('emailError');
    emailError.innerText = "Please enter a valid email address.";
    return false;
  } else {
    emailError.innerText = "";
  }

  if (!formContent.validateMessage()) {
    const messageError = document.getElementById('messageError');
    messageError.innerText = "Please enter a valid message.";
    return false;
  } else {
    messageError.innerText = ""
  }
  // All good, send that message!
  makeEmailAction()
  return true;
}

function formValidator(name, email, message) {
  this.name = name;
  this.email = email;
  this.message = message;

  this.stripHTML = function (string) {
    string = string
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
      .split('/')[0];
    return string;
  }

  this.validateName = function () {
    this.name = this.stripHTML(this.name);
    if (this.name.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  this.validateEmail = function () {
    this.email = this.stripHTML(this.email);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      return true;
    } else {
      return false;
    }
  }

  this.validateMessage = function () {
    this.message = this.stripHTML(this.message);
    if (this.message.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}

function makeEmailAction() {
  let stringAction = "https://formspree.io/";
  const firstPart = "elliotmreed";
  const secondPart = "gmail";
  stringAction = stringAction + firstPart + '@' + secondPart + '.com';
  document
    .getElementById("contactForm")
    .setAttribute("action", stringAction)
}
