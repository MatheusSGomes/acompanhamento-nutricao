const pacientesTr = document.querySelectorAll('.paciente')

// console.log(pacientesTr)

pacientesTr.forEach(function(paciente) {
  paciente.addEventListener('dblclick', function (event) { 
    this.remove()
  })
})