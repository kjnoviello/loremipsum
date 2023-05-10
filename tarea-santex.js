// Vamos a practicar lo aprendido hasta la clase 2 de Javascript.
// En esta tarea se van a encontrar con 3 ejercicios donde van a poner en práctica el uso de herramientas como el if, for, objetos, arrays y funciones, etc.


// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
// para valor 6
// 1
// 12
// 123
// 1234
// 12356

// para valor 3
// 1
// 12
// 123


// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

// Ejemplo:
// Array1: ['rojo', 'azul', 'amarillo']
// Array2: ['blanco', 'negro', 'rojo']
// Resultado: ['rojo']

// Ejemplo 2:
// Array1: [4, 3, true, 'manzana']
// Array2: ['pera', 3, f alse, true, 3, true]
// Resultado: [3, true]


// 3)
// 3.1) Dado el siguiente objeto
// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
// agregarProducto(nombre, precio, unidades) {
//     // Completar aca...
// }


// Ej:
// agregarProducto("Azucar", 5, 2);

// //Resultado esperado
// carrito = {
//     montoTotal: 20,
//     productos: ["Leche", "Azucar"]
// }


// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”




//  --------------------ejercicio 1 ------------------------LISTO!!!!!!!!!!!

// var i=1;
// var n=0;
// var string = " ";
// function piramide(j) {
//     for (n; n <= j; n++) {
//         for (i = 1; i <= n; i++) {
//             string += i + " ";        
//         };
//         string += ("\n");
//     }
//     console.log(string);
// }
// piramide(6)



// -----------------------ejercicio 2 -------------LISTO!!!!!!!!!!!!!!!!1

// const array1 = ["lapiz", "goma", "fibra", "boligrafo"];
// const array2 = ["carpeta", "hoja", "lapiz", "goma", "tijera"];

// function recibeArray (ar1, ar2){
//     const result = array1.filter(element => array2.includes(element));
//     console.log(result)
// }

// recibeArray(array1, array2);




// -----------------------ejercicio 3

let carrito = {
    montoTotal: 0,
    productos: []       
};

class Carritos {
    montoTotal;
    productos;

        constructor(montoInicial){
            this.montoTotal = 0;
            this.productos = [];
        };
        agregarProductos(producto){
            const newProducto =  this.productos.find(p => p.nombre == producto.nombre);
            if (newProducto) {
                console.log(`este producto ${producto.nombre} ya fue agregado`);
            }else {
            this.productos.push(producto);
            this.montoTotal += producto.precio;
            };
        };  
};

class Producto {
    nombre;
    precio;
    unidades;

        constructor(nombreInicial, precioInicial, unidadesInicial){
            this.nombre = nombreInicial,
            this.precio = precioInicial,
            this.unidades = unidadesInicial
        };
};

const Carrito1 = new Carritos (0);

function nuevoProducto (a, b, c) {
    let prod = new Producto(a, b ,c); 
    return prod;
};


Carrito1.agregarProductos(nuevoProducto("banana", 400, 20));
Carrito1.agregarProductos(nuevoProducto("leche", 300, 70));
Carrito1.agregarProductos(nuevoProducto("uvas", 200, 78));
Carrito1.agregarProductos(nuevoProducto("uvas", 100, 20));
Carrito1.agregarProductos(nuevoProducto("tomate", 150, 30));


console.log(Carrito1);
