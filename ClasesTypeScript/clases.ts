class Persona{
    private nombre:string;

    constructor(nombre: string){
        this.nombre=nombre
    }
    //definimos un metodo para acceder al atributo nombre, ya que lo seteamos privado
    getNombre():string{
        return this.nombre;
    }
    static metodoEstatico():number{
        return 10;
    }
}

   

let persona1 = new Persona("Hugo");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());