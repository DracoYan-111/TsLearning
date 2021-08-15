/**
 * tsc greeter.ts
 * 编译此段代码将得到一个js文件
 * 因为它包含了和输入文件中相同的JavsScript代码。
 * */
/*
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
*/

//-------------------- 类型注解---------------------

/**
 * TypeScript工具带来的高级功能
 * 给 person函数的参数添加: string类型注解
 * */

/*function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);*/

//-------------------- 接口 ---------------------

/**
 * 使用接口来描述一个拥有firstName和lastName字段的对象
 * 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的
 * 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，
 * 而不必明确地使用 implements语句。
 * */

/*
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user);
*/

//-------------------- 类 ---------------------

/**
 * TypeScript支持JavaScript的新特性
 * 比如支持基于类的面向对象编程。
 * 创建一个Student类，它带有一个构造函数和一些公共字段
 * 注意：
 * 类和接口可以一起共作，程序员可以自行决定抽象的级别。
 * 构造函数的参数上使用public等同于创建了同名的成员变量。
 * */

class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

//运行tsc greeter.ts，你会看到生成的JavaScript代码和原先的一样。
//TypeScript里的类只是JavaScript里常用的基于原型面向对象编程的简写。
