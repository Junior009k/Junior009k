//la variable a almacena el valor del dinero que tiene
a=prompt("Cuanto dinero tienes")
//si es menor no compraras ningun helado
//una vez creado los id  haremos que segun el helado comprado cambie de color a rojo
if(a<10)
{
	alert("No tenes dinero")
}
//si la cantidad de tu dinero esta entre los 10 y 15 pesos te compraras el helado de 10
if(a>=10 && a<15)
{
	alert("te puedes comprar un helado de fresa " +
		  "\n tu devuelta es RD$" + (a-10))
	document.getElementById("hf").style.color="#f00";	  
}
//si la cantidad de tu dinero esta entre los 15 y 25 pesos te compraras el helado de 15
if(a>=15 && a<25)
{
	alert("te puedes comprar un helado de cholocate " +
			"\n tu devuelta es RD$" + (a-15))
	document.getElementById("hc").style.color="#f00";		
}
//si la cantidad de tu dinero esta entre los 25 y 49 pesos te compraras el helado de 25
if(a>=25 && a<49)
{
	alert("te puedes comprar un helado de crema de chocolate " +
			"\n tu devuelta es RD$" + (a-25))
	document.getElementById("cc").style.color="#f00";		
}
//si la cantidad de tu dinero esta entre los 50 y 104 pesos te compraras el helado de 50
if(a>=50 && a<104)
{
	alert("te puedes comprar un helado de Vaso pequeno " +
			"\n tu devuelta es RD$" + (a-50))
	document.getElementById("vp").style.color="#f00";			
}
//si es igual a los 105 pesos entonces compraras el helado mas caro
if(a>=105 )
{
	alert("te puedes comprar un helado de vaso grande " +
			"\n tu devuelta es RD$" + (a-105))
	document.getElementById("vg").style.color="#f00";		
}