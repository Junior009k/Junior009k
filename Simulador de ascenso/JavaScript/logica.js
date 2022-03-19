let valorActual=1;
let valorSolicitado=1;
let i=1;
var elem = document.getElementById('Ascensor');
var control = document.getElementById('Control');
elem.innerHTML= '<DIV id="piso1" class="piso">1 </Div>'
			+ '<DIV id="piso2" class="piso">2 </Div>'
			+ '<DIV id="piso3" class="piso">3 </Div>'
			+ '<DIV id="piso4" class="piso">4 </Div>';

changeColor("1","cerrado")
changeColor("2","cerrado")
changeColor("3","cerrado")
changeColor("4","cerrado")
function solicitarAscensor(valorSolicitado,newColor,gray)
{
		i=valorActual;
		alert("Piso solicitado:" + valorSolicitado + "\n Piso Actual:" + valorActual); 
		if(valorActual<valorSolicitado)
			Ascender(valorSolicitado,newColor,gray);
		if(valorActual>valorSolicitado)
			Descender(valorSolicitado,newColor,gray);
}

function Ascender(valorSolicitado,newColor,gray)
{
	while(i<(valorSolicitado+1))
	{	
		
		if(i!=valorSolicitado){changeColor(i,gray);alert("Estamos en  el piso " + i + " Ascendemos hacia el piso " + valorSolicitado );}
		if(i==valorSolicitado){changeColor(i,newColor);valorActual=i;alert("Ha llegado a su destino motherfucker");}
		i++;
	}	 
}
function Descender(valorSolicitado,newColor,gray)
{
	while(i>(valorSolicitado-1))
	{
		
		if(i!=valorSolicitado){changeColor(i,gray);alert("Estamos en  el piso " + i + " Descendemos hacia el piso " + valorSolicitado );}
		if(i==valorSolicitado){changeColor(i,newColor);valorActual=i;alert("Ha llegado a su destino motherfucker");}
		i--;
	}
}

function changeColor(name,newColor) {
   let elem2 = document.getElementById("piso" + name);
   elem2.innerHTML=  "PISO " + name + '<img src="' +newColor+'.jpg">'  ;
   if(newColor=="abierto"){elem2.style.color="#0f0";}
   else{elem2.style.color="#000";}
	
}