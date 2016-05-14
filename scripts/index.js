$( document ).ready(function() {
    console.log( "ready!" );
    
    document.querySelector("#calendar-emailGumb").addEventListener('click', posodobiCalendar)
});

var posodobiCalendar = function(){
	var email = document.querySelector("#calendar-email").value;
	
	email = email.replace("@", "%40");
	email = email.replace("#", "%23");
	
	var prviDel = "https://calendar.google.com/calendar/embed?src=";
	var drugiDel = "&ctz=Europe/Belgrade";
	document.getElementById("calendar-iframe").src=prviDel+email+drugiDel;
}