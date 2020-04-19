myPenguin = { name: "Duke", origin: "Boner's Ark", creator: "Mort Walker" }

myPenguin.outfit = {
   hat: "baseball hat",
   shirt: "Hawaiian shirt",
   pants: "cargo pants",
   shoes: "flip-flops"
}

let penguinHatType = myPenguin.outfit.hat

console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";

myPenguin.outfit.accessory = "top hat";

delete myPenguin.outfit.pants;

for (let item in myPenguin.outfit) {
   console.log(myPenguin.outfit.item);
}