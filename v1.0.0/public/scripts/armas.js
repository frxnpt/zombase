const listadoArmas = [{
        nombre: "PISTOLA1",//Pistola inicial
        cargador: 8,
        tamanoCargador: 8,
        municion: 120,
        recarga: 2000,
        cadencia: 200, //--> semiautomatico
        velocidad: 0.75,
        impacto: 30,
        onCooldown: false
},
{
        nombre: "ESCOPETA1",
        cargador: 6,
        tamanoCargador: 6,
        municion: 84,
        recarga: 3000,
        cadencia: 600, //cooldown timer
        velocidad: 1,
        impacto: 65, //8 BALLAS ESPARCIDAS
        onCooldown: false //funcion disparo
},
{
        nombre: "RIFLEASALTO1", //automatico
        cargador: 30,
        tamanoCargador: 30,
        municion: 450,
        recarga: 2400,
        cadencia: 40,
        velocidad: 2,
        impacto: 75,
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
        impacto: 500,
        onCooldown: false
},
{
        nombre: "NUKE_LAUNCHER",//SUPER EXPLOSIONES
        cargador: 1,
        tamanoCargador: 1,
        municion: 25,
        recarga: 4300,
        cadencia: 1000,
        velocidad: 0.5,
        impacto: 3500,
        onCooldown: false
},
{
        nombre: "PISTOLA3",//Pistola parecida a la inicial pero mejor
        cargador: 12,
        tamanoCargador: 12,
        municion: 180,
        recarga: 2300,
        cadencia: 100,
        velocidad: 1.1,
        impacto: 95,
        onCooldown: false
},
{
        nombre: "SUBFUSIL1", //automatico, SUBFUSIL
        cargador: 35,
        tamanoCargador: 35,
        municion: 350,
        recarga: 1800,
        cadencia: 55,
        velocidad: 1.5,
        impacto: 55,
        onCooldown: false //funcion disparo
},
{
        nombre: "SUBFUSIL2", //automatico, SUBFUSIL MEJOR
        cargador: 50,
        tamanoCargador: 50,
        municion: 400,
        recarga: 2000,
        cadencia: 40,
        velocidad: 1.7,
        impacto: 40,
        onCooldown: false //funcion disparo
},
{
        nombre: "RIFLEASALTO2", //automatico
        cargador: 25,
        tamanoCargador: 25,
        municion: 450,
        recarga: 2600,
        cadencia: 65,
        velocidad: 1.8,
        impacto: 140,
        onCooldown: false //funcion disparo
},
{
        nombre: "RIFLEASALTO3", //SEMIAUTOMATICO, BALAS PENETRANTES
        cargador: 10,
        tamanoCargador: 10,
        municion: 120,
        recarga: 2700,
        cadencia: 400,
        velocidad: 2.1,
        impacto: 375,
        onCooldown: false //funcion disparo
},
/*{
        nombre: "FRANCOTIRADOR1", //SEMIAUTOMATICO, BALAS PENETRANTES
        cargador: 5,
        tamanoCargador: 5,
        municion: 65,
        recarga: 2600,
        cadencia: 1000,
        velocidad: 1.7,
        impacto: 850,
        onCooldown: false //funcion disparo
},*/
{
        nombre: "LANZAGRANADAS",//EXPLOSIONES
        cargador: 6,
        tamanoCargador: 6,
        municion: 60,
        recarga: 2700,
        cadencia: 600,
        velocidad: 0.7,
        impacto: 700,
        onCooldown: false
}/*,
{
        nombre: "EXPERIMENTO-69420",//CADENA DE RAYOS (IDA DE CABEZA)
        cargador: 1,
        tamanoCargador: 1,
        municion: 6,
        recarga: 4500,
        cadencia: 1300,
        velocidad: 0.3,
        impacto: 9000,
        onCooldown: false
},
*/

]