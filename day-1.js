
/*
Foi bem difícil completar esse teste pois o desafio é feito com o Java como linguagem principal,
e o Java, ao contrário do JavaScript, possui o tipo de dados 'double'. Toda vez que submetia a
resposta ele até ficava como correto no teste geral, mas falhava no teste oculto,
porque a variável 'double' seria impressa no console como um número inteiro e não decimal. Da
forma que fizemos deu certo, utilizando o parseFloat() e o toFixed() para utilizar corretamente
as casas decimais.
*/


// Declare second integer, double, and String variables.
var a, b, c

// Read and save an integer, double, and String to your variables.
a = parseInt(readLine())
b = parseFloat(readLine())
c = readLine()


// Print the sum of both integer variables on a new line.
console.log(i + a)

// Print the sum of the double variables on a new line.
console.log((d + b).toFixed(1))

// Concatenate and print the String variables on a new line
console.log(s + c)

 // The 's' variable above should be printed first.

