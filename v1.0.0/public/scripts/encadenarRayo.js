function encadenarRayo(X, Y) {//WIP
    contadorAssets++;
    var rayo = document.createElement("div");
    rayo.setAttribute("id", "rayo" + contadorAssets);
    rayo.setAttribute("class", "rayo");
    var imagenAsset = document.createElement("img");

    imagenAsset.setAttribute("src", "./resources/gif/lightning.png");
    imagenAsset.setAttribute("style", "width: 100%; height: 100%;");
    imagenAsset.setAttribute("draggable", "false");
    rayo.appendChild(imagenAsset);
    container.appendChild(rayo);

    var recZombie = document.getElementById(listaZombies[0].nombre).getBoundingClientRect();
    //a2 + b2 = c2 (c es el width, a y b la distancia entre X2 y X1 y Y2 y Y1)
    var a = Math.abs(X - ((recZombie.left + recZombie.width / 2) - container.getBoundingClientRect().left));
    var b = Math.abs(Y - ((recZombie.top + recZombie.height / 2) - container.getBoundingClientRect().top));
    var width = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var height = width / 4;
    document.getElementById("rayo" + contadorAssets).style.width = width + "px";
    document.getElementById("rayo" + contadorAssets).style.height = height + "px";
    document.getElementById("rayo" + contadorAssets).style.left = X + "px";
    document.getElementById("rayo" + contadorAssets).style.top = Y + "px";

    var rad = Math.atan2((recZombie.left - container.getBoundingClientRect().left) - X,
        (recZombie.top - container.getBoundingClientRect().top) - Y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;

    document.getElementById("rayo" + contadorAssets).style.transform = "rotate(" + rot + "deg)";

}