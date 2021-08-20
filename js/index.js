//  IMC - Massa / (altura * altura)
// Peso / (Altura em metros * altura em metros)

const pacientes = document.querySelectorAll('.paciente')

// console.log(pacientes)

for(let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i]

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
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }
  
  if(altura <= 0 || altura >= 3.00) {
    console.warn('Altura inválida!')
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }
  
  if(pesoEhValido && alturaEhValida){
    const imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2)
  }
  
}




