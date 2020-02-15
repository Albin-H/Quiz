let Rätt = 1;
let nummer = 0;
let tal = 1;
function svar(){

let container = document.querySelector("#quiz").tal.value;
tal ++;

	if (container == Rätt) {
		document.querySelector("#resultat").innerHTML += "Rätt!!";
	}
}

const frågor = [
	{
		Fråga: "Vilket är världens minsta land ?"
	},
	{
		Fråga: "Vilket land gränsar inte till Polen?"
	},
	{
		Fråga: "Vad är Monsterrat?"
	},
	{
		Fråga: "Hur lång är den Kinesiska muren?"
	},
	{
		Fråga: "Vart är du om du bor i Kamtchakta"
	},
	{
		Fråga: "Vilket språk talar man i Irkutsk"
	},
	{
		Fråga: "Om Gizapyramiden ligger i Giza var ligger då Eifeltornet."
	},
	{
		Fråga: "Var bor Påven"
	},
	{
		Fråga: "Vilket är världens sämsta land"
	},

];

const svarsalternativ = [
	{
		alternativ: `<input type="radio" name="2" value="1">Mikronesien <br>
            <input type="radio" name="2" value="2">Sverige <br>
            <input type="radio" name="2" value="3">Vatikanstaten <br>
            <input type="radio" name="2" value="4">Lischtenstein <br>
          	<br>`
	},
	{
		alternativ: `<input type="radio" name="3" value="Mikronesien">Tyskland <br>
            <input type="radio" name="3" value="Sverige">Ryssland <br>
            <input type="radio" name="3" value="Vatikanstaten">Slovakien <br>
            <input type="radio" name="3" value="Lischtenstein">Ungern <br>
          <br>`
	},
	{
		alternativ: `<input type="radio" name="4" value="Nigerien">En del av Nigeria<br>
            <input type="radio" name="4" value="Koloni">En brittisk koloni<br>
            <input type="radio" name="4" value="Råtta">En stor råtta<br>
            <input type="radio" name="4" value="ö">En ö i stilla havet<br>
          <br>`
	},
	{
		alternativ: `<input type="radio" name="5" value="Lång">Lång <br>
            <input type="radio" name="5" value="Längre">Längre<br>
            <input type="radio" name="5" value="Väldigt">Väldigt lång<br>
            <input type="radio" name="5" value="Varv">Två varv runt jorden lång<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="6" value="Sibirien">I Sibirien<br>
            <input type="radio" name="6" value="Burdusien">I Burdusien<br>
            <input type="radio" name="6" value="Galicien">I Galicien<br>
            <input type="radio" name="6" value="Bessarabien">I Bessarabien<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="7" value="Tyska">Tyska<br>
            <input type="radio" name="7" value="Ryska">Ryska<br>
            <input type="radio" name="7" value="Inuktitut">Inuktitut<br>
            <input type="radio" name="7" value="Utomjordiska">Utomjordiska<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="8" value="Eifel">I Eifel<br>
            <input type="radio" name="8" value="Torn">I tornedalen<br>
            <input type="radio" name="8" value="Paris">I Paris<br>
            <input type="radio" name="8" value="Giza">I Giza<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="9" value="Rom">I Rom<br>
            <input type="radio" name="9" value="Håven">I Håven<br>
            <input type="radio" name="9" value="Louvren">I Louvren<br>
            <input type="radio" name="9" value="Kyrkan">I Guds hus<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="10" value="Danmark">Danmark<br>
            <input type="radio" name="10" value="Danmark">Danmark<br>
            <input type="radio" name="10" value="Danmark">Danmark<br>
            <input type="radio" name="10" value="Norge">Norge<br>`
	},

];

const rättsvar = [
	{
		alternativ: "3"
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
	{
		alternativ: ""
	},
];

function ladda() {
	document.querySelector("#svar").innerHTML = "Fråga " + (nummer + 2);
	document.querySelector("#fraga").innerHTML = frågor[nummer].Fråga;
	document.querySelector("#alternativ").innerHTML = svarsalternativ[nummer].alternativ;
	Rätt = rättsvar[nummer].alternativ;
	nummer++;

	
}
function resultat(){

	if (nummer > 7) {
		document.querySelector("#avsluta").innerHTML += `<button class="svara"´>Kolla Svar</button> `;
		document.getElementById("knapp").style.visibility = "hidden";

	}
}
	