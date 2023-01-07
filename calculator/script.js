const number7 = document.getElementById('number-seven')
const number8 = document.getElementById('number-eight')
const number9 = document.getElementById('number-nine')
const number6 = document.getElementById('number-six')
const number5 = document.getElementById('number-five')          // <--- bloco onde seleciona o botao
const number4 = document.getElementById('number-four')
const number3 = document.getElementById('number-three')
const number2 = document.getElementById('number-two')
const number1 = document.getElementById('number-one')
const number0 = document.getElementById('number-zero')
const numeros = document.querySelectorAll('.number')

const point = document.getElementById('point')

const percented = document.getElementById ('%')
const cleared = document.getElementById('clear')
const cleared2 = document.getElementById('ce')
const plus = document.getElementById('plus')
const equals = document.getElementById('equals')
const divided = document.getElementById('divided')
const multiplied = document.getElementById('multiply')
const subtracted = document.getElementById('subtract')
const deleted = document.getElementById('del')
operators = document.querySelectorAll('.operator')




let firstnumber = []
let resultnow = []

number7.addEventListener('click',showselection)
number8.addEventListener('click',showselection)
number9.addEventListener('click',showselection)
number6.addEventListener('click',showselection)
number5.addEventListener('click',showselection)                  // <-- bloco onde o se o botao é ativado faz a funcao mostrar
number4.addEventListener('click',showselection)
number3.addEventListener('click',showselection)
number2.addEventListener('click',showselection)
number1.addEventListener('click',showselection)
number0.addEventListener('click',showselection)


percented.addEventListener('click',showselection)
point.addEventListener('click',showselection)
plus.addEventListener('click',showselection,)
divided.addEventListener('click',showselection)
multiplied.addEventListener('click',showselection)
subtracted.addEventListener('click',showselection)
cleared.addEventListener('click',clear)
cleared2.addEventListener('click',clear)



var typed = []

var separatedNumbers = []

function showselection() {
    value = this.value         
    document.getElementById('displaytop').innerText += value   // < funcao mostrar
    firstnumber.push(value)
    typed.push(value)
    
    
    
    
    console.log(value)
    
    if (value =='+'){
        equals.onclick = sum  // se colocar o parantesis depois da funcao ele ativa na hora da deteccao da condicao e nao do clique.
                            // provavelmente a solucao para alguns dos bugs.   
                           
    } else if (value == '-') {
        equals.onclick = sub
    } else if (value == '*') {
        equals.onclick = multiply
        
    } else if (value == '/') {
        equals.onclick = divide
        
    } else if (value == '%') {
        equals.onclick = percent
        
    } 
    
    }
 
function separate(operator) {
    let numerosString = firstnumber.toString()
    let numerosStringConcatenados = numerosString.replace(/,/g ,'')
    separatedNumbers=(numerosStringConcatenados.split(operator))       //separador com +

}

function sum() {       
 
        
        separate('+')
      
     if (resultnow.length > 0) {
       var a = resultnow[0]
       
       let i = 0
            while (i < (separatedNumbers.length) ) {     // soma os elementos da array
            
            a += Number(separatedNumbers[i]);
            i++;
        }
     } else {
      
       var a = Number(0)
              
       let i = 0
            while (i < (separatedNumbers.length) ) {     // soma os elementos da array
            
            a += Number(separatedNumbers[i]);
            i++;
            }
        
        }
        
    
         print(a)
                
         firstnumber = []
         typed = []
        
        
                           
         
    }

function divide() {  
       
   if (resultnow.length>0) {
    
    separate('/')
    
        let i = 1
        var a = (resultnow[0])
        console.log(separatedNumbers)
        
        while (i < (separatedNumbers.length) ) {     // divide o primeiro elemento com os seguintes da array
        
        a /= Number(separatedNumbers[i]) ;
        i++;
        
   
    }
  }else {

    separate('/')
    
    let i = 1
    var a = (separatedNumbers[0])
    console.log(separatedNumbers)
    
    while (i < (separatedNumbers.length) ) {     // divide o primeiro elemento com os seguintes da array
    
    a /= Number(separatedNumbers[i]) ;
    i++;
    
    }
  }
    print(a)
    firstnumber = []

    
    
    
    
    
        
    }
function multiply() {       
    
    if(resultnow.length>0) {

        separate('*')

        var a = resultnow[0] 
    
        let i = 1
                while (i < (separatedNumbers.length) ) {     // multiplica de o primeiro elemento com os seguintes da array
                
                a *= Number(separatedNumbers[i]);
                i++;
                
            
            }



    }
     else {
    separate('*')
    
    
    var a = Number(1) 
    
    let i = 0
            while (i < (separatedNumbers.length) ) {     // multiplica de o primeiro elemento com os seguintes da array
            
            a *= Number(separatedNumbers[i]);
            i++;
            
        
        }
    }
        print(a)
        firstnumber = []
        typed = []
}
function sub() {       
    
            
    separate('-')
    if (resultnow.length > 0)  {
    
     a = parseInt(resultnow[0])
    
        let i = 1
         while (i < (separatedNumbers.length) ) {     // diminui o primeiro elemento com os outros
         a -= Number(separatedNumbers[i]);
         i++;     
                  
       
         
         }
     } else {

        a = separatedNumbers[0]
    
        let i = 1
         while (i < (separatedNumbers.length) ) {     // diminui o primeiro elemento com os outros
         a -= Number(separatedNumbers[i]);
         i++;     
                  
       
         
         }


     }
     print(a)
     firstnumber = []
        
    
 
 }
 function clear() {       
      
        
       document.getElementById('displaybot').innerHTML= ''
       document.getElementById('displaytop').innerHTML= ''
       firstnumber = []
       resultnow = []
     

      
 }
 function percent() {       
    
    
    separate('%')   
   
   
    let a = Number(separatedNumbers[0])
    
        let i = 1
         while (i < (separatedNumbers.length) ) {     // diminui o primeiro elemento com os outros
         a = a*0.01*Number(separatedNumbers[i]);
         i++;
         
     
     }
     document.getElementById('displaybot').innerHTML = a
     

      
 }
function print(a){
 
    document.getElementById('displaybot').innerHTML = a
    resultnow.unshift(a)
    console.log(resultnow)
    document.getElementById('displaytop').innerHTML = ''
   
   
}

