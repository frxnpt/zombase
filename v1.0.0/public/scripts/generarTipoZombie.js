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
        velocidad: 1.2,
        cooldown: 800
    }

    if ((ronda % 10) == 0 && boss == false) {
        objetoZombie.tipoZombie = "ZOMBIEBOSS";
        objetoZombie.velocidad = 2;
        objetoZombie.cooldown = 1000;
        objetoZombie.salud = 3000 + 150 * ronda;
        objetoZombie.impacto = 10 + 0.5 * ronda;
        //Sonidos de este zombie: BOSS 1,2
        var sound = new Audio("./resources/sounds/zombies/BOSS_SPAWN" + (Math.floor(Math.random() * 2) + 1) + ".wav");
        sound.volume = volumen;
        sound.play();
        boss = true;
        return objetoZombie;
    } else if (boss == true && (ronda % 10) != 0) {
        boss = false;
    }
    var indiceSonido = 7;//Sonidos zombie default

    switch (Math.floor(Math.random() * 10) + 1) {//Modificar rango conforme los añada. Quizá separar en diferentes switchs(dentro de cada caso?) para jugar con posibilidades individuales
        case 2://Cambiamos campos necesarios. Zombie Lento que dispara
            objetoZombie.tipoZombie = "zombieTipo2";
            objetoZombie.velocidad = 10;//Avanza un poco cada vez que dispara, leer abajo
            objetoZombie.cooldown = 3100 - 20 * ronda;//Este es especial lleva el cooldown en el movimiento. y en este dispara
            objetoZombie.salud = 85 + 50 * ronda;
            objetoZombie.impacto = 0;//Su impacto estará en la bala
            //Sonidos de este zombie: SPAWN 4,5,6
            indiceSonido = 4;
            break;
        case 4://Zombie Rápido poca salud
            objetoZombie.tipoZombie = "zombieTipo3";
            objetoZombie.velocidad = 2.4;
            objetoZombie.cooldown = 400;
            objetoZombie.salud = 40 + 8 * ronda;
            objetoZombie.impacto = 2 + ronda;
            //Sonidos de este zombie: SPAWN 10,11,12 
            indiceSonido = 10;
            break;
        case 6://Zombie base más fuerte. Hacer que solo salga a partir X rondas
            objetoZombie.tipoZombie = "zombieTipo4";
            objetoZombie.velocidad = 1.7;
            objetoZombie.cooldown = 1100;//Poco más de cooldown para balancear
            objetoZombie.salud = 70 + 55 * ronda;
            objetoZombie.impacto = 8 + ronda;
            //Sonidos de este zombie: SPAWN 1,2,3
            indiceSonido = 1;
            break;
        case 8://Zombie flojo cuerpo a cuerpo, pero que deja una mina explosiva al morir
            objetoZombie.tipoZombie = "zombieTipo5";
            objetoZombie.velocidad = 1.4;
            objetoZombie.cooldown = 650;
            objetoZombie.salud = 80 + 35 * ronda;
            objetoZombie.impacto = 1 + Math.round(ronda / 2);
            //Sonidos de este zombie: SPAWN 13,14,15
            indiceSonido = 13;
            break;
        case 10://Zombie flojo cuerpo a cuerpo, pero que deja un charco de veneno al morir
            objetoZombie.tipoZombie = "zombieTipo6";
            objetoZombie.velocidad = 1.6;
            objetoZombie.cooldown = 600;
            objetoZombie.salud = 60 + 45 * ronda;
            objetoZombie.impacto = 2 + Math.round(ronda / 2);
            //Sonidos de este zombie: SPAWN 16,17,18
            indiceSonido = 16;
            break;
        default://Zombie tipo1
            //Sonidos de este zombie: SPAWN 7,8,9
            break;
    }
    var sound = new Audio("./resources/sounds/zombies/ZOMBIE_SPAWN" + (Math.floor(Math.random() * 3) + indiceSonido) + ".wav");
    sound.volume = volumen;
    sound.play();

    return objetoZombie;
}