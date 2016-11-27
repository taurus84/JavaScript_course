window.onload = function(){
    var form = document.getElementsByTagName("form")[0];
    form.onsubmit = validate;
}

function validate()
{
	var firstName 		= document.getElementById("field_firstname").value;
	var lastName 		= document.getElementById("field_lastname").value;
	var organisation 	= document.getElementById("field_organisation").value;
	var email 			= document.getElementById("field_email").value;
	var presTitle 		= document.getElementById("field_pres_title").value;
	var message 		= document.getElementById("field_message").value;
	var rbForelsning 	= document.getElementById("pres_type_1").checked;
	var rbSeminarium 	= document.getElementById("pres_type_2").checked;
	var rbDiskussion 	= document.getElementById("pres_type_3").checked;

	if(firstName.length == 0) {
		alert("Du måste ange ett förnamn!");
		var color = "red";
		var colorStyle = "color: " + color;
		var label = document.getElementsByTagName("label")[1];
		label.setAttribute("style", colorStyle);
		document.getElementById("field_firstname").style.borderColor = color; //this line makes the submit to fire. No good..
		inputField.setAttribute("")
		return false;
	}

	if(lastName.length == 0) {
		alert("Du måste ange ett efternamn!");
		return false;
	}

	if(organisation.length == 0) {
		alert("Du måste ange organisationsnamn!");
		return false;
	}

	if(email.length == 0) {
		alert("Du måste ange email!");
		return false;
	} else {
		var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		var isValid = pattern.test(email);	
		if(!isValid) {
			alert("Din email är inte korrekt formaterad!");
			return false;
		}
	}

	if(rbForelsning || rbSeminarium) {
		if(presTitle.length == 0) {
			alert("Du måste fylla i Titel");
			return false;
		}
	}

	if(message.length > 200) {
		alert("Ditt meddelande är för långt, max 200 tecken");
		return false;
	}

	if (confirm("Vill du skicka registreringen?")) {
        return true;
    }
    else {
        alert("Registreringen avbröts.");
        return false;
    } 
}
