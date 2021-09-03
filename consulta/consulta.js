function loadTablet(){
   
    var pulsaciones  = JSON.parse(localStorage.getItem('datos'));
    var pv = "";

    for (let item in pulsaciones) {
        pv += "<tr>"
            pv += "<td>" + item.Identifiacion + "</td>"
            pv += "<td>" + item.Nombre + "</td>"
            pv += "<td>" + item.Edad + "</td>"
            pv += "<td>" + item.Sexo + "</td>"
            pv += "<td>" + item.pulsaciones + "</td>"
        pv += "</tr>"
    }

    document.getElementById("tbCuerpo").innerHTML = pv;

}