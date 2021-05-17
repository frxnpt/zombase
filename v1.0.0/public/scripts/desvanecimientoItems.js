function desvanecerItem(tipo, nombre) {
    switch (tipo) {
        case 1://Botiquines
            contadorIntervalos++;
            setTimeout(function () {
                if (document.getElementById(nombre)) {//Comprobamos que existe
                    for (let i = 0; i < botiquines.length; i++) {//Buscamos su posicion en el array y lo destruimos
                        if (nombre == botiquines[i].nombre) {
                            destruir(nombre, "BOTIQUIN", i);
                        }
                    }
                }
            }, 30000);//30s
            break;
        case 2://Armas
            contadorIntervalos++;
            setTimeout(function () {
                if (document.getElementById(nombre)) {//Comprobamos que existe
                    for (let i = 0; i < armas.length; i++) {//Buscamos su posicion en el array y lo destruimos
                        if (nombre == armas[i].nombre) {
                            destruir(nombre, "ARMA", i);
                        }
                    }
                }
            }, 30000);//30s
            break;
        case 3://Municiones
            contadorIntervalos++;
            setTimeout(function () {
                if (document.getElementById(nombre)) {//Comprobamos que existe
                    for (let i = 0; i < municiones.length; i++) {//Buscamos su posicion en el array y lo destruimos
                        if (nombre == municiones[i].nombre) {
                            destruir(nombre, "MUNICION", i);
                        }
                    }
                }
            }, 30000);//30s
            break;
        case 4://Sangre
            contadorIntervalos++;
            setTimeout(function () {
                if (document.getElementById(nombre)) {//Comprobamos que existe
                    for (let i = 0; i < listaAssets.length; i++) {//Buscamos su posicion en el array y lo destruimos
                        if (nombre == listaAssets[i].nombre) {
                            destruir(nombre, "SANGRE", i);
                        }
                    }
                }
            }, 30000);//30s
            break;
        default:
            break;
    }
}