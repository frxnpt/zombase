function movimientoBalaZombie(movimientoX, movimientoY, numeroBalaZombie, velocidadBala, impacto) {
    if (pausa == false) {

        var factorVelocidadBulletZ = factorVelocidad / 4;
        var factorZAumentoX = factorVelocidadBulletZ * movimientoX * velocidadBala;
        var factorZAumentoY = factorVelocidadBulletZ * movimientoY * velocidadBala;

        var posXBulletZ = (document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().left -
            document.getElementById("container").getBoundingClientRect().left) + factorZAumentoX;
        var posYBulletZ = (document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().top -
            document.getElementById("container").getBoundingClientRect().top) + factorZAumentoY;

        var posArrayBulletZ = 0;
        for (let i = 0; i < BalasZombie.length; i++) {
            if (BalasZombie[i].nombre == "BalaZ" + numeroBalaZombie) {
                posArrayBulletZ = i;
            }
        }

        BalasZombie[posArrayBulletZ].porcX = posXBulletZ / container.getBoundingClientRect().width;
        BalasZombie[posArrayBulletZ].porcY = posYBulletZ / container.getBoundingClientRect().height;

        document.getElementById("BalaZ" + numeroBalaZombie).style.left = posXBulletZ + "px";
        document.getElementById("BalaZ" + numeroBalaZombie).style.top = posYBulletZ + "px";

        var posXHitboxZ = posXBulletZ + document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().width / 2;
        var posYHitboxZ = posYBulletZ + document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().height / 2;

        var colisionZ = colisionBalaZ(posXHitboxZ, posYHitboxZ, impacto);

        if (colisionZ == true) {
            destruir("BalaZ" + numeroBalaZombie, "BalaZombie", posArrayBulletZ);
        }
    }
}