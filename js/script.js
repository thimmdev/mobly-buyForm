function isChecked () {
    let reactBox = document.getElementById('reactCheckbox').checked;
    let vueBox = document.getElementById('vueCheckbox').checked;
    let angularBox = document.getElementById('angularCheckbox').checked;
    let checkedBox = document.getElementById('sendForm')

    if ( reactBox == true || vueBox == true || angularBox == true ){
        checkedBox.disabled = false;
    } else {
        checkedBox.disabled = true;
    }
}

function valueValid() {
   let counterValue = document.getElementById('counter-value').value;
    if (counterValue < 0 ) {
        alert ('por favor selecione um número válido de stickers.')
        document.getElementById('counter-value').value = 1
    }
}

function minusValue() {
    let counterValue = document.getElementById('counter-value').value;
    convertedValue = parseInt(counterValue);
    if (convertedValue > 0 ) {
        document.getElementById('counter-value').classList.remove('error');
        convertedValue = (convertedValue - 1);
        document.getElementById('counter-value').value = convertedValue
    } if ( convertedValue == 0 ) {
        document.getElementById('minusButton').disabled=true
    }
}

function addValue() {
    let counterValue = document.getElementById('counter-value').value;
    convertedValue = parseInt(counterValue);
    if (convertedValue >= 0) {
        document.getElementById('counter-value').classList.remove('error')
        convertedValue = (convertedValue + 1);
        document.getElementById('counter-value').value = convertedValue
        document.getElementById('minusButton').disabled=false
    } else {
        document.getElementById('counter-value').classList.add('error')
        alert ('por favor selecione um número válido de stickers.')
        document.getElementById('counter-value').value = 1
    }
}

function formSended() {
    let counterValue = document.getElementById('counter-value').value;
    let successMsg = document.getElementById ('successMessage');
    if ( counterValue > 0 ) {
        successMsg.classList.remove('hidden')
     } else {
        successMsg.classList.add('hidden')
        document.getElementById('counter-value').classList.add('error')
        alert ('por favor selecione um número válido de stickers.')

     }
}