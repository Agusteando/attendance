function callGoogleScript() {

	var url = "https://script.google.com/macros/s/AKfycbzk1AhV8XyG3mvnZJAN4XCpQZiMVEDe8jv-H0Hr81iBJzdm73Zm/exec?callback=iniciar&fetch=";
	var val = "fetch";


	var request = jQuery.ajax({
		crossDomain: true,
		url: url + encodeURIComponent(val),
		method: "GET",
		dataType: "jsonp"
	});

}



function count(e) {
	var total = 0;
	for (i = 0; i < e.length; i++) {
		total += e[i].length;
	}

	return total;
}

function iniciar(e) {

	var data = e.result;
	var grupos = e.grupos;
	var grupos2 = e.grupos2;
	if (data.length === 0) {
		alert("Verifica que estes conectado al WI-FI correcto");
	}
	console.log(data);
	var rainbow = new Rainbow();
	rainbow.setSpectrum('#FFA07A','#CD5C5C');
	rainbow.setNumberRange(0, grupos2.length);

	for (i = 0; i < grupos2.length; i++) {
		var number = Math.floor(Math.random() * 100);
		var color = rainbow.colourAt(i);


		var navbar = document.getElementById('gpos');
		var gpo = document.createElement('button');
		gpo.id = grupos[i];
		gpo.className = "btn tab";
		gpo.innerHTML = grupos2[i];
		gpo.style.backgroundColor = '#' + color;
		navbar.appendChild(gpo);
	}

		for (i=0; i<grupos.length; i++) {
	Select = document.getElementById('docente');
Select.options[Select.options.length] = new Option(grupos2[i], grupos2[i]);
		}
	
	for (i=0; i<grupos.length; i++) {
		indice[grupos[i]] = i;
	}
	
	for (i=0; i<grupos.length; i++) {
			ASIS.push([]);
			AUSE.push([]);
	}

	var h = 0;
	try {
		for (i = 0; i < grupos.length; i++) {

			var obj = data[grupos[i]];

			var names = Object.keys(obj)

			for (j in obj) {
				var keys = Object.keys(obj[j])
				var clase = document.createElement('div');
				clase.style.display = "none";
				clase.className = 'ss hidden btn ausente ' + obj[j].gender + ' ' + grupos[i];
				clase.innerHTML = names[h];
				var container = document.getElementById('wrapper');
				container.appendChild(clase);
				h++
			}
			var h = 0;
		}
	} finally {
		for (i = 0; i < grupos.length; i++) {
			$('.' + grupos[i]).each(function () {
				var ss = $(this).text();
				AUSE[i].push(ss);
			});
		}
		console.log(AUSE);
	}
}


function redPlz() {
	var rainbow = new Rainbow();
	rainbow.setSpectrum('#f02a2a', '#ea5353');

	$('.ausente').each(function () {
		var number = Math.floor(Math.random() * 100);
		rainbow.colourAt(number);
		var color = rainbow.colourAt(number)
		$(this).css('background-color', "#" + color);
	});
}

function gaslive() {
	var url = "https://script.google.com/macros/s/AKfycbzk1AhV8XyG3mvnZJAN4XCpQZiMVEDe8jv-H0Hr81iBJzdm73Zm/exec?callback=fetchit&name=";
	var name = "go";
	var request = jQuery.ajax({
		crossDomain: true,
		url: url + encodeURIComponent(name),
		method: "GET",
		dataType: "jsonp"
	});

}


function fetchit(e) {
	var arr = [];
	var data = e.result;
	for (i = 0; i < data.length; i++) {
		arr.push("<li>" + data[i] + " ya pasó lista!</li>");
	}
	var string = arr
	console.log(string);
	$('#view').html(string);
}