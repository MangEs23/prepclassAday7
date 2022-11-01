const stuff = ["Meja", "Buku", "Topi", "Baju", "Kayu"];

stuff.splice(0, 0, "Handuk");
stuff.splice(stuff.length, 0, "Celana");

console.log(stuff);
