const  circulo=document.querySelector(".Circulo");
const cuadrado=document.querySelector(".Cuadrado");
document.querySelector(".Cuadrado").innerHTML="HOLA";

circulo.addEventListener('dragstart',(e)=>{
	e.dataTransfer.setData("Clase",e.target.className);
	console.log(e.dataTransfer.getData("Clase"))

})

cuadrado.addEventListener("dragenter",()=>console.log(1))
cuadrado.addEventListener("dragover",(e)=>
{
	e.preventDefault();
	console.log(2);
})
cuadrado.addEventListener("drop",(e)=>{
	console.log(e.dataTransfer.getData("Clase"))
})
cuadrado.addEventListener("dragleave",()=>console.log(4))
