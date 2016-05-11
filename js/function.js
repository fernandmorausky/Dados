var estadoJuego;
var suma;
var miPunto;

var face1=new Image()
face1.src="img/dado1.png"
var face2=new Image()
face2.src="img/dado2.png"
var face3=new Image()
face3.src="img/dado3.png"
var face4=new Image()
face4.src="img/dado4.png"
var face5=new Image()
face5.src="img/dado5.png"
var face6=new Image()
face6.src="img/dado6.png"

function JuegaTimba () {
	var Status = { CONTINUA:1, GANA:2, PIERDE:3, };
	
	   
	document.getElementById("resultado").innerHTML ="";
	
	if (estadoJuego != Status.CONTINUA) {
		suma = tiraDados(); 
		//document.getElementById("suma").innerHTML =suma;

	  //primer tiro de dados   
		 switch ( suma )    {   //   
		  	case 7:    
		  	case 11:                     
		  		estadoJuego = Status.GANA;  
				document.getElementById("resultado").innerHTML ="GANO";

		  		break;      
		  	case 2:    
		  	case 3:    
		  	case 12:                      
		  		estadoJuego = Status.PIERDE; 
		  		document.getElementById("resultado").innerHTML ="PERDIO";        
		  		break;      
		  	default:                     
		  		estadoJuego = Status.CONTINUA;         
		  		miPunto = suma;         
		  		document.getElementById("resultado").innerHTML ="CONTINUA EN JUEGO";
		  		
		  		document.getElementById("punto").innerHTML =miPunto;
		  		break;                
		  		// opcional      
		  	} 
	} 
	else{
		suma = tiraDados();  
	  	// tira dados nuevamente      
	  	if ( suma == miPunto )       
	  	// gana por puntos         
	  		estadoJuego = Status.GANA;      
  		else  if ( suma == 7 )          
  		// pierde por obtener 7            
  			estadoJuego = Status.PIERDE; 

		if ( estadoJuego == Status.GANA )  
		{
			estadoJuego = Status.GANA;
  			document.getElementById("resultado").innerHTML ="GANO";
  		}
  		else      
  		{
  			estadoJuego = Status.PIERDE;
  			document.getElementById("resultado").innerHTML ="PERDIO";
  		}
	};
	    
// $('.enter_link').click(function() { 
//         $(this).parent().fadeOut(500);
//  });
  		

}
function tiraDados (argument) {
	var dado1;   
	var	 dado2;   
	var sumaTrabajo;   
	dado1 = Math.round(Math.random()*5 +1);
	// aleatorio del dado1   
	dado2 =Math.round(Math.random()*5 +1);
	// aleatorio del dado2   
	 sumaTrabajo = dado1 + dado2;
	//alert("El jugador tiro :" + dado1 + " + " + dado2 + " = " + sumaTrabajo);   
	//document.images["index1"].src=eval("face" + dado1 + ".src");
	document.getElementById('cube1').className = 'show'+dado1;

	//document.images["index2"].src=eval("face" + dado2 + ".src");
	document.getElementById('cube2').className = 'show'+dado2;
	document.getElementById("suma").innerHTML =sumaTrabajo;
	//alert(dado1 + ' + ' + dado2  + ' = ' +sumaTrabajo) ;
	
	return sumaTrabajo;         
// devuelve suma de los dados 
}
   


/*******************************************/
var face=1;

var show = function() {
  //$('#cube').attr('class', 'show'+face);
  document.getElementById('cube1').className = 'show'+face;
  if(face==6) {
    face=1;
  } else {
    face++; 
  }
};

//var timer=setInterval("show()", 300);