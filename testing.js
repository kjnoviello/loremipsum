class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    precio;         // Su precio
    categoria;      // Categoría a la que pertenece este producto
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;

        if (stock) {
            this.stock = stock;
        } else {
            this.stock = 10;
        }
    }
}

// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];


class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    constructor() {
        this.productos = [];
        this.categorias = [];
        this.precioTotal = 0;
    }
    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} ${sku}`);
        
        // Busco el producto en la "base de datos"
        const producto = await findProductBySku(sku);
        
        // me fijo si el producto ya existe
        const existeProducto = this.productos.find(item => item.sku === sku);
        
        // si existe solo le sumo la cantidad
        if (existeProducto) {
            existeProducto.cantidad += cantidad;

        // si no existe lo agrego y tambien la categoria.
        } else {
            const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
            this.productos.push(nuevoProducto);
            this.categorias.push(producto.categoria);
        // if (!this.categorias.includes(producto.categoria)) {
        //     this.categorias.push(producto.categoria);}
        };

        // se modifica el precio
        this.precioTotal = this.precioTotal + (producto.precio * cantidad);
    };

    // funcion eliminar producto
    async eliminarProducto(sku, cantidad) {
        console.log(`Eliminando ${cantidad} ${sku}`);

        // busco el producto en la "base de datos"
        const producto = await findProductBySku(sku);
        console.log("el producto encontrado a modificar es: ", producto);
        

        // me fijo si el producto ya existe-------------------------------------------
        const existeProducto = this.productos.find(item => item.sku === sku);
        console.log("cantidad del producto en el carrito: ", existeProducto.cantidad);
        console.log("cantidad del producto a eliminar: ", cantidad);
        
        // si la cantidad a eliminar es menor que lo que hay en el producto se modifica la cantidad
        if (existeProducto && existeProducto.cantidad > cantidad) {
            // const positionExisteProducto = this.productos.indexOf(existeProducto);
            // this.productos.splice(positionExisteProducto, 1);
            existeProducto.cantidad -= cantidad;
            console.log("cantidad del producto luego de modificarlo: ", existeProducto.cantidad);
            
        // si la cantidad a eliminar es mayor o igual que lo que hay en el producto se elimina el producto y la categoria
        } else if (existeProducto && existeProducto.cantidad <= cantidad){
            const positionExisteProducto = this.productos.indexOf(existeProducto);
            this.productos.splice(positionExisteProducto, 1);

            console.log("categorias antes de eliminar el producto: ", this.categorias);
            const positionExisteCategoria = this.categorias.indexOf(producto.categoria);
            this.categorias.splice(positionExisteCategoria, 1);
            console.log("categorias luego de eliminar todas las unidades del producto: ", this.categorias);


        // si no hay producto en el carrito
        } else {
            console.log("no hay tal producto");
        }

        // se modifica el precio
        this.precioTotal = this.precioTotal - (producto.precio * cantidad);
        console.log("El carrito despues de eliminar el producto queda conformado por: ", carrito.productos,);
        console.log("el precio total en el carrito es de: ", carrito.precioTotal);
    };
};

class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

function findProductBySku(sku) {                                  // Función que busca un producto por su sku en "la base de datos"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
}

const carrito = new Carrito();
console.log("el carrito inicial esta conformado por: ", carrito);
carrito.agregarProducto('KS944RUR', 2);
carrito.agregarProducto('XX92LKI', 5);
carrito.agregarProducto('WE328NJ', 1);
carrito.agregarProducto('XX92LKI', 3);



// al eliminar un producto lo puse dentro de un timeout para simular que primero se agrega y despues se elimina
setTimeout(() => {
    console.log("el carrito antes de modificarse esta conformado por: ", carrito);
    carrito.eliminarProducto('XX92LKI', 2);
}, 2000);



