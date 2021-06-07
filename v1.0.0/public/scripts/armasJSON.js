const listadoArmasJSON = [//modos disparo: 1- semiautomatico, 2- automatica, 3 - explosivo, 4 - penetrante, 5 -escopeta, 6- cadena de rayos
    {
        "nombre": "P4100",//Pistola inicial
        "cargador": 8,
        "tamanoCargador": 8,
        "municion": 120,
        "recarga": 2000,
        "cadencia": 200, //--> semiautomatico
        "velocidad": 0.75,
        "impacto": 30,
        "modoDisparo": 1
    },
    {
        "nombre": "MSS500",
        "cargador": 6,
        "tamanoCargador": 6,
        "municion": 84,
        "recarga": 3000,
        "cadencia": 600, //cooldown timer
        "velocidad": 1,
        "impacto": 65, //8 BALLAS ESPARCIDAS
        "modoDisparo": 5
    },
    {
        "nombre": "FA16", //automatico
        "cargador": 30,
        "tamanoCargador": 30,
        "municion": 450,
        "recarga": 2400,
        "cadencia": 40,
        "velocidad": 2,
        "impacto": 75,
        "modoDisparo": 2
    },
    {
        "nombre": "ARMA_DESCONOCIDA",//ESTILO ARMA DE RAYOS
        "cargador": 20,
        "tamanoCargador": 20,
        "municion": 100,
        "recarga": 2800,
        "cadencia": 350,
        "velocidad": 2,
        "impacto": 950,//Arma especial
        "modoDisparo": 1
    },
    {
        "nombre": "DE90",//Tipo desert eagle, lenta y potente
        "cargador": 7,
        "tamanoCargador": 7,
        "municion": 94,
        "recarga": 2000,
        "cadencia": 700,
        "velocidad": 1.4,
        "impacto": 500,
        "modoDisparo": 1
    },
    {
        "nombre": "LANZA-NUKES",//SUPER EXPLOSIONES
        "cargador": 1,
        "tamanoCargador": 1,
        "municion": 6,
        "recarga": 5000,
        "cadencia": 2500,
        "velocidad": 0.4,
        "impacto": 3500,
        "modoDisparo": 3
    },
    {
        "nombre": "M101",//Pistola parecida a la inicial pero mejor
        "cargador": 12,
        "tamanoCargador": 12,
        "municion": 180,
        "recarga": 2300,
        "cadencia": 100,
        "velocidad": 1.1,
        "impacto": 95,
        "modoDisparo": 1
    },
    {
        "nombre": "SMG507", //automatico, SUBFUSIL
        "cargador": 35,
        "tamanoCargador": 35,
        "municion": 250,
        "recarga": 1800,
        "cadencia": 55,
        "velocidad": 1.5,
        "impacto": 52,
        "modoDisparo": 2
    },
    {
        "nombre": "SU-4", //automatico, SUBFUSIL
        "cargador": 50,
        "tamanoCargador": 50,
        "municion": 300,
        "recarga": 2000,
        "cadencia": 40,
        "velocidad": 1.7,
        "impacto": 38,
        "modoDisparo": 2
    },
    {
        "nombre": "FG1", //automatico
        "cargador": 25,
        "tamanoCargador": 25,
        "municion": 375,
        "recarga": 2600,
        "cadencia": 65,
        "velocidad": 1.8,
        "impacto": 140,
        "modoDisparo": 2
    },
    {
        "nombre": "CARABINA_ANTIGUA", //SEMIAUTOMATICO, BALAS PENETRANTES
        "cargador": 10,
        "tamanoCargador": 10,
        "municion": 120,
        "recarga": 2700,
        "cadencia": 600,
        "velocidad": 2.1,
        "impacto": 375,
        "modoDisparo": 4
    },
    {
        "nombre": "L11SR", //SEMIAUTOMATICO, BALAS PENETRANTES
        "cargador": 5,
        "tamanoCargador": 5,
        "municion": 45,
        "recarga": 3500,
        "cadencia": 1800,
        "velocidad": 2.3,
        "impacto": 950,
        "modoDisparo": 4
    },
    {
        "nombre": "LANZAGRANADAS",//EXPLOSIONES
        "cargador": 6,
        "tamanoCargador": 6,
        "municion": 60,
        "recarga": 2700,
        "cadencia": 600,
        "velocidad": 0.7,
        "impacto": 700,
        "modoDisparo": 3
    },
    {
        "nombre": "EXPERIMENTO-69420",//CADENA DE RAYOS
        "cargador": 1,
        "tamanoCargador": 1,
        "municion": 6,
        "recarga": 4500,
        "cadencia": 2000,
        "velocidad": 0.3,
        "impacto": 9000,
        "modoDisparo": 6
    }
]