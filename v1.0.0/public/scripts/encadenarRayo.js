function encadenarRayo(nombreBala, impacto) {//WIP

    var balaRec = document.getElementById(nombreBala).getBoundingClientRect();

    var X = balaRec.x + balaRec.width / 2;
    var Y = balaRec.y + balaRec.height / 2;

    var idRayo = "";


    for (let i = 0; i < listaZombies.length; i++) {

        contadorAssets++;
        idRayo = "rayo" + contadorAssets;
        var rayo = document.createElement("div");
        rayo.setAttribute("id", idRayo);
        rayo.setAttribute("class", "rayo");
        var imagenAsset = document.createElement("img");

        imagenAsset.setAttribute("src", "./resources/gif/lightning.png");
        imagenAsset.setAttribute("style", "width: 100%; height: 100%;");
        imagenAsset.setAttribute("draggable", "false");
        rayo.appendChild(imagenAsset);
        container.appendChild(rayo);

        var recZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect();
        //a2 + b2 = c2 (c es el width, a y b la distancia entre X2 y X1 y Y2 y Y1)
        var a = Math.abs(X - (recZombie.left + recZombie.width / 2));
        var b = Math.abs(Y - (recZombie.top + recZombie.height / 2));
        var width = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        document.getElementById(idRayo).style.left = X - container.getBoundingClientRect().left + "px";
        document.getElementById(idRayo).style.top = Y - container.getBoundingClientRect().top + "px";
        document.getElementById(idRayo).style.width = width + "px";
        document.getElementById(idRayo).style.height = "3vw";

        var rad = Math.atan2(Y - (recZombie.y + recZombie.height / 2) - document.getElementById(idRayo).getBoundingClientRect().height / 2,
            X - recZombie.x);//Orientacion del centro del div al centro del zombie
        var rot = (rad * (180 / Math.PI) * -1) + 180;

        document.getElementById(idRayo).style.transform = "rotate(" + (-rot) + "deg)";//Sacado por Prueba y error

        desvanecerItem(5, idRayo);//Necesaario realizarlo en la funcion, ya que si hago el timeout aqui se producen errores de solapado con los nombres

        X = recZombie.left + recZombie.width / 2;//Ahora el punto de partida será el zombie golpeado
        Y = recZombie.top + recZombie.height / 2;

        listaZombies[i].salud = listaZombies[i].salud - impacto;
        if (listaZombies[i].salud <= 0) {

            var porcentajeX = listaZombies[i].porcX;
            var porcentajeY = listaZombies[i].porcY;

            drops(recZombie.x - container.getBoundingClientRect().left, recZombie.y - container.getBoundingClientRect().top,
                porcentajeX, porcentajeY, listaZombies[i].tipoZombie);

            destruir(listaZombies[i].nombre, "zombie", i);
            i--; //El zombie siguiente, disminuirá su indice 1 posicion, y despues de esta iteracion se produce i++, 
        }//Por lo que haciendo i-- cancelamos el avance de la i (como en explosion.js)
    }
}