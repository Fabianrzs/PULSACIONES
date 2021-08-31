function calcularPulsaciones(){
    var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("sexo").value;
    var pulsaciones = 0;

    if(sexo === "Masculino"){
        pulsaciones = (210 -edad) /10;
    }
        
    else if(sexo === "Femenino") {
        pulsaciones = (220 -edad) /10   ;
    } 
         

    document.getElementById("Pulsaciones").value = parseFloat(pulsaciones);  
    
    console.log("Pulsaciones");

}