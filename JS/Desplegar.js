function Desplegar_Electronica()
 {
    document.getElementById("Tema-sub-Electronica").style.display = "flex";
	document.getElementById("Tema-sub-Fisica").style.display = "none";
	document.getElementById("Tema-sub-Instrum").style.display = "none";
 }
 
 function Desplegar_Fisica()
 {
    document.getElementById("Tema-sub-Fisica").style.display = "flex";
    document.getElementById("Tema-sub-Electronica").style.display = "none";
	document.getElementById("Tema-sub-Instrum").style.display = "none";

 }
 
 function Desplegar_Instrum()
 {
    document.getElementById("Tema-sub-Instrum").style.display = "flex";
    document.getElementById("Tema-sub-Electronica").style.display = "none";
	document.getElementById("Tema-sub-Fisica").style.display = "none";

 }