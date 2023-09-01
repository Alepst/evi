alert("Esta es una ventana emergente con mensaje opcional");
//Ventana con respuesta múltiple
var resultado = confirm('Estás seguro que quieres terminar?, da Apetar');
if (resultado === true){
    alert('Okay, si estas seguro.')
} else{
    alert('Pareces indeciso')
}
//Pregunta cuántos años tienes y despliega si eres mayor o menor de edad
var edad = prompt('Cuántos años tienes?')
if (edad > 17){
    alert('Ya eres mayor de edad')
} else{
    alert('Eres menor de edad')
}

//Ejemplo 1 del document.write
alert("Cargando el contenido nuevo")
document.write("<h1>Quita el contenido viejo-Agrega el contenido nuevo!</h1>")

//Ejemplo 2 del document.write
var a = "Hola"
b = "mundo"
document.write("El valor de a es: " +a)
document.write("<br>")
document.write("El valor de b es: "+b)
document.write("<p>El signo '+' sirve para concatenar cadenas de texto</p>")

//Ejemplo pag 26
document.write("<h1>Tipo de datos</h1>")
var age=30
let name = "Juan"
const pi = "3.141592"
document.write(age+"<br>")
document.write(name+"<br>")
document.write(pi)

