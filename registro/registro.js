function calcularPulsaciones(){
    var pulsaciones;
    var identifiacion = document.getElementById("Identificacion").value
    var nombre = document.getElementById("Nombre").value;
    var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("Sexo").value;


    if(sexo === "Masculino"){
        pulsaciones = (210 - parseInt(edad)) /10;
    }
        
    else if(sexo === "Femenino") {
        pulsaciones = (220 - parseInt(edad)) /10   ;
    }    
    
    document.getElementById("Pulsaciones").value = parseFloat(pulsaciones);

    guardar(identifiacion,nombre,edad,sexo,pulsaciones);
    
}

function guardar(Identificacion, Nombre, Edad, Sexo, pulsacion) {

    var pulsacionNew = {
        "Identificacion":Identificacion,
        "Nombre":Nombre,
        "Edad":Edad,
        "Sexo":Sexo,
        "Pulsaciones":pulsacion
    };

    if(JSON.parse(localStorage.getItem('datos')) != null) {
        
        var pulsaciones = JSON.parse(localStorage.getItem('datos'));
        
        pulsaciones.push(pulsacionNew);

        localStorage.setItem('datos',JSON.stringify(pulsaciones));

    }else{
        console.log("Error");
    }


}