const h1 = document.querySelector('h1')
h1.textContent = 'Acompanhamento Nutricionista'

const title = document.querySelector('title')
title.textContent = 'Acompanhamento Nutricionista'

//  IMC - Massa / (altura * altura)
// Peso / (Altura em metros * altura em metros)

const paciente = document.querySelector('#primeiro-paciente')
const tdPeso = paciente.querySelector('.info-peso')
const peso = tdPeso.textContent

const tdAltura = paciente.querySelector('.info-altura')
const altura = tdAltura.textContent

const tdImc = paciente.querySelector('.info-imc')

// VALIDAÇÃO
let pesoEhValido = true;
let alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
  console.warn('Peso inválido!');
  pesoEhValido = false;
  tdImc.textContent = 'Peso inválido!'
}

if(altura <= 0 || altura >= 3.00) {
  console.warn('Altura inválida!')
  alturaEhValida = false;
  tdImc.textContent = 'Altura inválida!'
}

if(pesoEhValido && alturaEhValida){
  const imc = peso / (altura * altura)
  tdImc.textContent = imc
}



