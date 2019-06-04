// const person = {
//     name: 'xxxxx',
//     age: 30
// }
// module.exports = person

// 对上面的代码进行es6改造

// Module Wrapper Function

// (function (exports, require, module, __filename, __dirname) {

// })

console.log(__dirname, __filename);

class Person {https://github.com/ys558/Node-crash-course
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`my name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person
