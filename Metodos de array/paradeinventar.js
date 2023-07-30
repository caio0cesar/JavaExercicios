const dbz = [
	"goku",
	"vegeta",
	7777,
	"chichi",
	9000,
	"kuririn",
	"yancha",
	18,
	9999999,
];

console.log(dbz);

let pers = dbz.filter((element) => {
	if (typeof element === "string") return element;
});

console.log(pers);

let power = dbz.filter((element) => {
	if (typeof element === "number") return element;
});

console.log(power);

power.sort(function (a, b) {
	return a - b;
});

console.log(power);

pers.forEach((element, index) => {
	switch (element) {
		case "goku":
			console.log(`${element} is over ${power[2]}`);
			break;
		case "vegeta":
			console.log(`${element} ${power[1]} meu coração é pura maldade`);
			break;
		case "chichi":
			console.log(`${element} ${power[3]} (não sei colocar o 8 deitado)`);
			break;
		case "kuririn":
			console.log(`${element} morreu, mas pegou a ${power[0]}`);
			break;
		default:
			console.log(`${element} derrotado`);
	}
});
