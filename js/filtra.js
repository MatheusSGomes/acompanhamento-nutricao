const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
  console.log(this.value)
  const pacientes = document.querySelectorAll('.paciente')

  // Verificar se tem algo digitado para fazer a filtragem
  if(this.value.length > 0) {
    for(let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i]
      const tdNome = paciente.querySelector('.info-nome')
      const nome = tdNome.textContent

      // Expressão regular
      const expressao = new RegExp(this.value, 'i')
      
      // Se o que for digitado não bater add a classe
      if(!expressao.test(nome)) {
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      }
    }
  } else {
    // se não houver nada digitado, remove a classe invisivel
    for(let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i]
      paciente.classList.remove('invisivel')
    }
  }

})