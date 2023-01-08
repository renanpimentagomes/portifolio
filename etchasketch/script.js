
let columns = document.getElementById('columns')
let rows = document.getElementById('rows')
var colors = 'blue'
let pixel = document.getElementsByClassName('item')
/* ******* Fuction that create the grid according to input ******* */
function createGrid(){
    let container = document.getElementById('container')
    if (rows.value > 45){
        window.alert('Max:45 rows')
        rows.value = 45
    } else if(columns.value>45){
        window.alert('Max:45 Columns')
        columns.value = 45
    } else {
    
    for (i=1; i<(rows.value*columns.value)+1; i++) {
        container.innerHTML += '<div class="item"> </div>'
    }
    container.style.gridTemplateColumns = `repeat(${columns.value},1fr)`
    container.style.gridTemplateRows = `repeat(${rows.value},1fr)`


/* ********* Function to loop and the pixels and listen to events ******** */
    
    for (let i=0;i<pixel.length; i++) { 
        
        
        
        /****** ESTUDAR! Part to mousedown & mouseover at the same time************** */
        pixel[i].addEventListener('mousemove',function(e){
            if (e.buttons == 1) {
                e.preventDefault();


                /**** put the color selection in the loop, to everytime it moves over a new div, to gererate another color** */
                if(colors=='rb'){
                    let rainbow = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
                    this.style.backgroundColor = rainbow;
                }
                /* function to chgange the color */
                this.style.backgroundColor = colors
                
                        
                    }
                });





                

                
              
        
            }
            
        }}



    
     /* ********* Function to select the colors of the pixels ******** */


function selection(val) {
   
    colors = val
    
}
/* *******Clear function********** */
function clr() {
    console.log(pixel.length)
    for (i=0;i<pixel.length;i++)
    pixel[i].style.backgroundColor ='white'

}
