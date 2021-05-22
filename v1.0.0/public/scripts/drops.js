function drops(X, Y, perX, perY, tipoZombie) {//TODO: ?recalcular X e Y, posicionar desde el medio y restar la mitad de width y height dividos por 2 como en explosion

    var drop = false;//Variable para controlar 1 drop por zombie
    if (drop == false) {
        switch (Math.floor(Math.random() * 15) + 1) {//Probabilidad de dropear un botiquin de un zombie cuando muere
            case 2:
                contadorItems++;
                var botiquin = document.createElement("div");
                botiquin.setAttribute("id", "botiquin" + contadorItems);
                botiquin.setAttribute("class", "BOTIQUIN");
                var imagen = document.createElement("img");
                imagen.setAttribute("src", "./resources/items/BOTIQUIN.png");
                imagen.setAttribute("style", "width: 100%; height: 100%;");
                imagen.setAttribute("draggable", "false");
                botiquin.appendChild(imagen);
                container.appendChild(botiquin);

                var rectanguloBotiquin = document.getElementById("botiquin" + contadorItems);

                var objetoBotiquin = {
                    nombre: "botiquin" + contadorItems,
                    porcX: perX,
                    porcY: perY
                }

                botiquines.push(objetoBotiquin);

                rectanguloBotiquin.style.left = X + "px";
                rectanguloBotiquin.style.top = Y + "px";

                desvanecerItem(1, "botiquin" + contadorItems);//Devanece el botiquin a los 30s
                drop = true;
                break;

            default:
                break;
        }
    }

    if (drop == false) {
        switch (Math.floor(Math.random() * 5) + 1) {//Probabilidad de dropear una municion de un zombie cuando muere
            case 1:
                contadorItems++;
                var municion = document.createElement("div");
                municion.setAttribute("id", "municion" + contadorItems);
                municion.setAttribute("class", "MUNICION");
                var imagen = document.createElement("img");
                imagen.setAttribute("src", "./resources/items/MUNICION.png");
                imagen.setAttribute("style", "width: 100%; height: 100%;");
                imagen.setAttribute("draggable", "false");
                municion.appendChild(imagen);
                container.appendChild(municion);

                var rectanguloMunicion = document.getElementById("municion" + contadorItems);

                var objetoMunicion = {
                    nombre: "municion" + contadorItems,
                    porcX: perX,
                    porcY: perY
                }

                municiones.push(objetoMunicion);

                rectanguloMunicion.style.left = X + "px";
                rectanguloMunicion.style.top = Y + "px";

                desvanecerItem(3, "municion" + contadorItems);//Devanece la municion a los 30s
                drop = true;
                break;

            default:
                break;
        }
    }


    if (drop == false) {
        switch (Math.floor(Math.random() * 3) + 1) {//Probabilidad de dropear un arma de un zombie cuando muere por disparo
            case 2:
                generarArma(X, Y, perX, perY);
                drop = true;
                break;

            default:
                break;
        }
    }

    if (drop == false) {//No he hecho que aparezca siempre la sangre ya que puede dificultar la visibilidad de los drops
        contadorAssets++;
        var sangre = document.createElement("div");
        sangre.setAttribute("id", "sangre" + contadorAssets);
        sangre.setAttribute("class", "SANGRE");
        var imagenAsset = document.createElement("img");
        var numeroSangre = (Math.floor(Math.random() * 8) + 1);//1 al 8

        imagenAsset.setAttribute("src", "./resources/sangre/BLOOD_" + numeroSangre + ".png");
        imagenAsset.setAttribute("style", "width: 100%; height: 100%;");
        imagenAsset.setAttribute("draggable", "false");
        sangre.appendChild(imagenAsset);
        container.appendChild(sangre);

        var objetoSangre = {
            nombre: "sangre" + contadorAssets,
            porcX: perX,
            porcY: perY
        }

        listaAssets.push(objetoSangre);

        document.getElementById("sangre" + contadorAssets).style.left = X + "px"; //No aparecerán con la X centrada del zombie, porque la imagen empezaria a 
        document.getElementById("sangre" + contadorAssets).style.top = Y + "px";//"crecer" desde el centro
        desvanecerItem(4, "sangre" + contadorAssets);
    }

    switch (tipoZombie) {//Puntos para la Score
        case "zombieTipo1":
            score += Math.round(2 + ronda / 3);
            document.getElementById("Scoreboard-data").innerHTML = score;
            break;
        case "zombieTipo2":
            score += Math.round(3.3 + ronda / 3);
            document.getElementById("Scoreboard-data").innerHTML = score;
            break;
        case "zombieTipo3":
            score += Math.round(1.5 + ronda / 3);
            document.getElementById("Scoreboard-data").innerHTML = score;
            break;
        case "zombieTipo4":
            score += Math.round(4 + ronda / 3);
            document.getElementById("Scoreboard-data").innerHTML = score;
            break;
        case "zombieTipo5":
            score += Math.round(3.5 + ronda / 3);
            document.getElementById("Scoreboard-data").innerHTML = score;
            contadorAssets++;
            var minaZombie = document.createElement("div");
            minaZombie.setAttribute("id", "minaZombie" + contadorAssets);
            minaZombie.setAttribute("class", "minaZombie");
            /*var imagen = document.createElement("img");
            imagen.setAttribute("src", "./resources/items/minaZombie.png");
            imagen.setAttribute("style", "width: 100%; height: 100%;");
            imagen.setAttribute("draggable", "false");
            minaZombie.appendChild(imagen);*/
            container.appendChild(minaZombie);
            var objetoMina = {
                nombre: "minaZombie" + contadorAssets,
                porcX: perX,
                porcY: perY
            }
            listaAssets.push(objetoMina);
            document.getElementById("minaZombie" + contadorAssets).style.left = X + "px";
            document.getElementById("minaZombie" + contadorAssets).style.top = Y + "px";
            var recMina = document.getElementById("minaZombie" + contadorAssets).getBoundingClientRect();
            var minaX = (recMina.left + recMina.width / 2) - container.getBoundingClientRect().left;
            var minaY = (recMina.top + recMina.height / 2) - container.getBoundingClientRect().top;
            contadorIntervalos++;
            setTimeout(function () {
                explosionZombie(minaX, minaY, objetoMina.nombre);
                for (let i = 0; i < listaAssets.length; i++) {
                    if (objetoMina.nombre == listaAssets[i].nombre) {
                        destruir(objetoMina.nombre, "ASSET", i);
                        break;
                    }
                }
            }, 3000);
            break;
        case "ZOMBIEBOSS":
            score += Math.round(100 + ronda * 2);
            document.getElementById("Scoreboard-data").innerHTML = score;
        default:
            break;
    }
}