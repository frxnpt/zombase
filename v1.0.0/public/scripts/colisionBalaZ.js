function colisionBalaZ(X, Y, impacto) {
    if (X < 0 || X > document.getElementById("container").getBoundingClientRect().width ||
        Y < 0 || Y > document.getElementById("container").getBoundingClientRect().height) {
        return true;
    }

    var limiteObjetoXizda = elem.getBoundingClientRect().left -
        document.getElementById("container").getBoundingClientRect().left;

    var limiteObjetoXdcha = elem.getBoundingClientRect().right -
        document.getElementById("container").getBoundingClientRect().left;

    var limiteObjetoYtop = elem.getBoundingClientRect().top -
        document.getElementById("container").getBoundingClientRect().top;

    var limiteObjetoYbot = elem.getBoundingClientRect().bottom -
        document.getElementById("container").getBoundingClientRect().top;

    if ((X >= limiteObjetoXizda && X <= limiteObjetoXdcha) && (Y >= limiteObjetoYtop && Y <= limiteObjetoYbot)) {
        Jugador.salud = Jugador.salud - impacto;
        document.getElementById("salud").innerHTML = "Salud: " + Jugador.salud + "HP";
        if (Jugador.salud <= 0) {//Cambiar quiza tipo "zombie" por otro contenido en el array (este valor es estatico de prueba)
            finalPartida();
        }
        return true;
    }
    return false;
}