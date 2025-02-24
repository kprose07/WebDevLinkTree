document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Toggle icon between sun and moon
  this.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";

  // Save theme preference to local storage
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

// Load theme preference on page load
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeToggle").textContent = "☀️";
  }
};

/*
Windows
Press Win + . 
Mac
Press Control + Command + Space*/
