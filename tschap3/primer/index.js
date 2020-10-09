let myObject = {
    greeting: "Hi, there",

    writeMessage(message){
        console.log(`${this.greeting}, ${message}`);
    }
}






function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}
greeting = "Hello";

myObject.writeMessage("It is sunny today");



writeMessage("It is sunny today");
writeMessage.call(global,"It is Sunny Today");

