//while loop
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
   console.log("color is printing " + colors[i]);
   i++;
}
console.log ("all colors are printed");


//for loop
const colors2 = ["yellow", "blue", "red", "orange"]; 
for (let i= 0; i < colors2.length; i++) {
   console.log ("color is printing " + colors2[i]);
}

console.log ("all colors are printed");

//nieuwe manier array forEach() gebruiken voor array = oproepen van elk element in een array in volgorde
const colors3 = ["yellow", "blue", "red", "orange"]; 
colors3.forEach ((element) => 
console.log ("color is printing " + element));


console.log ("all colors are printed");

/*vragen
1.Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
Mijn for loop is 3 regels, mijn while loop is 5 regels

2.Hoeveel regels neemt mijn forEach method in beslag?
ForEach method is (met een arrow function), 1 regel.

3.Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Een array method heeft een aantal voordelen:
// --> je kunt niet meer verstrikt raken in een infinite loop.
// --> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

4.Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const myColors = {
   colorWall: "blue",
   colorFruit: "orange",
   colorCar: "red",
   colorHair: "white",
   colorGras: "green",
 };
 
 for (x in myColors) {
   console.log(myColors[x]);
 }

// Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
// Array Methods zijn NIET beschikbaar op een object.

*/
