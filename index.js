const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "123456789";
const dataSymbols = ",?;.:/!§ù%*µ$¨^&²";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veillez selectionnez une option");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }
  passwordOutput.value = password;
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié";

  setTimeout(() => {
    generateButton.textContent = "generer un mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
