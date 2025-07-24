const caixaPreta = document.getElementById('barraPretaSuperior')
const displayBranco = document.getElementById('quadroBranco1')

caixaPreta.addEventListener('click', function() {
  if(displayBranco.style.display === 'none' || displayBranco.style.display === '') {
    displayBranco.style.display = 'block'
  } else {
    displayBranco.style.display = 'none'
  }
})
