function loadConsult() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("response").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "consulta/consulta.html");
    xhttp.send();
}

function loadRegistro() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("response").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "registro/registro.html");
    xhttp.send();
}



// alert(this.responseText); mensaje de alerta 
