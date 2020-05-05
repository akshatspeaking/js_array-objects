var gunter = {
   name: "Gunter",
   origin: "Adventure Time",
   canFly: false,
   sayHello: function () {
     console.log("QUACK!!!");
   }
 };
 
 var ramon = {
   name: "Ramón",
   origin: "Happy Feet",
   canFly: true,
   sayHello: function () {
     console.log("Estoy encantado de conocerle.");
   }
 };
 
 var fred = {
   name: "Fred",
   origin: "Sitting Ducks",
   canFly: false,
   sayHello: function () {
     console.log("Hi there!");
   }
 };

 let penguins = [gunter, ramon, fred];

 console.log(penguins[0]);

 let secondPenguin = penguins[1];

 console.log(penguins[penguins.length-1]);

 let myPenguin = {name: "Duke", origin: "Boner's Ark", creator: "Mort Walker"};
 penguins.push(myPenguin);

 console.log(penguins.length);

 penguins[0].canFly = true;

 sayHello(penguins[0]);

 for (let penguin of penguins) {
    console.log(penguin.name);
 }

 for (let penguin of penguins) {
    sayHello(penguin);
 }

 for (let penguin of penguins) {
    penguin.numberOfFeet = 2;
 }

 for (let penguin of penguins) {
    if (penguin.canFly == true) {
      console.log(penguin.name + " can fly!");
    }
 }


