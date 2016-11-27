/**
 * Created by David on 2016-11-18.
 */


function laggTillInput() {
    //leta fram elementet med id formularet
    var formularElement = document.getElementById("formularet");

    //skapa p-element
    var nyttPElement = document.createElement("p");

    //skapa textnod och lägg som child till p-noden
    var nyTextNod = document.createTextNode("Sökord: ");
    nyttPElement.appendChild(nyTextNod);

    //skapa inmatningsfält, ange att det ska vara text och lägg som child till p-elementet
    var nyttInmatningsfalt = document.createElement("input");
    nyttInmatningsfalt.setAttribute("type", "text");
    nyttPElement.appendChild(nyttInmatningsfalt);

    //lägg till knapp och lägg som child till p-element
    var nyKnapp = document.createElement("input");
    nyKnapp.setAttribute("type", "button");
    nyKnapp.setAttribute("value", "Ta bort sökfält");
    nyKnapp.onclick = taBortFalt;
    nyttPElement.appendChild(nyKnapp);

    //lägg till p-element i DOM-trädet. Placeras sist i trädet
    formularElement.appendChild(nyttPElement);
}
function taBortFalt() {
    //hitta referens till parentNode till this (this = referens som avfyrar funktionen)
    var PElement = this.parentNode;

    //stig upp i trädet genom att kalla på PElements parentNode. Det är formulär-elementet
    var parentElement = PElement.parentNode;

    //nu kan vi ta bort P-elementet
    parentElement.removeChild(PElement);

}