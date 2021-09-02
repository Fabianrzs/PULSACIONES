function loadTablet(){
   
    var pulsaciones = [] = localStorage.getItem('datos');
    var pv = "";

    pulsaciones.forEach(element => {

        pv += "<tr>"
            pv += "<td>" + item.identifiacion + "</td>"
            pv += "<td>" + item.nombre + "</td>"
            pv += "<td>" + item.edad + "</td>"
            pv += "<td>" + item.sexo + "</td>"
            pv += "<td>" + item.pulsaciones + "</td>"
        pv += "</tr>"
    });

    document.getElementById("tbCuerpo").innerHTML = pv;

}