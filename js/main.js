function sayHi() {
  alert("Welcome 🔥");

}

function enterSite() {
 
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hidden");
  }, 500);

}

// Listen for keyboard press
document.addEventListener("keydown", function(event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    enterSite();// Call the function to enter the site
  }
});