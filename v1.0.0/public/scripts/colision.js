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
                if (listaZombies[i].salud <= 0) {
                    var drop = false;//Variable para controlar 1 drop por zombie
                    if (drop == false) {
                        switch (Math.floor(Math.random() * 15) + 1) {//Probabilidad de dropear un botiquin de un zombie cuando muere
                            case 2://TODO: Hacer algo similar con las armas, y ademas que sea necesario pulsar una tecla para cambiar el arma actual.
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

                                var posXBotiquin = (document.getElementById(listaZombies[i].nombre).getBoundingClientRect().left +
                                    document.getElementById(listaZombies[i].nombre).getBoundingClientRect().width / 2) - container.getBoundingClientRect().left;

                                var posYBotiquin = (document.getElementById(listaZombies[i].nombre).getBoundingClientRect().top +
                                    document.getElementById(listaZombies[i].nombre).getBoundingClientRect().height / 2) - container.getBoundingClientRect().top;

                                var porcentajeXBotiquin = posXBotiquin / container.getBoundingClientRect().width;//Para reposicionamiento del botiquin
                                var porcentajeYBotiquin = posYBotiquin / container.getBoundingClientRect().height;

                                objetoBotiquin = {
                                    nombre: "botiquin" + contadorItems,
                                    porcX: porcentajeXBotiquin,
                                    porcY: porcentajeYBotiquin
                                }

                                items.push(objetoBotiquin);

                                rectanguloBotiquin.style.left = posXBotiquin + "px";
                                rectanguloBotiquin.style.top = posYBotiquin + "px";

                                desvanecerItem(1, "botiquin" + contadorItems);//Devanece el botiquin a los 30s
                                drop = true;
                                break;

                            default:
                                break;
                        }
                    }

                    if (drop == false) {
                        switch (Math.floor(Math.random() * 2) + 1) {//Probabilidad de dropear un arma de un zombie cuando muere por disparo
                            case 2:
                                generarArma(i);
                                drop = true;
                                break;

                            default:
                                break;
                        }
                    }

                    destruir(listaZombies[i].nombre, "zombie", i);
                }
                return true;
            }
        }
        return false;//Sistema de colision arreglado, antes solo comprobaba el primer indice al estar dentro del for
    }

}