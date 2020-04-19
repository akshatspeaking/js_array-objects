myPenguin.favoriteFoods = ["Vada Pav", "Fish Fry", "Ice Gola"];
console.log(myPenguin.favoriteFoods[1]);
firstFavFood = myPenguin.favoriteFoods[0];
(myPenguin.favoriteFoods).push("Misal Pav");
(myPenguin.favoriteFoods).length;
myPenguin.favoriteFoods[(myPenguin.favoriteFoods).length-1] = "Poha";
lastFavoriteFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
for (let food of myPenguin.favoriteFoods) {
console.log(food);
}