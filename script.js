function calculateBudget() {
    let basePrice = 1000; 
    let selectedType = document.getElementById('web').value;
    let selectedMonths = parseInt(document.getElementById('months').value);
    let separators = document.getElementsByName('deseja');
    let selectedSeparators = Array.from(separators).filter(sep => sep.checked).length;

    
    let totalPrice = basePrice; 
    totalPrice += selectedMonths * 50; 
    totalPrice += selectedSeparators * 400; 

    
    let discount = Math.min(selectedMonths * 0.05, 0.2);
    totalPrice -= totalPrice * discount;

   
    document.getElementById('finalBudget').textContent = totalPrice.toFixed(2) + ' €';
}


function validateAndSubmit() {
    

   
    let firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        alert('Por favor, preencha o campo de nome.');
        return;
    }

    

    
    alert('Formulário enviado com sucesso!');
}


document.addEventListener('DOMContentLoaded', function () {
    
    setTimeout(function () {
        alert('Bem-vindo ao nosso site!');
    }, 5000);

   
    document.getElementById('calculateBtn').addEventListener('click', calculateBudget);
    document.getElementById('submitBtn').addEventListener('click', validateAndSubmit);
});

