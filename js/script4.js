
$(document).ready(function() {

setInterval(function(){
  var ifConnected = window.navigator.onLine;
    if (ifConnected) {
      document.getElementById("checkOnline").innerHTML = "CONECTADO";
      document.getElementById("checkOnline").style.color = "green";
	  $('#sub').prop("disabled", false);
	$('#reload').prop("disabled", false);
	$('#checkOnline').removeClass('btn btn-outline-danger');
	$('#checkOnline').addClass('btn btn-outline-success');
    } else {
      document.getElementById("checkOnline").innerHTML = "DESCONECTADO";
      document.getElementById("checkOnline").style.color = "red";
	  $('#sub').prop("disabled", true);	 
	  $('#reload').show();
	  $('#reload').prop("disabled", true);	  
	  	$('#checkOnline').removeClass('btn btn-outline-success');
	  $('#checkOnline').addClass('btn btn-outline-danger');
    }
 }, 3000);
 

});