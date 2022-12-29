let myNavbar = document.getElementById("myNavbar");

// OnScroll event handler
function onScroll2() {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;
  console.log(scroll);

  // If scroll value is more than 0 - add class
  if (scroll > 100) {
    myNavbar.classList.add("bg-dark");
    myNavbar.classList.remove("bg-transparent");
  } else {
    myNavbar.classList.remove("bg-dark");
    myNavbar.classList.add("bg-transparent");
  }
}

// Use the function
window.addEventListener("scroll", onScroll2);
