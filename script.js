// Variaveis globais
const buttonSubmit = document.getElementById('btn-submit');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
//

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

window.onload = () => {
  checkButton();
};
