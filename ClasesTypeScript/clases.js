"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //definimos un metodo para acceder al atributo nombre, ya que lo seteamos privado
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Hugo");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
