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
}/*,
{
        nombre: "ARMARAYOS",//Clasica
        cargador: 20,
        tamanoCargador: 20,
        municion: 160,
        recarga: 2800,
        cadencia: 200,
        velocidad: 2,
        impacto: 750 + ronda * 5,//Arma especial, daño escalado
        onCooldown: false
},
{
        nombre: "PISTOLA2",//Tipo desert eagle, lenta y potente
        cargador: 7,
        tamanoCargador: 7,
        municion: 94,
        recarga: 2000,
        cadencia: 500,
        velocidad: 1.3,
        impacto: 400,
        onCooldown: false
}*/

]