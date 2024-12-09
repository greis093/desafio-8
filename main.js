import "./style.css";
//1.Crear variable
let persona = {
  nombre: "Yirley",
  apellido: "Agreda",
  edad: 22,
  pais: "Perú",
  conocimiento: ["idiomas", "programación", "cocina"],
};
console.log(
  persona.nombre,
  persona.apellido,
  persona.edad,
  persona.pais,
  persona.conocimiento
);

persona.edad = 30;
persona.conocimiento.pop = "SEO";

console.log(
  persona.nombre,
  persona.apellido,
  persona.edad,
  persona.pais,
  persona.conocimiento
);

//2.Creando variables
let arrayVariables = {
  marca: "Dior",
  velocidad: "20 k/m",
  stock: "20",
  modelos: ["A", "B", "C"],
};
console.log(
  "La marca ",
  arrayVariables.marca,
  " tiene un stock de ",
  arrayVariables.stock,
  " en los modelos ",
  arrayVariables.modelos,
  " unidades, la tienda se encuentra a ",
  arrayVariables.velocidad
);

//3. Limite de velocidad
var velocidad = prompt("Ingrese la velocidad km/h");
function velocidadKmxH(velocid) {
  //validamos que no sea un dato vacio
  while (velocid.trim() === "") {
    //Cuando no ingresa datos, solicita datos
    velocid = prompt("ingrese sueldo.");
  }
  if (velocid <= 60) {
    return console.log(`${velocid}Km/h ¡Todo va bien!`);
  }
  return console.log(`${velocid}Km/h ¡Baja la velocidad!`);
}
velocidadKmxH(velocidad);

//4. Condicional de sueldos
var sueldo = prompt("Ingrese su sueldo $");
//funcion de sueldos
function sueld(ingreso) {
  //validamos que no sea un dato vacio
  while (ingreso.trim() === "") {
    //Cuando no ingresa datos, solicita datos
    ingreso = prompt("ingrese sueldo.");
  }
  if (ingreso <= 40000) {
    console.log(`El sueldo ${ingreso} ¡Es bajo!`);
    return alert(`El sueldo ${ingreso} ¡Es bajo!`);
  }
  if (ingreso <= 60000) {
    console.log(`El sueldo ${ingreso} ¡Es bueno!`);
    return alert(`El sueldo ${ingreso} ¡Es bueno!`);
  }
  if (ingreso <= 80000) {
    console.log(`El sueldo ${ingreso} ¡Es muy bueno!`);
    return alert(`El sueldo ${ingreso} ¡Es muy bueno!`);
  }
  if (ingreso <= 80000) {
    console.log(`El sueldo ${ingreso} ¡Es muy bueno!`);
    return alert(`El sueldo ${ingreso} ¡Es muy bueno!`);
  }
  if (ingreso === 100000) {
    console.log(`El sueldo ${ingreso} ¡Es Excelente!`);
    return alert(`El sueldo ${ingreso} ¡Es Excelente!`);
  }
}
sueld(sueldo);

//5.Ingresa fecha de nacimiento del usuario
var fechaNacimiento = prompt(
  "ingrese su fecha de nacimiento en formato YYYY-MM-DD:"
);
function edad(age) {
  //validamos que no sea un dato vacio
  while (age.trim() === "") {
    //Cuando no ingresa datos, solicita datos
    age = prompt("ingrese un numero.");
  }
  //validamos fecha actual
  const hoy = new Date();
  //validamos fecha de nacimiento
  const nacimiento = new Date(fechaNacimiento);
  //Validamos fechas
  const edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  const date = hoy.getDate() - nacimiento.getDate();

  if (edad < 0) {
    console.log("La fecha indica que usted no ha nacido");
    return alert("La fecha indica que usted no ha nacido");
  }
  if (mes < 0) {
    // Verificar si aún no ha llegado el cumpleaños este año
    console.log(`Tienes ${edad - 1} años.`);
    return alert(`Tienes ${edad - 1} años.`);
  }
  if (date < 0) {
    // Verificar si aún no ha llegado el cumpleaños este año
    console.log(`Tienes ${edad - 1} años.`);
    return alert(`Tienes ${edad - 1} años.`);
  }
  console.log(`Tienes ${edad} años.`);
  return alert(`Tienes ${edad} años.`);
}

edad(fechaNacimiento);

//6.Numero entero multiplicarlo del 1 al 10
var numeroB = prompt("ingrese un numero y para multiplicarlo: 1 al 10");
function multiplicar(num) {
  //validamos que no sea un dato vacio
  while (num.trim() === "") {
    //Cuando no ingresa datos, solicita datos
    num = prompt("ingrese un numero.");
  }
  //validamos que ingrese una letra
  num = Number(num);
  if (isNaN(num)) {
    //Cuando el usuario ingresa letras
    console.log("No ingreso un número.");
    return alert("No ingreso un número.");
  }
  //Validamos que sea un numero entero
  if (!isNaN(num)) {
    if (num % 1 !== 0) {
      console.log(num, " Es un número decimal.");
      return alert(num + " Es un número decimal.");
    }
    {
      for (let i = 1; i <= 10; i++) {
        console.log(num, "x", i, "=", num * i);
      }
      console.log(num, " Es un número entero.");
      return alert(num + " Es un número entero.");
    }
  }
}
multiplicar(numeroB);

//7.Numero par o impar
var numero1 = prompt("ingrese un numero validar si es Par o Impar");
function parImpar(numero) {
  //validamos que no sea un dato vacio
  while (numero.trim() === "") {
    //Cuando no ingresa datos, solicita datos
    numero = prompt("ingrese un numero");
  }
  //validamos que ingrese una letra
  numero = Number(numero);
  if (isNaN(numero)) {
    //Cuando el usuario ingresa letras
    console.log("No ingreso un número");
    return alert("No ingreso un número");
  }
  //validamos que es numero par o impar
  if (numero % 2 == 0) {
    //Valida que el numero sea par
    console.log(numero, " Es un número par");
    return alert(numero + " Es un número par");
  } //si no es par es impar
  console.log(numero, " Es número impar");
  return alert(numero + " Es número impar");
}
parImpar(numero1);
