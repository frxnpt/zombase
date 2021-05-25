function guardarPartida() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById("testrequest").textContent = xhr.responseText;
            }
            if (xhr.status == 404) {
                console.log("file or resource not found");
            }
        }
    }
    var formData = new FormData();

    formData.append("puntuacion", "hola");
    formData.append("fecha", "hola2");
    formData.append("token", "hola3");

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }


    xhr.open("POST", "/partida/guardar");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(formData);
}