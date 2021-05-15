function generarTipoZombie() {
    var objetoZombie = {
        nombre: "zombie" + zombies,
        salud: 60 + 40 * ronda,
        impacto: 5 + ronda,
        tipoZombie: "zombieTipo1",
        porcX: 0,
        porcY: 0,
        numeroZombie: contadorZombies,
        intervalo: contadorIntervalos,
        velocidad: 1,
        cooldown: 800
    }

    switch (Math.floor(Math.random() * 5) + 1) {
        case 2://Cambiamos campos necesarios
            objetoZombie.tipoZombie = "zombieTipo2";
            objetoZombie.velocidad = 10;//Avanza un poco cada vez que dispara, leer abajo
            objetoZombie.cooldown = 3100 - 20 * ronda;//Este es especial lleva el cooldown en el movimiento. y en este dispara
            objetoZombie.salud = 100 + 45 * ronda;
            objetoZombie.impacto = 0;//Su impacto estará en la bala
            break;

        default://Zombie tipo1
            break;
    }

    return objetoZombie;
}