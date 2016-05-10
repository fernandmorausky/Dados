var face0=new Image()
face0.src="img/dado1.png"
var face1=new Image()
face1.src="img/dado2.png"
var face2=new Image()
face2.src="img/dado3.png"
var face3=new Image()
face3.src="img/dado4.png"
var face4=new Image()
face4.src="img/dado5.png"
var face5=new Image()
face5.src="img/dado6.png"

function lanzar()
    {
        var randomdice=Math.round(Math.random()*5);
        document.images["mydice"].src=eval("face"+randomdice+".src");
    }

function JuegaTimba () {
	var Status = { CONTINUA:1, GANA:2, PIERDE:3, };
	var suma;
	var miPunto;   
	var estadoJuego;
	  // CONTINUA, GANA o PIERDE      
	  //srand( time( 0 ) ); 
	  // randomiza números mediante time   
	  suma = tiraDados(); 
	  // primer tiro de dados   
	  switch ( suma )    {      
	  	case 7:    
	  	case 11:                     
	  		estadoJuego = Status.GANA;         
	  		break;      
	  	case 2:    
	  	case 3:    
	  	case 12:                      
	  		estadoJuego = Status.PIERDE;         
	  		break;      
	  	default:                     
	  		estadoJuego = Status.CONTINUA;         
	  		miPunto = suma;         
	  		alert("El punto es " + miPunto);
	  		break;                
	  		// opcional      
	  	}     
	  	while ( estadoJuego == Status.CONTINUA )    {       
	  	suma = tiraDados();  
	  	// tira dados nuevamente      
	  	if ( suma == miPunto )       
	  	// gana por puntos         
	  		estadoJuego = Status.GANA;      
  		else  if ( suma == 7 )          
  		// pierde por obtener 7            
  			estadoJuego = Status.PIERDE;   
  		}    
  		if ( estadoJuego == Status.GANA )      
  			alert("El jugador gana");   
  		else      
  			alert("El jugador pierde");

}
function tiraDados (argument) {
	var dado1;   
	var	 dado2;   
	var sumaTrabajo;   
	dado1 = Math.floor((Math.random()*100)%6 +1);  
	// aleatorio del dado1   
	dado2 = Math.floor((Math.random()*100)%6 +1);  
	// aleatorio del dado2   
	sumaTrabajo = dado1 + dado2;     
	//alert("El jugador tiro :" + dado1 + " + " + dado2 + " = " + sumaTrabajo);   
	document.images["index1"].src=eval("face"+dado1+".src");
	document.images["index2"].src=eval("face"+dado2+".src");
	return sumaTrabajo;         
// devuelve suma de los dados 
}
   
	