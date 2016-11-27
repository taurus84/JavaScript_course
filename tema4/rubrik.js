/**
 * Created by David on 2016-11-09.
 */

function add() {
    var input = document.getElementById("labelinput").value;
    var nyRubrik = document.createElement("h1");
    nyRubrik.setAttribute("style", "color: orange;");
    var nyTextnod = document.createTextNode(input);
    nyRubrik.appendChild(nyTextnod);
    var bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.appendChild(nyRubrik);
}
