$(document).ready(function() {

	var IP_Directv = "192.168.1.147"; // Colocar aqui la IP de tu DVR.
	
	function getTuned(){
		// Info de Canal
		$.ajax({
			cache    : true,
			dataType : 'jsonp',
			url      : "http://"+ IP_Directv +":8080/tv/getTuned", 
			type     : 'GET',
			success  : function(data, textStatus, jqXHR) {
				$( "#reload" ).hide( "fast" );
				$("#getTuned").html('<span class="help-block"><strong>Canal: </strong> ' + data.callsign + '</span> <span class="help-block"><strong>Num Canal: </strong> ' + data.major + '</span> <span class="help-block"><strong>Titulo: </strong> ' + data.title + '</span> <span class="help-block"><strong>Episodio: </strong> ' + data.episodeTitle + '</span> <span class="help-block"><strong>Rating: </strong> ' + data.rating + '</span> <span class="help-block"><strong>Duracion: </strong> ' + data.duration + ' Seg</span>');
				
			}
		});
	}
	
	function sendTuned(channel){
		// Cambio de Canal
		$.ajax({
			cache    : true,
			dataType : 'jsonp',
			url      : "http://"+ IP_Directv +":8080/tv/tune?major="+channel,
			type     : 'GET',
			success  : function(data, textStatus, jqXHR) {
				$("#getTuned").html('<div><img src="img/loader.gif"/></div>');
				$( "#reload" ).show( "fast" );
				setTimeout(function() {
					getTuned();
				}, 1000);
			}
		});
	}
	
	// Validación (Se puede mejorar mucho)
	function validChannel(channel){
		if (channel >=100 && channel < 2000) return true;
		else return false;
	}
	
	$( "#sendTuned" ).click(function() {
		if (validChannel($("#tuned").val())) sendTuned($( "#tuned" ).val());
		else alert("Ese Canal no existe");
	});
	
	$( "#reloadTuned" ).click(function() {
		// Recargo la página
		location.reload();
	});
	
	getTuned();
});
