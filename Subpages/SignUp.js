document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const sex = document.querySelector("input[name='sex']:checked");

  let hasError = false;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!firstName) {
    document.getElementById("firstNameError").textContent = "required";
    hasError = true;
  }

  if (!lastName) {
    document.getElementById("lastNameError").textContent = "required";
    hasError = true;
  }

  if (!sex) {
    document.getElementById("sexError").textContent = "required";
    hasError = true;
  }

  if (!email) {
    document.getElementById("emailError").textContent = "required";
    hasError = true;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = "required";
    hasError = true;
  }

  if (!reason) {
    document.getElementById("reasonError").textContent = "required";
    hasError = true;
  }

  if (hasError) return;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("sex", sex.value);
  localStorage.setItem("reason", reason);

  window.location.href = "Profile.html";
});