function guardarPartida() {

    if (!jwt) {
        alert("⚠️ DEBES ESTAR LOGUEADO PARA PODER GUARDAR LA PARTIDA!!! ⚠️");
        return;
    }
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
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    let params = 'puntuacion=' + score + '&fecha=' + dateTime + '&token=' + jwt + '&ronda=' + ronda;

    xhr.open("POST", "/partida/guardar");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    resetear();
}