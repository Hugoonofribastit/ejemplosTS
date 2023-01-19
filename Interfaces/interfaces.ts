// una interfaz es un contrato que debemos respetar. Contrato es un tipo de dato que contiene cierto tipo de atributos o metodos

interface Usuario{
    userName: string;
    password: string;
    confirmPassword?:string;
    //el ? es para indicar que es opcional
}

let usuario1:Usuario= {userName :"Hugo", password: "1234"}

console.log(usuario1)
console.log(usuario1.userName)

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar  = {
    abordarTransporte: function(){
        console.log("abordando");
    }
}

avion.abordarTransporte();