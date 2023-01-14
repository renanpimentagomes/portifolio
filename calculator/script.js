const number7 = document.getElementById('number-7')
const number8 = document.getElementById('number-8')
const number9 = document.getElementById('number-9')
const number6 = document.getElementById('number-6')
const number5 = document.getElementById('number-5')          // <--- number selection constants
const number4 = document.getElementById('number-4')
const number3 = document.getElementById('number-3')
const number2 = document.getElementById('number-2')
const number1 = document.getElementById('number-1')
const number0 = document.getElementById('number-0')

const point = document.getElementById('point')

const percented = document.getElementById ('%')
const cleared = document.getElementById('clear')
const cleared2 = document.getElementById('ce')
const plus = document.getElementById('plus')                     // <---   operator selection constants
const equals = document.getElementById('equals')
const divided = document.getElementById('divided')
const multiplied = document.getElementById('multiply')
const subtracted = document.getElementById('subtract')
const hundred = document.getElementById('hundred')
const displaytop = document.getElementById('displaytop')    
const displaybot = document.getElementById('displaybot')

let inputnumber = []
let operator = []
let firstnumber = 0
let secondnumber = 0
let result= []
let secondnumber1 = 0
point.addEventListener('click',logInput)
document.addEventListener('keydown', (event) => { 
    if (event.key != '' && !isNaN(event.key))
            { document.getElementById(`number-${event.key}`).click()

            } 
    else if (event.key == '+'){
        plus.click()
    
    }else if (event.key == '-'){
        subtracted.click()
    }else if (event.key == '/'){
        divided.click()
    }else if (event.key == '*'){
        multiplied.click()
    }else if (event.key == '%'){
        percented.click()
    }else if (event.key == 'Enter'){
        equals.click()
    }else if (event.key == 'Backspace'){
        cleared.click()}
    
    
 })


percented.addEventListener('click',logInput)
numbers = document.getElementsByClassName('number')
numbersarray = Array.from(numbers)
console.log('array de numeros é '+numbersarray)


numbersarray.forEach(element => { 
    
    element.addEventListener('click',logInput)
    
});   
    

subtracted.addEventListener('click',logInput)
plus.addEventListener('click',logInput)
multiplied.addEventListener('click',logInput)
divided.addEventListener('click',logInput)
equals.addEventListener('click',logInput)
cleared.addEventListener('click',clear)
cleared2.addEventListener('click',clear)
hundred.addEventListener('click', logInput)

var operators = {
    '+': function(a,b) {return parseFloat(a)+parseFloat(b)},
    '-': function(a,b) {return a-b},
    '*': function(a,b) {return a*b},
    '/': function(a,b) {return a/b },
    '%': function(a,b) {return a/100*b},


}

function clear(){ 
    displaytop.innerHTML =''
    displaybot.innerHTML =''
    firstnumber =[]
    secondnumber = []
    operator = []
    secondnumber1 =[]
    
}

function logInput(e) {
    if (operator.length == 0) {                                     // ****************************** NUMERO DE OPERADORES IGUAL A ZERO ***********************//
            if (this.value =='+' || this.value == '-' || this.value =='*' || this.value =='/' || this.value =='%') {
                operator.push(this.value)                                            // ADICIONA OPERADOR NA LISTA,
                
                displaybot.innerHTML = displaytop.innerHTML                          // PASSA O PRIMEIRO NUMERO PARA DISPLAY DE BAIXO 
                displaytop.innerHTML = this.value                                   // ADICIONA OS VALORES SEGUINTES PARA DISPLAY DE CIMA   
                secondnumber = displaytop.innerHTML.slice(1,5)
                
                
            }else {

                if (this.value != '=') {
                   
                document.getElementById('displaytop').innerHTML += this.value           // ADICIONA O NUMERO NO DISPLAY DE CIMA
                firstnumber = document.getElementById('displaytop').innerHTML           // O PRIMEIRO NUMERO, VAI SER O O QUE TIVER NO DISPLAY DE CIMA NO MOMENTO, ANTES DE CLICAR EM OPERADOR
                   }
            
                }
 }else {                                                            //****************************** NUMERO DE OPERADORES MAIOR QUE ZERO ********************//

        if (this.value == '+' || this.value == '-' || this.value == '*' || this.value == '/' || this.value =='%') {
            operator.push(this.value)                                                               // ADICIONA O SEGUNDO OPERADOR NA LISTA 
            console.log(operator)
            
            displaybot.innerHTML = displaytop.innerHTML                                              // PASSA O SEGUNDO NUMERO + OPERADOR PRO DISPLAY DE BAIXO
            displaytop.innerHTML = this.value 
          
            secondnumber1 = secondnumber.slice(1)    
            var op = operator[0]
            result = operators[op](firstnumber,secondnumber1)
            operator.shift()  
            
            displaybot.innerHTML = +result.toFixed(2)                                 // RESULTADO VAI PRO DISPLAY DE BAIXO
            firstnumber = +result.toFixed(2) 
                                                              // RESULTADO VIRA O PRIMEIRO NUMERO
            
                       

            

        }else  if (this.value == '='){
                      
           
            secondnumber1 = secondnumber.slice(1)
            var op = operator[0]            
            result = operators[op](firstnumber,secondnumber1)                                 
            displaybot.innerHTML = +result.toFixed(2) 
            firstnumber = +result.toFixed(2)                                     // RESULTADO VAI PRO DISPLAY DE BAIXO
            secondnumber1 =[]
            operator = []
            console.log(secondnumber1)
            console
            displaytop.innerHTML = ''
            secondnumber  = []
                                   
        }
         
        else {
            document.getElementById('displaytop').innerHTML += this.value
            secondnumber = document.getElementById('displaytop').innerHTML
            
            }


    }
}


