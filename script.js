// Cursor movement based on mouse position using GSAP
document.addEventListener("mousemove", function (event) {
  gsap.to(".cursor", {
    top: event.y,
    left: event.x,
    duration: 0.3,
  });
});

// Continuous animations
gsap.to(".headingnewday", {
  duration: 25,
  x: "-100%",
  repeat: -1,
  ease: "linear",
});


gsap.to(".followheading", {
  duration: 50,
  x: "-100%",
  repeat: -1,
  ease: "linear",
});

gsap.to(".followsvg", {
  duration: 15,
  rotate: 360,
  repeat: -1,
  ease: "linear",
});

gsap.to(".linkanim", {
  x: -1000,
  repeat: -1,
  duration: 15,
});

// Hover effect on link boxes
var linkBoxes = document.querySelectorAll(".linkboxes");

linkBoxes.forEach(function (linkBox) {
  linkBox.addEventListener("mouseover", function () {
    if (linkBox.children.length >= 3) {
      linkBox.children[2].style.height = "100%";
    }
  });

  linkBox.addEventListener("mouseout", function () {
    if (linkBox.children.length >= 3) {
      linkBox.children[2].style.height = "0%";
    }
  });
});

// Menu toggle functionality
function setupMenu() {
  document.querySelector(".menu-open").addEventListener("click", function () {
    gsap.to(".menu-wrap", {
      left: "0%",
    });
  });

  document.querySelector(".menu-close").addEventListener("click", function () {
    gsap.to(".menu-wrap", {
      left: "100%",
    });
  });
}

setupMenu();
