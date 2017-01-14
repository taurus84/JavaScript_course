$(document).ready(generateMenu);

function generateMenu() {

    //hämta div-element
    var receptmeny = document.getElementById("receptmeny");

    //hämta container där menyn ska ligga i
    var container = receptmeny.firstElementChild;

    //hämta recepten som ligger i texten
    var content = document.getElementById("primarycontent");

    //hämta alla h4 i content
    var contentArray = content.getElementsByTagName("h4");

    //skapa bullet listan
    var unorderedList = document.createElement("ul");

    //för alla menyval i h4, skapa li-element
    for(var i = 0; i < contentArray.length; i++) {
        //skapa ett id för h4-element
        var id = "menuID" + i;
        contentArray[i].setAttribute("id", id);

        //skapa li-element
        var listElement = document.createElement("li");

        //skapa a-element
        var link = document.createElement("a");
        link.href = "#" + id;
        link.innerHTML = contentArray[i].firstChild.nodeValue

        //lägg a-element som barn till li-element
        listElement.appendChild(link);

        //lägg li-element som barn till ul-element
        unorderedList.appendChild(listElement);
    }

    //lägg den genererade listan som barn till containern
    container.appendChild(unorderedList);









}