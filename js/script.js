const caixaPreta = document.getElementById('barraPretaSuperior')
const displayBranco = document.getElementById('quadroBranco1')

caixaPreta.addEventListener('click', function() {
  if(displayBranco.style.display === 'none' || displayBranco.style.display === '') {
    displayBranco.style.display = 'block'
  } else {
    displayBranco.style.display = 'none'
  }
})

const caixaPretaInferior = document.getElementById('barraPretaInferior')
const displayBrancoInferior = document.getElementById('quadroBranco2')
caixaPretaInferior.addEventListener('click', function() {
  if(displayBrancoInferior.style.display === 'none' || displayBrancoInferior.style.display === '') {
    displayBrancoInferior.style.display = 'block'

  } else {
    displayBrancoInferior.style.display = 'none'

  }
})
