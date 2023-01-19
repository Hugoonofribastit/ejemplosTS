"use strict";
// una interfaz es un contrato que debemos respetar. Contrato es un tipo de dato que contiene cierto tipo de atributo o metodos
let usuario1 = { userName: "Hugo", password: "1234" };
console.log(usuario1);
console.log(usuario1.userName);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
avion.abordarTransporte();
