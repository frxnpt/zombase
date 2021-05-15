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

    switch (Math.floor(Math.random() * 6) + 1) {//Modificar rango conforme los añada. Quizá separar en diferentes switchs(dentro de cada caso?) para jugar con posibilidades individuales
        case 2://Cambiamos campos necesarios. Zombie Lento que dispara
            objetoZombie.tipoZombie = "zombieTipo2";
            objetoZombie.velocidad = 10;//Avanza un poco cada vez que dispara, leer abajo
            objetoZombie.cooldown = 3100 - 20 * ronda;//Este es especial lleva el cooldown en el movimiento. y en este dispara
            objetoZombie.salud = 100 + 45 * ronda;
            objetoZombie.impacto = 0;//Su impacto estará en la bala
            break;
        /*case 4://Zombie Rápido poca salud
            objetoZombie.tipoZombie = "zombieTipo3";
            objetoZombie.velocidad = 2.2;
            objetoZombie.cooldown = 400;
            objetoZombie.salud = 40 + 8 * ronda;
            objetoZombie.impacto = 2 + ronda;
            break;
        case 6://Zombie base más fuerte. Hacer que solo salga a partir X rondas
            objetoZombie.tipoZombie = "zombieTipo4";
            objetoZombie.velocidad = 1.3;
            objetoZombie.cooldown = 1100;//Poco más de cooldown para balancear
            objetoZombie.salud = 80 + 55 * ronda;
            objetoZombie.impacto = 8 + ronda;
            break;*/
        default://Zombie tipo1
            break;
    }

    return objetoZombie;
}