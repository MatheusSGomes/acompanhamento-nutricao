const pacientes = document.querySelectorAll('.paciente')

for(let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i]

  const tdPeso = paciente.querySelector('.info-peso')
  const peso = tdPeso.textContent
  
  const tdAltura = paciente.querySelector('.info-altura')
  const altura = tdAltura.textContent
  
  const tdImc = paciente.querySelector('.info-imc')
  
  
  // VALIDAÇÃO
  let pesoEhValido = validaPeso(peso);
  let alturaEhValida = validaAltura(altura);
  
  if(!pesoEhValido) {
    console.warn('Peso inválido!');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }
  
  if(!alturaEhValida) {
    console.warn('Altura inválida!')
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }
  
  if(pesoEhValido && alturaEhValida){
    const imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  //  IMC - Massa / (altura * altura)
  // Peso / (Altura em metros * altura em metros)
  let imc = 0;
  imc = peso / (altura * altura)
  return imc.toFixed(2)

}