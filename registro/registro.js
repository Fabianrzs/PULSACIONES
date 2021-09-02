function calcularPulsaciones(edad, sexo){
    var pulsaciones = 0;

    if(sexo === "Masculino"){
        pulsaciones = (210 -edad) /10;
    }
        
    else if(sexo === "Femenino") {
        pulsaciones = (220 -edad) /10   ;
    } 
         
    return pulsaciones;
    

}

function guardar(){

    var identifiacion = document.getElementById("Identificacion").value
    var nombre = document.getElementById("Nombre").value;
    var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("Sexo").value;
    var pulsaciones = calcularPulsaciones(edad, sexo);
    document.getElementById("Pulsaciones").value = parseFloat(pulsaciones);  

    var pulsacionNew = {
        "Identificacion":identifiacion,
        "Nombre":nombre,
        "Edad":edad,
        "Sexo":sexo,
        "Pulsaciones":pulsaciones
    };

    var pulsaciones = [] = localStorage.getItem('datos');

    if(JSON.parse(localStorage.getItem('datos')) != null) {
        pulsaciones = JSON.parse(localStorage.getItem('datos'));
    }

    pulsaciones.push(operacion);

    localStorage.setItem('datos',JSON.stringify(pulsaciones));

}