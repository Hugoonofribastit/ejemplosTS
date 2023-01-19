let saludo:string  = "Hola desde TypeScript"
saludo = "cambio"
let numero:number = 10;
//tambien puedo crear la variable solo con el tipo como por ej numero:number; y despues poner numero = 10;

//una vez que inicializamos la variable, conserva el tipo de dato y no podemos cambiarlo luego
// es decir, yo ahora no puedo poner number = "Hola" o saludo = 10;
// tampoco es necesario poner el :numero o :string


let cualquiera: any;
//creo variable que puede almacenar cualquier tipo de dato

cualquiera= "cadena";
cualquiera = 15;

const PI_NUMERO  = 3.14;
//COMO ES CONSTANTE NO CAMBIA - nomenclatura de mayusculas


function saludar (){
    console.log(saludo);
    console.log(numero);
    console.log(PI_NUMERO);
    console.log(cualquiera)
}
saludar();