const btnModal = document.getElementById('abrir')
const btnConfirma = document.getElementById('confirma')
const btnCancela = document.getElementById('cancela')

btnModal.addEventListener('click', open)

btnConfirma.addEventListener('click', open)

btnCancela.addEventListener('click', () => {
    const modal = document.getElementById('sec-modal')
    modal.classList.add('hide')
})




function open(){
    const modal = document.getElementById('sec-modal')
    

    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide')
    }
    else {
        modal.classList.add('hide')
        alert('Confirmado com sucesso!')
    }
    
}