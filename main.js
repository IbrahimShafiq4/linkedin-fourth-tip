/* 
    Apply => i use to access a method inside an Object,
    takes two parameter (Object, [])

    Call => i use to access a method inside an Object,
    takes two parameter (Object, spreed operator)

    Bind => i use to access a method inside an Object and it will return function
    takes two parameter (Object, spreed operator)
*/

let grandFather = {
    firstName: 'Abd-Elshafy',
    secondName: 'Muhammad',

    getName(a, b, c, d) {
        return `hello ${this.firstName} ${this.secondName} ${a + b + c + d}`
    }
}

let father = {
    firstName: 'Shafiq',
    secondName: 'Abd-Elshafy'
}

let son = {
    firstName: 'Ibrahim',
    secondName: 'Shafiq'
}

console.log(grandFather.getName.apply(father, [1 , 2 , 3, 4]));

console.log(grandFather.getName.call(father, 1 , 2 , 3, 4));

let fun = grandFather.getName.bind(father, 1 , 2 , 3, 4);

console.log(fun());