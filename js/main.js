let modo=document.getElementById("modo");
let body=document.body;
 modo.addEventListener("click",function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("modo",val)
 })
 let valor=localStorage.getItem("modo")
 if (val="false"){
    body.classList.add("dark")   
 } else{
    body.classList.remove("dark")
 }
 /*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
   document.getElementById('page').classList.remove('dark-mode')
   document.getElementById('id-moon').classList.remove('active')
   this.classList.add('active')
 }
 /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
 con id page y se aplicará el estilo active a la luna*/
 document.getElementById('id-moon').onclick = function(){
   document.getElementById('page').classList.add('dark-mode')
   document.getElementById('id-sun').classList.remove('active')
   this.classList.add('active')
 }
 
