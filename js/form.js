const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault()
  const form = document.querySelector('#form-adiciona')

  const paciente = obterPacienteFormulario(form)

  // Criar TR e TDs do paciente
  const pacienteTr = montarTr(paciente)

  const tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)

  // Limpar formulário após paciente adicionado
  form.reset()
})

// função recebe o formulário e retorna os dados dos pacientes.
function obterPacienteFormulario(form) {
  const paciente = {
    // Extraindo informações do paciente do formulário
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

//
function montarTr(paciente) {
  // Criar TR da tabela
  const pacienteTr = document.createElement('tr')

  // Adicionar classe a tabela
  pacienteTr.classList.add('paciente')

  // Criar TDs da Tabela
  const nomeTd = montaTd(paciente.nome, 'info-nome')
  const pesoTd = montaTd(paciente.peso, 'info-peso')
  const alturaTd = montaTd(paciente.altura, 'info-altura')
  const gorduraTd = montaTd(paciente.gordura, 'info-gordura')
  const imcTd = montaTd(paciente.imc, 'info-imc')

  // Adiciona paciente na tabela
  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  return pacienteTr
}

function montaTd(dado, classe) {
  const td = document.createElement('td');
  td.textContent = dado
  td.classList.add(classe)

  return td
}