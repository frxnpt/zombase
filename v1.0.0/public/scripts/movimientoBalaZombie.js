function movimientoBalaZombie(movimientoX, movimientoY, numeroBalaZombie) {
    if (pausa == false) {

        var posArrayBulletZ = 0;
        for (let i = 0; i < BalasZombie.length; i++) {
            if (BalasZombie[i].nombre == "BalaZ" + numeroBalaZombie) {
                posArrayBulletZ = i;
            }
        }

        if (BalasZombie[posArrayBulletZ] == undefined) {
            pausa = true;
            alert("\nHa ocurrido un error. Para más detalles visita la consola (F12)");//TODO: pasar a modal por ejemplo
            console.error("Ha ocurrido un error, alguna de las extensiones está bloqueando el funcionamiento del juego, por ello este ha sido paralizado."
                + "\n\n Puedes probar a desactivar algunas extensiones (seguramente sea alguna que esté modificando o actuando sobre la página."
                + " Por ejemplo uBlock, o la extensión de Adobe). Tranquilo, no utilizamos anuncios de ningún tipo.");
            return;
        }

        var factorVelocidadBulletZ = factorVelocidad / 4;
        var factorZAumentoX = factorVelocidadBulletZ * movimientoX * BalasZombie[posArrayBulletZ].velocidadBullet;
        var factorZAumentoY = factorVelocidadBulletZ * movimientoY * BalasZombie[posArrayBulletZ].velocidadBullet;

        var posXBulletZ = (document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().left -
            document.getElementById("container").getBoundingClientRect().left) + factorZAumentoX;
        var posYBulletZ = (document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().top -
            document.getElementById("container").getBoundingClientRect().top) + factorZAumentoY;

        BalasZombie[posArrayBulletZ].porcX = posXBulletZ / container.getBoundingClientRect().width;
        BalasZombie[posArrayBulletZ].porcY = posYBulletZ / container.getBoundingClientRect().height;

        document.getElementById("BalaZ" + numeroBalaZombie).style.left = posXBulletZ + "px";
        document.getElementById("BalaZ" + numeroBalaZombie).style.top = posYBulletZ + "px";

        var posXHitboxZ = posXBulletZ + document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().width / 2;
        var posYHitboxZ = posYBulletZ + document.getElementById("BalaZ" + numeroBalaZombie).getBoundingClientRect().height / 2;

        var colisionZ = colisionBalaZ(posXHitboxZ, posYHitboxZ, BalasZombie[posArrayBulletZ].impactoBullet);

        if (colisionZ == true) {
            destruir("BalaZ" + numeroBalaZombie, "BalaZombie", posArrayBulletZ);
        }
    }
}