const zona=document.querySelector(".zona");

zona.addEventListener("dragover", (e)=>
{
	e.preventDefault();
})

zona.addEventListener("drop",(e)=>
{
	let n= e.dataTransfer.getData("textura");
	let img='url("pico'+n+'.JFIF")';
	zona.style.background='url("pico'+n+'.JFIF")';
});




for(let i=1;i<(document.querySelector(".Texturas").children.length+1);i++)
{
	document.querySelector(".textura" + i).addEventListener("dragstart",(e)=>{transferirTextura(i,e);})
}

const transferirTextura=(n,e)=>
{
	e.dataTransfer.setData("textura",n)
}

