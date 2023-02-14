let clicks = 0;
function generate() {
	clicks += 1;

	if (clicks <= 3) {
		var date = ["Picnic in a car", "Road trip (destinacija neznana)", "<q>Fancy</q> večerja (oba se fejt zrihtava)", "Greva se kopat", "Bowling", "Kino (film po izbiri)", "Večerja doma (kuhaš ti, jaz ne znam)", "Skupni sprehod",
			"Učenje inštrumentov (kitara, bass, violina,...)", "Pridiii k meni :)", "Pridem k tebi :)", "Gledava Friendse (SKUPAJ V OBJEMI!!)", "Movie night (ne kino, domaaa!)", "kolesarjenjee (ges sicer neman biciklina... si sposoden)", "Come and lets just cuddle",
			"Kuhajva skuper (to raje kda de možost ka va samiva doma xD)", "Game night (špilava Uno, Človek ne jezi se, Twister,...)", "Kar koli ti poveš delava ;)", "Wee goooo shopping (tude če nič ne kupeva, čudno se obličeva pa poslikava)",
			"Sladki date (samo sladice dovoljene!)", "Sprehod z Max-om (fejst de vesele)", "Izlet v gore (leko tudi bole kakšni hrib)", "Worship/Bible time together", "Pijača/druženje s skupnimi prijatelji", "Počivajva skuper (nap&cuddle)",
			"Obiščeva mesto, ki ga še nesva(idk... Petanjci pa gledava Muro xD)", "Masaža date (masiranje obvezno za oba, ti leko malo duže)", "Ustvarjajva skupaj(riševa? Nevem to bole tvoje področje &#128513;)"];
		var rand_date = Math.floor(Math.random() * date.length);
		document.getElementById('result').innerHTML = "<h2>" + date[rand_date] + "</h2>";
	}
	else{
		swal({
			title: "OPOZORILOOOOOO",
			text: "Dovoljeni so samo trije poskusi!",
			icon: "warning",
			buttons: false
		});
	}
}