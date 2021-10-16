var colors = ["yellow", "blue", "red", "orange"];
while (4 < colors.length) {
   colors++;
}

console.log ("color is printing " + colors);
console.log ("all colors are printed");

var colors2 = ["yellow", "blue", "red", "orange"]; 
for (var i= 0; i < colors2.length; i++) {
   console.log ("color is printing", colors2[i]);
}

console.log ("all colors are printed");

//forEach() gebruiken voor array = oproepen van elk element in een array in volgorde
var colors3 = ["yellow", "blue", "red", "orange"]; 
colors3.forEach ((element) => {
console.log ("color is printing", element);
});

console.log ("all colors are printed");

/*vragen
1.Hoeveel regels neemt mijn for loop en mijn while loop in beslag?

2.Hoeveel regels neemt mijn forEach method in beslag?

3.Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?

4.Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/