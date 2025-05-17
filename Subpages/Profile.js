window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("displayFirstName").textContent = localStorage.getItem("firstName") || "";
  document.getElementById("displayLastName").textContent = localStorage.getItem("lastName") || "";
  document.getElementById("displayEmail").textContent = localStorage.getItem("email") || "";
  document.getElementById("displaySex").textContent = localStorage.getItem("sex") || "";
  document.getElementById("displayReason").textContent = localStorage.getItem("reason") || "";
});
