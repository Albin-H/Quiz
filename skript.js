let nummer = 0;
function svar(){

let ett = document.querySelector("#quiz").fråga1.value;

if (ett == "Indier") {
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
		Fråga: "Vart är du om du bor i Kamtchakta"
	},
	{
		Fråga: "Hur lång är den Kinesiska muren?"
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

function ladda() {
	document.querySelector("#svar").innerHTML = "Fråga " + (nummer + 2);
	document.querySelector("#fraga").innerHTML = frågor[nummer].Fråga;
	nummer++;

	
}
function resultat(){

	if (nummer > 7) {
		document.querySelector("#avsluta").innerHTML += `<button class="svara"´>Kolla Svar</button> `;
		document.getElementById("knapp").style.visibility = "hidden";

	}
}
	