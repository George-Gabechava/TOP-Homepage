console.log("hi");

// Button Logic

const gitButton = document.getElementById('gitButtonMain');
gitButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'https://github.com/George-Gabechava';
});

const linkedInButton = document.getElementById('linkedInButtonMain');
linkedInButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'https://www.linkedin.com/in/george-gabechava-92905b85';
});

const project1pic = document.getElementsByClassName('link1')[0];
project1pic.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Battleship/', '_blank');
});

const project1 = document.getElementsByClassName('link1')[1];
project1.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Battleship/', '_blank');
});

const project1git = document.getElementById("git1");
project1git.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://github.com/George-Gabechava/TOP-Battleship', '_blank');
});

const project2pic = document.getElementsByClassName('link2')[0];
project2pic.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Weather-API/', '_blank');
});

const project2 = document.getElementsByClassName('link2')[1];
project2.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Weather-API/', '_blank');
});

const project2git = document.getElementById("git2");
project2git.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://github.com/George-Gabechava/TOP-Weather-API', '_blank');
});

const project3pic = document.getElementsByClassName('link3')[0];
project3pic.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Todo-List/', '_blank');
});

const project3 = document.getElementsByClassName('link3')[1];
project3.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://george-gabechava.github.io/TOP-Todo-List/', '_blank');
});

const project3git = document.getElementById("git3");
project3git.addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://github.com/George-Gabechava/TOP-Todo-List', '_blank');
});


// Photo Label to a single line only on tablet widths
let myName = document.getElementById("photoLabel");
let myName2lines = myName.innerHTML;

function myFunction(x) {
  if (x.matches) { // If media query matches
    myName.innerText = "George Gabechava";
  }
  else {
    myName.innerHTML = myName2lines;

  }
}

// Create a MediaQueryList object for Tablet width
var x = window.matchMedia("(min-width: 500px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});

// module.exports = { };
