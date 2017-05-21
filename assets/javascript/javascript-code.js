$(document).ready(function(){
	var floorPlanet = 1;
	var ceilingPlanet = 15;
	var floorGenerator = 20;
	var ceilingGenerator = 50;
	var wins = 0;
	var losses = 0;


	function randos(){

		function reset(){
			randomNumber = Math.floor(Math.random() * ceilingGenerator + floorGenerator);
			$("#random-generated-number").html( "Random Number Generated: " + randomNumber );
			// This generates the random number for the planets
			$("#mercuryHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
			$("#venusHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
			$("#earthHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
			$("#marsHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
		}

		var randomNumber = Math.floor(Math.random() * ceilingGenerator + floorGenerator);
		$("#random-generated-number").html( "Random Number Generated: " + randomNumber );
		$("#mercuryHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
		$("#venusHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
		$("#earthHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );
		$("#marsHidden").val( Math.floor(Math.random() * ceilingPlanet + floorPlanet) );

		$("#mercury-planet").click(function() {
			var count = parseInt($("#counter").val());
			count += parseInt($("#mercuryHidden").val());
			$("#counter").val(count);
			if($("#counter").val() >= randomNumber && $("#counter").val() <= randomNumber){
				wins++;//------------------------------------------
				$("#wins").html = "Wins: " + wins;
				$("#counter").val(0);
				var winCount = parseInt($("#winCounter").val());
				winCount += parseInt($("#mercuryHidden").val());
				$("#winCounter").val(wins);
				alert("You won the game!!");//------------------------------------------
				reset();
			}
			else if($("#counter").val() > randomNumber){
				losses++;
				$("#losses").html = "Losses: " + losses;
				$("#counter").val(0);
				var lossCount = parseInt($("#lossCounter").val());
				lossCount += parseInt($("#mercuryHidden").val());
				$("#lossCounter").val(losses);
				alert("You lost the game!!");
				reset();
			}
		})

		$("#venus-planet").click(function() {
			var count = parseInt($("#counter").val());
			count += parseInt($("#venusHidden").val());
			$("#counter").val(count);
			if($("#counter").val() >= randomNumber && $("#counter").val() <= randomNumber){
				wins++;
				$("#wins").html = "Wins: " + wins;
				$("#counter").val(0);
				var winCount = parseInt($("#winCounter").val());
				winCount += parseInt($("#venusHidden").val());
				$("#winCounter").val(wins);
				alert("You won the game!!");
				reset();
			}
			else if($("#counter").val() > randomNumber){
				losses++;
				$("#losses").html = "Losses: " + losses;
				$("#counter").val(0);
				var lossCount = parseInt($("#lossCounter").val());
				lossCount += parseInt($("#venusHidden").val());
				$("#lossCounter").val(losses);
				alert("You lost the game!!");
				reset();
			}
		})

		$("#earth-planet").click(function() {
			var count = parseInt($("#counter").val());
			count += parseInt($("#earthHidden").val());
			$("#counter").val(count);
			if($("#counter").val() >= randomNumber && $("#counter").val() <= randomNumber){
				wins++;
				$("#wins").html = "Wins: " + wins;
				$("#counter").val(0);
				var winCount = parseInt($("#winCounter").val());
				winCount += parseInt($("#earthHidden").val());
				$("#winCounter").val(wins);
				alert("You won the game!!");
				reset();
			}
			else if($("#counter").val() > randomNumber){
				losses++;
				$("#losses").html = "Losses: " + losses;
				$("#counter").val(0);
				var lossCount = parseInt($("#lossCounter").val());
				lossCount += parseInt($("#earthHidden").val());
				$("#lossCounter").val(losses);
				alert("You lost the game!!");
				reset();
			}
		})

		$("#mars-planet").click(function() {
			var count = parseInt($("#counter").val());
			count += parseInt($("#marsHidden").val());
			$("#counter").val(count);
			if($("#counter").val() >= randomNumber && $("#counter").val() <= randomNumber){
				wins++;
				$("#wins").html = "Wins: " + wins;
				$("#counter").val(0);
				var winCount = parseInt($("#winCounter").val());
				winCount += parseInt($("#marsHidden").val());
				$("#winCounter").val(wins);
				alert("You won the game!!");
				reset();
			}
			else if($("#counter").val() > randomNumber){
				losses++;
				$("#losses").html = "Losses: " + losses;
				$("#counter").val(0);
				var lossCount = parseInt($("#lossCounter").val());
				lossCount += parseInt($("#marsHidden").val());
				$("#lossCounter").val(losses);
				alert("You lost the game!!");
				reset();
			}
		})


	}
	randos();


});


