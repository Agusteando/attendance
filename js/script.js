var ASIS = [];
var AUSE = [];
var grupos = [];
var indice = {};


$(document).ready(function() {


callGoogleScript();



$('#share').click(function() {
	$('#qcode').toggle();
});
	
$('#all').click(function() {
	
	var theName = $('.active').text();

	var place = "_"+$('.active').text();
	$('.'+place).each(function() {
	$(this).toggleClass('ausente');
	var value = $(this).text();
	

	
if ($(this).hasClass('ausente')) {
	
						
						AUSE[indice[place]].push(value);
						
						var index = $.inArray(value, ASIS[indice[place]]);			
						ASIS[indice[place]].splice(index,1);
																							
} else {
						
						
						ASIS[indice[place]].push(value);
						
						var index = $.inArray(value, AUSE[indice[place]]);			
						AUSE[indice[place]].splice(index,1);
				
}
});	
var resp = $('#docente').val();
if (resp === "aux") {
			$('#asistencias').val([JSON.stringify(ASIS)]);
			$('#ausencias').val([JSON.stringify(AUSE)]);
			$('#asistenciasTotal').val(count(ASIS));
			$('#ausenciasTotal').val(count(AUSE));
} else {			
			$('#asistencias').val([JSON.stringify(ASIS[indice[place]])]);
			$('#ausencias').val([JSON.stringify(AUSE[indice[place]])]);
			$('#asistenciasTotal').val(ASIS[indice[place]].length);
			$('#ausenciasTotal').val(AUSE[indice[place]].length);
}			
/*
			console.log('//');
			console.log('ASISTENCIA : '+ASIS[indice[place]]);
			console.log('AUSENTISMO : '+AUSE[indice[place]]); */
});


$('#docente').change(function () {
	
	var resp = $('#docente').val();
	$('#rol').val(resp);
	
	$( "input:checkbox" ).prop('checked', false);
	var theName = $(this).val();
	$('._'+theName).show();
	$('.ss').not('._'+theName).hide();
	$('.input').val("");
if (theName === "aux") { $('.tab').slideDown(); } else {	
	$('#_'+theName+'.tab').addClass('active');
	$('.tab').not('#_'+theName+'.tab').removeClass('active');
	$('.tab').hide();
}
	$('.input').val('');
	$('.ind').val('');

});




$(document).on('click','.tab',function() {

	
$( "input:checkbox" ).prop('checked', false);
var t = $('#docente').val();
	$(this).addClass('active');
	$('.tab').not(this).removeClass('active');
	var theName = $('.active').text();
	$('._'+theName).show();
	$('.ss').not('._'+theName).hide();
	
	var place = "_"+theName;
	
	if (t === "aux") {
	
	} else {
	$('#docente').val(theName);
	$('.input').val('');
	$('.ind').val('');
	$('.tab').hide();
	}

var resp = $('#docente').val();
if (resp === "aux") {
		
			$('#asistencias').val([JSON.stringify(ASIS)]);
			$('#ausencias').val([JSON.stringify(AUSE)]);
			$('#asistenciasTotal').val(count(ASIS));
			$('#ausenciasTotal').val(count(AUSE));
} else {

			$('#asistencias').val([JSON.stringify(ASIS[indice[place]])]);
			$('#ausencias').val([JSON.stringify(AUSE[indice[place]])]);
			$('#asistenciasTotal').val(ASIS[indice[place]].length);
			$('#ausenciasTotal').val(AUSE[indice[place]].length);
}	
	
	});

$('body').on('click','.ss',function() {
	var theName = $(this).text();
	var place = "_"+$('.active').text();
	$(this).toggleClass('ausente');
	
if ($(this).hasClass('ausente')) {
	
			
						AUSE[indice[place]].push(theName);
						var index = $.inArray(theName, ASIS[indice[place]]);			
						ASIS[indice[place]].splice(index,1);
																							
} else {
						ASIS[indice[place]].push(theName);

						var index = $.inArray(theName, AUSE[indice[place]]);			
						AUSE[indice[place]].splice(index,1);
				
}
var resp = $('#docente').val();
if (resp === "aux") {

			$('#asistencias').val([JSON.stringify(ASIS)]);
			$('#ausencias').val([JSON.stringify(AUSE)]);
			$('#asistenciasTotal').val(count(ASIS));
			$('#ausenciasTotal').val(count(AUSE));
} else {			
			$('#asistencias').val([JSON.stringify(ASIS[indice[place]])]);
			$('#ausencias').val([JSON.stringify(AUSE[indice[place]])]);
			$('#asistenciasTotal').val(ASIS[indice[place]].length);
			$('#ausenciasTotal').val(AUSE[indice[place]].length);
}			
/*
			console.log('//');
			console.log('ASISTENCIA : '+ASIS[indice[place]]);
			console.log('AUSENTISMO : '+AUSE[indice[place]]);
	*/		
			
			
});

	
for (i=0; i<grupos.length; i++) {
	ASIS.push([]);
}
for (i=0; i<grupos.length; i++) {
	AUSE.push([]);
}



});