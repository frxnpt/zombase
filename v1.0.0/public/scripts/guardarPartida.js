function guardarPartida() {

    if (!jwt) {
        alert("⚠️ DEBES ESTAR LOGUEADO PARA PODER GUARDAR LA PARTIDA!!! ⚠️");
        return;
    }
    var xhr = new XMLHttpRequest();
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