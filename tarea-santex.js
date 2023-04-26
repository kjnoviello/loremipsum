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
