//decorador se agrego a ecma6 y nos permite agregar funcionalidad sin modificar nuestra clase a la cual queremos decorar

//muy comun en angular

function Saludar(target: Function):void{
    target.prototype.saludos  =function():void{
        console.log("Hola desde decoradores");
    }
}

@Saludar

class Hola{
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();