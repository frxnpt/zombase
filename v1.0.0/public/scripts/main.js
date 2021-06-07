//TODO: Mirar WEBPACK comprobar si da fallos
var pausa = false;
var container = document.getElementById("container");
container.style.width = "70vw";
container.style.height = "42vw";
container.style.marginTop = "2vh";
container.style.marginLeft = document.body.clientWidth / 2 - container.clientWidth / 2 + "px";
var elem = document.getElementById("animate");
var xInicial = container.clientWidth / 2;
var yInicial = container.clientHeight / 2;
var widhtInicial = 2;
var heightInicial = 2;
var balasDisparadas = 0;
var balasDisparadasZombie = 0;
var contadorItems = 0; //para Ids Items en el suelo (municion y botiquines)
var contadorArmas = 0; //para Ids Armas en el suelo
var contadorAssets = 0; //Ids sangre
var contadorBiohazards = 0; //ids para elementos como el veneno
var ronda = 1;
var boss = false;
var limiteZombies = Math.round((ronda / 3 + 6) * (0.5 * ronda)) + 1;
var volumen = 0.2; //No resetear
var score = 0;
document.getElementById("Scoreboard-data").innerHTML = score;
var zombies = 0; //Nombre de los zombies
var contadorZombies = 0; //Contador de zombies para la ronda(reseteado a 0 despues de cada ronda)
//Guardamos de forma inicial la %pos relativa de la X y la Y para redimensionar luego (0.5 inicial)
var Jugador = {
        salud: 100,
        skinActual: "RAMBO",
        armaActual: 1,
        arma1: {
            nombreArma1: "P4100",
            cargadorArma1: 8,
            tamanoCargadorArma1: 8,
            municionArma1: 120,
            recargaArma1: 2000,
            cadenciaArma1: 200,
            velocidadArma1: 0.75,
            impactoArma1: 30,
            modoDisparoArma1: 1,
            onCooldownArma1: false
        },
        arma2: {
            nombreArma2: "none",
            cargadorArma2: 0,
            tamanoCargadorArma2: 0,
            municionArma2: 0,
            recargaArma2: 0,
            cadenciaArma2: 0,
            velocidadArma2: 0,
            impactoArma2: 0,
            modoDisparoArma2: 1,
            onCooldownArma2: false
        },
        velocidad: 0.5,
        porcentajeX: 0.5, //Empieza en el centro del contenedor
        porcentajeY: 0.5,
        recargando: false
    } //Valores iniciales del jugador
    //Contador para ver el orden de los intervalos, y luego poder eliminarlos debidamente. 
var contadorIntervalos = 0;
var intervalosAnteriores = 1; //1 para que empiece a limpiar por el intervalo 1, no hay intervalo 0

//Lista de objetos a parte del personaje, container y balas, utilizados para ver si hay colision/redimensión.
//Para añadir zombies, obstaculos , otros jugadores quizas. posible nuevo array de jugadores en el futuro.
var listaZombies = [];

//balas, items, armas, assets, biohazards activas para su reposicionamiento y redimension
//**Separando en diferentes arrays, ahoramos gran cantidad de comprobaciones a multiples funciones**
var Balas = [];
var BalasZombie = [];
var botiquines = [];
var municiones = [];
var armas = [];
var listaAssets = [];
let saludContainer = document.getElementById("salud");
var listaBiohazards = [];
var inmunidadVeneno = false;
var ultimoZombieGolpeado = "";

elem.style = "width: " + widhtInicial + "vw; height: " + heightInicial +
    "vw; position: absolute; display: block; left: " +
    xInicial + "px; top: " + yInicial + "px;";
saludContainer.innerHTML = 'Salud: ' + Jugador.salud + "HP";


document.getElementById("personaje").setAttribute("src", "./resources/personajes/RAMBO_" + Jugador.arma1.nombreArma1 + ".png");
document.getElementById("armamano1-municion").innerHTML = "Cargador: " + Jugador.arma1.cargadorArma1 + " / " + Jugador.arma1.municionArma1;
document.getElementById("armamano1-data").innerHTML = Jugador.arma1.nombreArma1.replace('_', ' ');
document.getElementById("armamano1-img").setAttribute("src", "../resources/armas_frame/" + Jugador.arma1.nombreArma1 + "_FRAME.png");
var ratonX = 0;
var ratonY = 0;
let keysPressed = {};
var recogerArma = false;
document.addEventListener('keydown', (event) => {
    keysPressed[event.code] = true;
});

