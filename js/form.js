const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function(event) {
  event.preventDefault()
  const form = document.querySelector('#form-adiciona')

  const paciente = obterPacienteFormulario(form)

  // Criar TR e TDs do paciente
  const pacienteTr = montarTr(paciente)

  const erros = validaPaciente(paciente)
  console.log(erros)
  // Validar no clique do botão
  if(erros.length > 0) {
    exibirMensagensErros(erros);

    return; // Sai da função sem adicionar na tabela. 
  }

  const tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)

  // Limpar formulário após paciente adicionado
  form.reset()
  const mensagensErro = document.querySelector('#mensagens-erros')
  mensagensErro.innerHTML = ''
})

function exibirMensagensErros(erros) {
  const ul = document.querySelector('#mensagens-erros')

  ul.innerHTML = ''

  erros.forEach(function(erro) {
    const li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

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

// Validação Direto no Formulário
function validaPaciente(paciente) {
  
  let erros = []

  // Valida se foi colocado nome no paciente
  if(paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco')
  }

  if(paciente.gordura.length == 0) {
    erros.push('A gordura não pode ser em branco')
  }

  if(paciente.peso.length == 0) {
    erros.push('O peso não pode ser em branco')
  }

  if(paciente.altura.length == 0) {
    erros.push('A altura não pode ser em branco')
  }

  // Se o peso não for válido, é adicionado o erro no array.
  if(!validaPeso(paciente.peso)) {
    erros.push('O peso é inválido')
  }
  
  // Se o altura não for válida, é adicionado o erro no array.
  if(!validaAltura(paciente.altura)) {
    erros.push('Altura Inválida')
  }

  

  return erros // retorna array com ou sem erros
}
