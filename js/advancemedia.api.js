$(document).ready(function() {

	function sendTuned(channel){
		$.ajax({
			cache    : true,
			dataType : 'jsonp',
			url      : "http://10.1.42.213:8080/tv/tune?major="+channel,
			type     : 'GET',
			success  : function(data, textStatus, jqXHR) {
				console.log(JSON.stringify(data) + " / " + textStatus + " / " + JSON.stringify(jqXHR));
			}
		});	
		$.ajax({
			cache    : true,
			dataType : 'jsonp',
			url      : "http://10.1.42.206:8080/tv/tune?major="+channel,
			type     : 'GET',
			success  : function(data, textStatus, jqXHR) {
				console.log(JSON.stringify(data) + " / " + textStatus + " / " + JSON.stringify(jqXHR));
			}
		});	
	}
	
	function validChannel(channel){
		if (channel >=100 && channel < 2000) return true;
		else return false;
	}
	
	$( "#sendTuned" ).click(function() {
	
		if (validChannel($("#tuned").val())) sendTuned($( "#tuned" ).val());
		else alert("Ese Canal no existe");
	});
	
	$( "#espn" ).click(function() {
		sendTuned("620");
	});
	
	$( "#espn2" ).click(function() {
	  sendTuned("624");
	});
	$( "#espn3" ).click(function() {
	  sendTuned("626");
	});
	$( "#fox" ).click(function() {
	  sendTuned("606");
	});
	$( "#fox2" ).click(function() {
	  sendTuned("608");
	});
	$( "#fox3" ).click(function() {
	  sendTuned("609");
	});
	
});
