if (typeof window.CSS.registerProperty === 'function') {
  console.log('CSS.registerProperty supported 🎉')
  document.body.style.setProperty('--supported', 1);
  document.body.classList.add('registerProperty-supported')
} else {
  console.log('CSS.registerProperty not supported ❌')
  document.body.style.setProperty('--not-supported', 1);
  document.body.classList.add('registerProperty-not-supported')
}


const divElement = document.querySelector('.box');

// Создаем кнопку
const buttonElement = document.createElement('button');
buttonElement.classList.add('button');

buttonElement.addEventListener('click', () => {
  const url = 'https://www.instagram.com/';
  window.location.href = url; 
});

divElement.appendChild(buttonElement);




const divElements = document.querySelector('.boxs');

// Создаем кнопку
const buttonElements = document.createElement('button');
buttonElements.classList.add('button');

buttonElement.addEventListener('click', () => {
  const url = 'https://instagram.com/nuriddin_maxmutov?igshid=ZDc4ODBmNjlmNQ==';
  window.location.href = url; 
});

divElements.appendChild(buttonElements);



const divElemen = document.querySelector('.boxes');

// Создаем кнопку
const buttonElemen = document.createElement('button');
buttonElemen.classList.add('button');

buttonElement.addEventListener('click', () => {
  const url = 'https://vm.tiktok.com/ZSLBCsW24/';
  window.location.href = url; 
});

divElemen.appendChild(buttonElemen);
