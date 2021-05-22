const listadoArmas = [{
        nombre: "PISTOLA1",
        cargador: 8,
        tamanoCargador: 8,
        municion: 120,
        recarga: 2000,
        cadencia: 200, //--> semiautomatico
        velocidad: 1,
        impacto: 30,
        onCooldown: false
},
{
        nombre: "ESCOPETA1",
        cargador: 6,
        tamanoCargador: 6,
        municion: 84,
        recarga: 3000,
        cadencia: 800, //cooldown timer
        velocidad: 1,
        impacto: 55, //8 BALLAS ESPARCIDAS
        onCooldown: false //funcion disparo
},
{
        nombre: "RIFLEASALTO1", //automatico
        cargador: 30,
        tamanoCargador: 30,
        municion: 560,
        recarga: 2400,
        cadencia: 40,
        velocidad: 2,
        impacto: 35,
        onCooldown: false //funcion disparo
},
{
        nombre: "ARMARAYOS",//Clasica
        cargador: 20,
        tamanoCargador: 20,
        municion: 200,
        recarga: 2800,
        cadencia: 350,
        velocidad: 2,
        impacto: 950,//Arma especial
        onCooldown: false
},
{
        nombre: "PISTOLA2",//Tipo desert eagle, lenta y potente
        cargador: 7,
        tamanoCargador: 7,
        municion: 94,
        recarga: 2000,
        cadencia: 700,
        velocidad: 1.4,
        impacto: 400,
        onCooldown: false
},
{
        nombre: "NUKE_LAUNCHER",//SUPER EXPLOSIONES
        cargador: 1,
        tamanoCargador: 1,
        municion: 25,
        recarga: 3000,
        cadencia: 500,
        velocidad: 0.5,
        impacto: 2500,
        onCooldown: false
}
]