let Rätt = 1;
let nummer = 0;
let tal = 1;
let antal = 0;
function svar(){

let container = document.querySelector("#quiz").fråga.value;
tal ++;

	if (container == Rätt) {
		antal++;
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
	{
		Fråga: "Vill du se svar?"
	},

];

const svarsalternativ = [
	{
		alternativ: `<input type="radio" name="fråga" value="1">Mikronesien <br>
            <input type="radio" name="fråga" value="2">Sverige <br>
            <input type="radio" name="fråga" value="3">Vatikanstaten <br>
            <input type="radio" name="fråga" value="4">Lischtenstein <br>
          	<br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Tyskland <br>
            <input type="radio" name="fråga" value="2">Ryssland <br>
            <input type="radio" name="fråga" value="3">Slovakien <br>
            <input type="radio" name="fråga" value="4">Ungern <br>
          <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">En del av Nigeria<br>
            <input type="radio" name="fråga" value="2">En brittisk koloni<br>
            <input type="radio" name="fråga" value="3">En stor råtta<br>
            <input type="radio" name="fråga" value="4">En ö i stilla havet<br>
          <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="¨1">Lång <br>
            <input type="radio" name="fråga" value="2">Längre<br>
            <input type="radio" name="fråga" value="3">Väldigt lång<br>
            <input type="radio" name="fråga" value="4">Två varv runt jorden lång<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">I Sibirien<br>
            <input type="radio" name="fråga" value="2">I Burdusien<br>
            <input type="radio" name="fråga" value="3">I Galicien<br>
            <input type="radio" name="fråga" value="4">I Bessarabien<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Tyska<br>
            <input type="radio" name="fråga" value="2">Ryska<br>
            <input type="radio" name="fråga" value="3">Inuktitut<br>
            <input type="radio" name="fråga" value="4">Utomjordiska<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">I Eifel<br>
            <input type="radio" name="fråga" value="2">I tornedalen<br>
            <input type="radio" name="fråga" value="3">I Paris<br>
            <input type="radio" name="fråga" value="4">I Giza<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">I Rom<br>
            <input type="radio" name="fråga" value="2">I Håven<br>
            <input type="radio" name="fråga" value="3">I Louvren<br>
            <input type="radio" name="fråga" value="4">I Guds hus<br>
                      <br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="1">Norge<br>
            <input type="radio" name="fråga" value="1">Norge<br>
            <input type="radio" name="fråga" value="1">Norge<br>
            <input type="radio" name="fråga" value="1">Norge<br><br>`
	},
	{
		alternativ: `<input type="radio" name="fråga" value="´1">Ja<br>
			<input type="radio" name="fråga" value="2">Nej`
	},

];

const rättsvar = [
	{
		alternativ: "3"
	},
	{
		alternativ: "4"
	},
	{
		alternativ: "2"
	},
	{
		alternativ: "3"
	},
	{
		alternativ: "1"
	},
	{
		alternativ: "2"
	},
	{
		alternativ: "3"
	},
	{
		alternativ: "1"
	},
	{
		alternativ: "4"
	},
	{
		alternativ: "1"
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

	if (nummer > 8) {
		document.querySelector("#avsluta").innerHTML += `<button class="btn btn-success svara" onclick="rätta(); return false">Kolla Svar</button> `;
		document.getElementById("knapp").style.visibility = "hidden";

	}
}
function rätta(){
	document.getElementById("resultat").innerHTML = "Du fick " + antal + "/10 Poäng"; return false;
}
