const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const uppercaseField = document.getElementById("uppercase");
const lowercaseField = document.getElementById("lowercase");
const numbersField = document.getElementById("numbers");
const symbolsField = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?";

function generatePassword() {
  let chars = "";

  if (uppercaseField.checked) chars += upperChars;
  if (lowercaseField.checked) chars += lowerChars;
  if (numbersField.checked) chars += numberChars;
  if (symbolsField.checked) chars += symbolChars;

  if (!chars) {
    passwordField.value = "";
    message.textContent = "Select at least one character type.";
    return;
  }

  let password = "";
  const length = parseInt(lengthField.value, 10);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordField.value = password;
  message.textContent = "Password generated.";
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", async () => {
  if (!passwordField.value) {
    message.textContent = "Generate a password first.";
    return;
  }

  try {
    await navigator.clipboard.writeText(passwordField.value);
    message.textContent = "Password copied to clipboard.";
  } catch (error) {
    message.textContent = "Failed to copy password.";
  }
});
