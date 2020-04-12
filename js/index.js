/*const display = document.querySelector('.display');

function digitPressed(ev) {
    // if (display.value!==''){
        // alert(display.value.slice(-1));
        display.value += ev.target.innerText;
    // }
}

function opersPressed(ev) {
    // if (display.value!==''){
        // alert(display.value.slice(-1));
        display.value += ev.target.innerText;
    // }
}

function calculate(){
    display.value = eval(display.value);

}

function clearDisplay(){
    display.value = '';
}

document.querySelectorAll('.digits button').forEach(button => button.addEventListener('click', digitPressed));
document.querySelectorAll('.opers button').forEach(button => button.addEventListener('click', opersPressed));

document.querySelector('.key-equal').addEventListener('click', calculate);
document.querySelector('.clear-display').addEventListener('click',clearDisplay);


*/

// function digitPressed(ev) {
//     display.value = ev.target.innerText;
// }

// function calculate(){
//     display.value = eval(display.value);
// }

const display = document.querySelector('.calculator-display');

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

// the same -> // keys.addEventListener('click', (event) => {
keys.addEventListener('click', function (event) {
     if (keys.contains(event.target) && (event.target.closest('button'))){
        const key = event.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.value;
        
        if (!action) {
            //alert('This is the number key (0–9)');
            if (displayedNum === ''){
                display.value = keyContent;
            } else {
                //displayedNum += keyContent;
                display.value += keyContent;
            }
        }

        if (action === 'add') /*||
            action === 'subtract' ||
            action === 'multiple' ||
            action === 'divide')*/{
                display.value += '+';
                // alert('This is the operator key (+, -, *, /)')
            }
        
        if (action === 'subtract'){
                display.value += '-';
                // alert('This is the operator key (+, -, *, /)')
            }
        
        if (action === 'multiple'){
                display.value += '*';
                // alert('This is the operator key (+, -, *, /)')
            }

        if (action === 'divide'){
                display.value += '/';
                // alert('This is the operator key (+, -, *, /)')
            }
            
        if (action === 'decimal') {
            // alert('decimal-key!');
            display.value += '.';
        }
        
        if (action === 'calculate') {
            // alert('equal-key!');
            display.value = eval(display.value);
        }

        if (action === 'clear') {
            // alert('clear-key!');
            display.value = '';
        }
        

     }
});



