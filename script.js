const password = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
  const value = password.value;
  let strength = 0;

  if (value.length >= 6) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  if (strength === 0) {
    strengthFill.style.width = "0%";
    strengthText.textContent = "Strength: ";
  } 
  else if (strength === 1) {
    strengthFill.style.width = "25%";
    strengthFill.style.background = "red";
    strengthText.textContent = "Strength: Weak";
  } 
  else if (strength === 2) {
    strengthFill.style.width = "50%";
    strengthFill.style.background = "orange";
    strengthText.textContent = "Strength: Medium";
  } 
  else if (strength === 3) {
    strengthFill.style.width = "75%";
    strengthFill.style.background = "yellow";
    strengthText.textContent = "Strength: Strong";
  } 
  else {
    strengthFill.style.width = "100%";
    strengthFill.style.background = "green";
    strengthText.textContent = "Strength: Very Strong";
  }
});