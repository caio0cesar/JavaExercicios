const lista = ["goku", "piccolo", "chichi", "gohan"];

console.log(lista);

lista.push("bulma");

console.log(lista);

lista.pop();

console.log(lista);

lista.unshift("vegeta");

console.log(lista);

lista.shift();

console.log(lista);

console.log(lista.slice(2, 3));

lista.splice(1, 0, "trunks");

console.log(lista);

const nume = [0, 1, 2, 3];

console.log(nume);

const nume2 = nume.map((x) => x + 1);

console.log(nume2);

console.log(lista.filter((word) => word.length > 5));

const iniv = 5;
let ar1 = nume.reduce(
	(accumulator, currentVallue) => accumulator + currentVallue,
	iniv
);
console.log(ar1);

let ar2 = nume2.reduce(
	(accumulator, currentVallue) => accumulator + currentVallue
);

console.log(ar2);

const poder = [1000, 500, 2000, 800, "burro"];

const anime = lista.forEach((element, shampoo) => {
	console.log(`${element} ${poder[shampoo]}`);
});

let numbers = [5, 4, 7, 90, 87];

numbers.sort(function (a, b) {
	return a - b;
});

console.log(numbers);
