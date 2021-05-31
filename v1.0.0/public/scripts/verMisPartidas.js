function misPartidas() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("funca")
            }
            if (xhr.status == 404) {
                console.log("file or resource not found");
            }
        }
    }
    var formData = new FormData();
    let params = 'token=' + jwt;
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
    xhr.open("POST", "/partida/misPartidas");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
}