window.onload = function(){
    var form = document.getElementsByTagName("form")[0];
    form.onsubmit = validate;
}

/* Validerar formulärets tre inmatningsfält: firstname, lastname och email. Kontrollerar att någon 
 * text har angivits. Om något fält inte har fyllts i returnerar funktionen falskt vilket resulterar i att 
 * forumläret inte skicka. Slutligen upppmanas användaren att ange om de vill skicka väg sin registrering eller inte.
 * Endast om alla fält är ifyllda och användaren har svarat ja kommer funktionen att returerna sant vilket leder till att 
 * formuläret skickas iväg. 
 */
function validate(){
    var firstname = document.getElementById("firstname").value;
    if (firstname.length == 0) {
        alert("Du måste ange ett förnamn");
        document.getElementById("firstname");
        return false;
    }
    
    var lastname = document.getElementById("lastname").value;
    if (lastname.length == 0) {
        alert("Du måste ange ett efternamn");
        return false;
    }
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        alert("Du måste ange en epostadress");
        return false;
    }
    if (confirm("Vill du skicka registreringen")) {
        return true;
    }
    else {
        alert("Registreringen avbröts.");
        return false;
    } 
}
