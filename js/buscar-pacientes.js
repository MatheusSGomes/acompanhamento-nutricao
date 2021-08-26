const botaoBuscarPaciente = document.querySelector('#buscar-pacientes')

botaoBuscarPaciente.addEventListener('click', function() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')
  xhr.addEventListener('load', function() {
    const resposta = xhr.responseText
    const pacientes = JSON.parse(resposta)

    pacientes.forEach(function(paciente) {
      adicionaPacienteNaTabela(paciente)

    })
  })
  xhr.send()
})