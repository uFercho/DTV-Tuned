$(document).ready(function() {

	function sendTuned(channel){
		/*$.ajax({
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
		});	*/
		$.ajax({
			cache    : true,
			dataType : 'jsonp',
			url      : "http://192.168.1.147:8080/tv/tune?major="+channel,
			type     : 'GET',
			success  : function(data, textStatus, jqXHR) {
				console.log(JSON.stringify(data) + " / " + textStatus + " / " + JSON.stringify(jqXHR));
				alert("Msg: "+data.status.msg+" / Canal: "+channel);
			},
			error	 : function(data, textStatus, jqXHR) {
				console.log(JSON.stringify(data) + " / " + textStatus + " / " + JSON.stringify(jqXHR));
				alert("Msg: "+data.status.msg+" / Canal: "+channel);
			}
		});
		
		/*var cadena = $.getJSON("http://192.168.1.147:8080/tv/tune?major="+channel, function (data) {
			console.log(data.status.msg);
			/*for (l in data.libros.lib) {
			   cad += ("<br />" + data.libros.lib[l].libro + " de " +
				   data.libros.lib[l].autores[0] + ", " +
				   data.libros.lib[l].autores[1] + " y " +
				   data.libros.lib[l].autores[2] + "<br />Editorial: " +
				   data.libros.lib[l].editorial +
				   "<br />").replace("y undefined", "").replace(", undefined", "");
			}
			$("#texto").html(cad);
		});*/
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
