// Variaveis globais
const buttonSubmit = document.getElementById('btn-submit');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const buttonSubmitForm = document.getElementById('submit-btn');
const agreeCheckbox = document.getElementById('agreement');
const getArea = document.getElementById('text-area');
const getNumber = document.getElementById('counter');
//

// Funções
const checkButton = () => {
  buttonSubmit.addEventListener('click', () => {
    if (
      emailInput.value === 'tryber@teste.com' && passInput.value === '123456'
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

const validadeButton = () => {
  buttonSubmitForm.disabled = true;
  agreeCheckbox.addEventListener('click', () => {
    if (agreeCheckbox.checked === true) {
      buttonSubmitForm.disabled = false;
    }
    if (agreeCheckbox.checked === false) {
      buttonSubmitForm.disabled = true;
    }
  });
};
//
const areaCounter = () => {
let divHtml = getNumber.innerHTML;
let max = getNumber.value;
let areaCaracter = getArea.value.length;
getArea.addEventListener('keyup', () => {
divHtml = '501';
}

)
}

// Executa funções
window.onload = () => {
  checkButton();
  validadeButton();
  areaCounter();
};
//
