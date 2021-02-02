// Get pin and set
function getPin() {
    const randome = Math.random() * 10000;
    const pin = (randome + "").split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
function genareteBtn(){
    const inputPin = document.getElementById('input-pin');
    inputPin.value = getPin();
}

// Add Event handaler

const digitContainer = document.getElementById('digit-container');
digitContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            document.getElementById('typed-digit').value = "";
        }
    }else{
        const typedDigit = document.getElementById('typed-digit');
        typedDigit.value  = typedDigit.value + digit;
    }
});

// Compare pin

function matchPin(){
    const pin = document.getElementById('input-pin').value;
    const typedPin = document.getElementById('typed-digit').value;
    if (pin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';

        const inCorrect = document.getElementById('incorrect-pin');
        inCorrect.style.display = 'none';
    } else {
        const inCorrect = document.getElementById('incorrect-pin');
        inCorrect.style.display = 'block';

        const correct = document.getElementById('correct-pin');
        correct.style.display = 'none';
    }
    if( typedPin == ""){
        const inCorrect = document.getElementById('incorrect-pin');
        inCorrect.style.display = 'block';
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'none';
    }
    document.getElementById('input-pin').value = "";
    document.getElementById('typed-digit').value = "";
}