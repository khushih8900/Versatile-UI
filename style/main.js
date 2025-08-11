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
/QNA section/ 
const qnaItems = document.querySelectorAll('.qna-item');

qnaItems.forEach(item => {
  item.querySelector('.qna-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
/ star bar-box animation/
const images = [
  '/mnt/data/anilla.png',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', // অন্য ছবি
  'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'  // আরেকটা ছবি
];

let currentIndex = 0;
const bars = document.querySelectorAll('.bar');

function setBackgroundImages(index) {
  bars.forEach((bar, i) => {
    bar.style.backgroundImage = `url(${images[index]})`;
    
    bar.style.backgroundPositionX = `${-(i) * 100}px`;
  });
}

function animateBars() {
  bars.forEach((bar) => {
    bar.style.animation = 'none';    // রিসেট
    bar.offsetHeight;                // reflow trick
    bar.style.animation = '';       // আবার অ্যানিমেশন চালু
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  setBackgroundImages(currentIndex);
  animateBars();
}

setBackgroundImages(currentIndex);
animateBars();

setInterval(nextImage, 3000);

