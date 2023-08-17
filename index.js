alert("Bienvenido al carrito de compras de Florentina")

const yerba1 = 1500;
const yerba2 = 1500;
const yerba3 = 1500;
const yerba4 = 1500;

let compra = prompt("Ingrese el producto que desea comprar *yerba1: Yerba manzanilla *yerba2: Yerba citrus *yerba3: Yerba chocolate *yerba4: Yerba menta. Si no desea comprar responda Salir");

let totalcompra = 0
while (compra != "Salir") {

    if (compra == "yerba1") {
        totalcompra = totalcompra + yerba1
        console.log("El carrito sumo:" + totalcompra)
    }
    if (compra == "yerba2") {
        totalcompra = totalcompra + yerba2
        console.log("El carrito sumo:" + totalcompra)
    }
    if (compra == "yerba3") {
        totalcompra = totalcompra + yerba3
        console.log("El carrito sumo:" + totalcompra)
    }
    if (compra == "yerba4") {
        totalcompra = totalcompra + yerba4
        console.log("El carrito sumo:" + totalcompra)
    }

    let respuesta = prompt("El carrito tiene un total de= $" + totalcompra + ". Desea seguir comprando? Si - No")

    if (respuesta == "Si") {
        compra = prompt("Ingrese el producto que desea comprar *yerba1: Yerba manzanilla *yerba2: Yerba citrus *yerba3: Yerba chocolate *yerba4: Yerba menta");
    } else if (respuesta == "No") {
        alert("Pagar= " + totalcompra)
    }
}