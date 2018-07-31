//
// Work with navigation menu
//
const navToggle = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const containerAll = document.querySelector(".container-all");

// change state of our nav menu and underlying page content
if (navToggle) {
  navToggle.addEventListener("click", _ => {
    containerAll.style.transition = "transform ease-out 250ms"; //just fix some bug for mobile devices with incorrect transition
    document.body.classList.toggle("nav-is-open");
    navToggle.classList.toggle("is-active");
  });
}

//hide our nav menu if user click some menu item
if (nav) {
  nav.addEventListener("click", _ => {
    containerAll.style.transition = "0ms"; //just fix some bug for mobile devices with incorrect transition
    document.body.classList.remove("nav-is-open");
    navToggle.classList.remove("is-active");
  });
}

//
// Work with modals
//
const portfolioContainer = document.querySelector(".portfolio-items");

portfolioContainer.addEventListener("click", e => {
  const modalToggle = e.target.closest(".portfolio-link");

  if (!modalToggle) return;

  const modal = modalToggle.parentNode.parentNode.nextElementSibling; //it'll be our portfolio-modal div
  const closeButton = modal.querySelector(".modal-close");

  const modalOpen = _ => {
    modal.classList.add("is-open");
    modal.style.animation = "modalIn 500ms forwards";
  };

  const modalClose = _ => {
    modal.classList.remove("is-open");
    modal.removeEventListener("animationend", modalClose);
  };

  closeButton.addEventListener("click", _ => {
    modal.style.animation = "modalOut 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });

  // let's close a modal with Esc key
  document.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
    }
  });

  modalOpen();
});

//
// Work with filters
//
filterSelection("all"); // Execute the function and show all portfolio items

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");

  if (c == "all") {
    c = "";
  }
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      AddClass(x[i], "show");
    }
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
