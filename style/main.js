const list = document.querySelectorAll('.list ');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
/  menu bar click/
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

menuIcon.addEventListener('click', function () {
  nav.classList.toggle('active');
});
/ BMI Calculator/
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight) {
    resultDiv.style.display = "block";
    resultDiv.className = "result";
    resultDiv.style.background = "#e74c3c";
    resultDiv.innerHTML = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  let status = "";
  let cssClass = "";

  if (bmi < 18.5) {
    status = "Underweight";
    cssClass = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Healthy";
    cssClass = "healthy";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
    cssClass = "overweight";
  } else {
    status = "Obese";
    cssClass = "obese";
  }

  resultDiv.style.display = "block";
  resultDiv.className = "result " + cssClass;
  resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> (${status})`;
}