document.addEventListener('keyup', (event) => {
    if (event.code == 'KeyE') {
        recogerArma = false; //Sistema para que no coja 2 armas de 1 pulsación
    } //ya que al estar a 20ms aunque pulsemos una vez, detectara gran cantidad de keydown
    //De esta forma, solo cuando se haya levantado la tecla E se podra recoger otra arma
    delete keysPressed[event.code];
});

document.addEventListener('mousemove', (event) => {
    if (pausa == false) {
        ratonX = event.clientX;
        ratonY = event.clientY;
        var rad = Math.atan2(ratonX - elem.getBoundingClientRect().x, ratonY - elem.getBoundingClientRect().y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        document.getElementById("personaje").style.transform = "rotate(" + rot + "deg)";
    }
});
//TODO: AÑADIR EVENT LISTENER PARA CUANDO SE PIERDA EL FOCO SE PONGA EN PAUSA
container.addEventListener("wheel", cambiarArma)
    //Movimiento basado en % del tamaño del contedor, de forma que a tamaños de container mas grandes, tenga una velocidad similar
    //En caso de un cuadrado 1000 x 1000, yendo de 3 en 3 de forma estática por ejemplo, tomaría mucho mas tiempo llegar a las esquinas
    //que en un 400 x 400. Esto es para futuro tamaño responsive del container. 0.01 velocidad sería 1% del container por ejecución.
    //Este valor nos servirá de referencia
var factorVelocidad = container.clientWidth * 0.025;
window.addEventListener("resize", reposicionDeObjetos); //A veces falla al pulsar maximizar?
document.addEventListener("click", disparar);
document.addEventListener("contextmenu", pausar);
document.addEventListener("visibilitychange", pausar);
var disparoAutomatico;
var armaAutomatica = false;
document.addEventListener("mousedown", function(e) {
    if (pausa == false && armaAutomatica == true && e.button == 0) {
        contadorIntervalos++;
        disparoAutomatico = setInterval(function() {
            disparar();
        }, 20); //TODO: testear en 5
    }
});

document.addEventListener("mouseup", function() {
    if (pausa == false && armaAutomatica == true) {
        clearInterval(disparoAutomatico);
    }
});

document.addEventListener("dragend", function() {
    if (pausa == false && armaAutomatica == true) {
        clearInterval(disparoAutomatico);
    }
});

document.getElementById("audio").oninput = function() {
    volumen = document.getElementById("audio").value / 100;
};

window.onbeforeunload = function() { //Evita que se carguen los elementos en posiciones indebidas (no se porque sucede)
    window.scrollTo(0, 0); //Al hacer habiendo scrolleado abajo
}

document.getElementById("Scoreboard").style.top = container.getBoundingClientRect().top + "px"; //ajuste altura score
document.getElementById("armamano1").style.top = container.getBoundingClientRect().top +
    container.getBoundingClientRect().height / 3.2 + "px";
document.getElementById("armamano2").style.top = container.getBoundingClientRect().top +
    container.getBoundingClientRect().height / 1.9 + "px";
document.getElementById("audiocontainer").style.top = container.getBoundingClientRect().top + "px";

setInterval(myMove, 20, container, elem); //Comprueba cada x milisegundos
setTimeout(nuevaRonda, 5000, contadorIntervalos);
var generarZombie = 0;

//Contador de intervalos automatico. Hay algunas extensiones que aumentan el número de intervalos (como por ejemplo ublock). De base debería empezar
//Por 3 (intervalo movimiento, ronda y el que viene ahora). También por ejemplo, mozilla firefox inserta un intervalo base. Con este
//intervalo vamos a comprobar (un número de veces limitado definido por limiteIntervalos) cuántos intervalos llevamos, para llevar un seguimiento
//mas fiable.
var limiteIntervalos = 20; //20, me parece un número razonable, ya que nadie deberia de tener por ejemplo 10+ extensiones actuando sobre la pagina
setInterval(function() {
    contadorIntervalos = limiteIntervalos;
    clearInterval(contadorIntervalos);
    limiteIntervalos--;
    if (limiteIntervalos < 0) {
        pausa = true; //si hay demasiados intervalos por detrás, el juego no continuará
    }
}, 10);