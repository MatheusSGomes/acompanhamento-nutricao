const botaoBuscarPaciente = document.querySelector('#buscar-pacientes')

botaoBuscarPaciente.addEventListener('click', function() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')
  xhr.addEventListener('load', function() {
    const erroAjax = document.querySelector('#erro-ajax')

    if(xhr.status == 200) {
      const resposta = xhr.responseText
      const pacientes = JSON.parse(resposta)
      
      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente)
        
      })

      erroAjax.classList.add('invisivel')

    } else {
      console.log(xhr.status) // 404
      console.log(xhr.statusText) // Not Found
      console.log(xhr.responseText) // Cannot GET /paciente
      erroAjax.classList.remove('invisivel')
    }

  })
  xhr.send()
})