
	// var supportOutput = document.querySelector("#output");

	// if (typeof Storage !== undefined) {

	// 	supportOutput.innerHTML = "Twój plan się powiedzie - masz nasze wsparcie ;-)";
	// 	supportOutput.classList.add("alert-sucess");

	// 	window.onstorage = function(e) {

	// 		console.log(e);

	// 	};


	// 	// window.localStorage.setItem("imię", "Jan");

	// 	console.log(window.localStorage);

	// }else {

	// 	supportOutput.innerHTML = "Twój plan zawiedzie na całej linii - nikt Cię nie lubi :P";
	// 	supportOutput.classList.add("alert-danger");

	// }

	function FormSaver(form){
		this.form = form;
		this.fields = this.form.querySelectorAll("input[name]:not([type=submit])");
		this.formID = this.form.getAttribute("id");
		this.fieldsValues = {};

		this.addSavingToFields();
	}

	FormSaver.prototype.addSavingToFields = function(){

		for (var i = 0; i < this.fields.length; i++){
			this.fields[i].onchange = this.saveField.bind(this);
		}
	};

	FormSaver.prototype.saveField = function(e){

		var that = e.target;

		this.fieldsValues[that.getAttribute("name")] = that.value;

		this.saveToLocalStorage();
	};

	if ("localStorage" in window) {
		var formToSave = new FormSaver(document.querySelector("#form"));
	}

	FormSaver.prototype.saveToLocalStorage = function(){


		window.localStorage.setItem(this.formID, JSON.stringify(this.fieldsValues));

	};

	// var DB1 = new LocalDB("DB1");

	// var janek = {
	// 	firstName: "Jan",
	// 	lastName: "Kowalski",
	// 	age: 32
	// };

	// function save() {
	// 	localStorage.setItem(
	// 		document.forms.formularz.nazwisko.value ,
	// 		document.forms.formularz.pensja.value
	// 	);
	// }

	// DB1.save("janek", janek);

	// function read() {
	// 	document.forms.formularz.pensja.value = 									
	// 	localStorage.getItem( document.forms.formularz.nazwisko.value );
	// }

	// DB1.read("janek", janek);

	// function delete() {
	// 	document.forms.formularz.data.value = 									
	// 	localStorage.removeItem( document.forms.formularz.nazwisko.value );
	// }

	// DB1.delete("janek", jane);

	// function show() {
	// 	var content(); = "";
	// 	for(var key in localStorage)
	// 		content += ( key + ' ' + localStorage.getItem( key ) + 'rn' );
	// 	alert ( content );
	// }

	// DB1.show("janek", janek);







// Tworzona jest nowa instancja,
// w której należy zapamiętać nazwę "DB1"
//var DB1 = new LocalDB("DB1");

// Jakiś obiekt do zapisania
//var janek = {
//    firstName: "Jan",
//    lastName: "Kowalski",
//    age: 32
//};

// Na prototypie LocalDB znajdować się
// musi metoda save, która przyjmuje
// parę klucz-wartość, a wartość powinna
// być przed zapisaniem przepuszczona
// przez JSON.stringify
//DB1.save("janek", janek);

// Prototyp LocalDB powinien również
// posiadać metodę get, która odczyta
// podany klucz, przepuszczając wartość
// przez JSON.parse
//DB1.get("janek");

// Porada. Aby móżna było tworzyć bazy danych
// o różnych nazwach, przy zapisywaniu poszczególnych
// danych, do klucza dodawaj nazwę bazy danych,
// np. "DB1.janek"