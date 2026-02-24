function sayHi() {
  alert("Welcome 🔥");

}

function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}

// Listen for keyboard press
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    enterSite();
  }
});