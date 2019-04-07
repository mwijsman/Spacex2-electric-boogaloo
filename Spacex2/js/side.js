window.onload = function () {
	function showTime(){
		var date = new Date();
		var hour = date.getHours();   /* deze functie haald de uren, minuten, seconden, maand, datum en jaar op en geeft ze een variabel*/
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var month = date.getMonth();
		var day = date.getDate();
		var year = date.getFullYear();
		var session = "";  
			if(hour < 12 && x < 340){
				session = "It is currently morning. Good morning!"; /*dit geeft session een waarde, de tween hieronder speelt 1x af en gebruik 100% van het schermformaat*/
				var zon = TweenMax.to(".zon", 3, {
					xpercent:-100,
					ypercent:-100,
					left:"80%",
					rotation:360,
					opacity: 1
				});
			}   
			
			if(hour >= 12 && hour < 18 ){
			session =  "It is currently noon";
					var zon = TweenMax.to(".zon", 3, {
					xpercent:-100,
					ypercent:-100,
					left:"80%",
					rotation:360,
					opacity: 1
				});
				var wolken = TweenMax.to(".wolken", 3, {
					xpercent:-100,
					ypercent:-100,/*hier is mn wolken tween, vedere aanpassingen die ik wou doen waren niet mogelijk ivm het alleen te kunnen gebruiken van Tweenmax en geen andere Greensocks libraries*/
					left:"70%",
					y:"25%",
					delay:2,
					opacity:1 /*ondanks mijn pogingen en gebruik van verschillende methodieken is het niet gelukt om deze wolk voor de zon te zetten, zelfs met z-index niet*/
				});

		}
		
		   if(hour >= 18 && hour < 24 ){
				session = "It is currently night. Good night!";
				var maan = TweenMax.to(".maan", 3, {
					xpercent:-100,
					ypercent:-100,
					left:"80%",
					rotation:360,
					opacity: 1
				});

		}
		
		if (session == "It is currently noon") {
		  document.getElementById("klok").style.color = '#ccac55';   /*Als session de "it is currently noon" waarde heeft wordt de tekstkleur veranderd van de klok, datum en tijd*/
		  document.getElementById("datum").style.color = '#ccac55';
		  document.getElementById("tijd").style.color = '#ccac55';
		  
		}
		else if (session == "It is currently evening")
		{
		  document.getElementById("klok").style.color = '#4c80a5';
		  document.getElementById("datum").style.color = '#4c80a5';
		  document.getElementById("tijd").style.color = '#4c80a5';
		  
		}
		
		hour = (hour < 10) ? "0" + hour : hour; /*Dit zorgt ervoor dat het 01 uur is ipv 1 uur op de digitale klok*/
		minute = (minute < 10) ? "0" + minute : minute; /*Dit doet hetzelfde voor minuten en hieronder voor seconden*/
		second = (second < 10) ? "0" + second : second;
		
		var time =  hour + ":" + minute + ":" + second;
		var datum = month + "/" +  day + "/" + year;
		var tijd = session;           /* dit toont de waarde van verschillende variabelen en zet ze achter elkaar. */
		document.getElementById("klok").innerText = time;    
		document.getElementById("datum").innerText = datum; 
		document.getElementById("tijd").innerText = tijd; 
		setTimeout(showTime, 1000);
		
	}
	showTime();
}
		