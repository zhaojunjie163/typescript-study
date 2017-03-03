class Greeter {

    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let isDone: boolean = false;
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
// boolean
let isDone: boolean = false;
// number
let age: number = 6;




//create a button in html
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);