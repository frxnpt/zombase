function desvanecerItem(tipo, nombre) {
    switch (tipo) {
        case 1://Botiquines (items)
            contadorIntervalos++;
            setTimeout(function () {
                if (document.getElementById(nombre)) {//Comprobamos que existe
                    for (let i = 0; i < items.length; i++) {//Buscamos su posicion en el array y lo destruimos
                        if (nombre == items[i].nombre) {
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
        default:
            break;
    }
}