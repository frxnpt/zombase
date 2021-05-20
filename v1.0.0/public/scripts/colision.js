function colision(X, Y, impacto) {

    if (X < 0 || X > document.getElementById("container").getBoundingClientRect().width ||
        Y < 0 || Y > document.getElementById("container").getBoundingClientRect().height) {
        return true;
    }

    if (listaZombies.length > 0) {

        for (let i = 0; i < listaZombies.length; i++) {
            var limiteObjetoXizda = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left -
                document.getElementById("container").getBoundingClientRect().left;

            var limiteObjetoXdcha = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().right -
                document.getElementById("container").getBoundingClientRect().left;

            var limiteObjetoYtop = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top -
                document.getElementById("container").getBoundingClientRect().top;

            var limiteObjetoYbot = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().bottom -
                document.getElementById("container").getBoundingClientRect().top;

            if ((X >= limiteObjetoXizda && X <= limiteObjetoXdcha) && (Y >= limiteObjetoYtop && Y <= limiteObjetoYbot)) {
                listaZombies[i].salud = listaZombies[i].salud - impacto;
                if (listaZombies[i].salud <= 0) {//Caso en el que el zombie muere

                    var posXZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left - container.getBoundingClientRect().left;
                    var posYZombie = document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top - container.getBoundingClientRect().top;

                    var porcentajeX = listaZombies[i].porcX;
                    var porcentajeY = listaZombies[i].porcY;

                    switch (listaZombies[i].tipoZombie) {//Puntos para la Score
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
                        default:
                            break;
                    }

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
                                imagen.setAttribute("height", "100%");
                                imagen.setAttribute("draggable", "false");
                                botiquin.appendChild(imagen);
                                container.appendChild(botiquin);

                                var rectanguloBotiquin = document.getElementById("botiquin" + contadorItems);

                                var objetoBotiquin = {
                                    nombre: "botiquin" + contadorItems,
                                    porcX: porcentajeX,
                                    porcY: porcentajeY
                                }

                                botiquines.push(objetoBotiquin);

                                rectanguloBotiquin.style.left = posXZombie + "px";
                                rectanguloBotiquin.style.top = posYZombie + "px";

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
                                imagen.setAttribute("height", "100%");
                                imagen.setAttribute("draggable", "false");
                                municion.appendChild(imagen);
                                container.appendChild(municion);

                                var rectanguloMunicion = document.getElementById("municion" + contadorItems);

                                var objetoMunicion = {
                                    nombre: "municion" + contadorItems,
                                    porcX: porcentajeX,
                                    porcY: porcentajeY
                                }

                                municiones.push(objetoMunicion);

                                rectanguloMunicion.style.left = posXZombie + "px";
                                rectanguloMunicion.style.top = posYZombie + "px";

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
                                generarArma(posXZombie, posYZombie, porcentajeX, porcentajeY);
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
                        imagenAsset.setAttribute("height", "100%");
                        imagenAsset.setAttribute("draggable", "false");
                        sangre.appendChild(imagenAsset);
                        container.appendChild(sangre);

                        var objetoSangre = {
                            nombre: "sangre" + contadorAssets,
                            porcX: porcentajeX,
                            porcY: porcentajeY
                        }

                        listaAssets.push(objetoSangre);

                        document.getElementById("sangre" + contadorAssets).style.left = posXZombie + "px"; //No aparecerán con la X centrada del zombie, porque la imagen empezaria a 
                        document.getElementById("sangre" + contadorAssets).style.top = posYZombie + "px";//"crecer" desde el centro
                        desvanecerItem(4, "sangre" + contadorAssets);
                    }

                    destruir(listaZombies[i].nombre, "zombie", i);
                }
                return true;
            }
        }
        return false;//Sistema de colision arreglado, antes solo comprobaba el primer indice al estar dentro del for
    }

}