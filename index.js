alert("Bienvenido a la calculadora online!");

let opcion = prompt("Escriba la operacion que desea: sumar, restar, dividir, multiplicar, para salir escriba ESC");

while (opcion != "ESC") {

if (opcion == "sumar") {
    // Pedir dos números enteros por teclado
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    // Calcular la suma de los dos números
    let suma = num1 + num2;
    // Mostrar el resultado de la suma
    alert("La suma de los dos números es " + suma);
}
else if (opcion == "restar") {
    // Pedir dos números enteros por teclado
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    // Calcular la resta de los dos números
    let resta = num1 - num2;
    // Mostrar el resultado de la resta
    alert("La resta de los dos números es " + resta);
}
else if (opcion == "dividir") {
    // Pedir dos números enteros por teclado
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    // Calcular la resta de los dos números
    let division = num1 / num2;
    // Mostrar el resultado de la resta
    alert("La division de los dos números es " + division);
}
else if (opcion == "multiplicar") {
    // Pedir dos números enteros por teclado
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    // Calcular la resta de los dos números
    let multiplicacion = num1 * num2;
    // Mostrar el resultado de la resta
    alert("La multiplicacion de los dos números es " + multiplicacion);
}
else {
    alert("No ingreso una opcion correctamente");
}

let opcion = prompt("Escriba la operacion que desea: sumar, restar, dividir, multiplicar, para salir escriba ESC");

}

alert("Vuelva pronto!");

