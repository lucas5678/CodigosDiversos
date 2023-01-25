if (localStorage.getItem("visits") === null) {
    localStorage.setItem("visits", 0);
  }
  localStorage.setItem("visits", parseInt(localStorage.getItem("visits")) + 1);
  document.getElementById("visitor-count").innerHTML = localStorage.getItem("visits");
  