window.onload = create;

function create() {

    /* create new row with id="sumrow" */
    var table = document.getElementById("pricetable");
    var newTr = document.createElement("tr");       //tr = table row
    newTr.setAttribute("id", "sumrow");
    var nbrOfCols = document.getElementsByTagName("th").length;
    for(var i = 0; i < nbrOfCols; i++) {
        var textNode = document.createTextNode("");
        var newTd = document.createElement("td");
        newTd.appendChild(textNode);
        newTr.appendChild(newTd);
    }
    //add the new row to the table
    table.appendChild(newTr);

    /* create extra header "SUMMA" */
    var trList = document.getElementsByTagName("tr");
    var newTh = document.createElement("th");       //th = table head
    var textNodeHead = document.createTextNode("SUMMA");
    newTh.appendChild(textNodeHead);
    trList[0].appendChild(newTh);

    /* create extra column */
    for(var i = 1; i < trList.length; i++) {
        var textNode = document.createTextNode("");
        var newTd = document.createElement("td");
        newTd.appendChild(textNode);
        trList[i].appendChild(newTd);
    }

    /* create textNode to the to last cols in last row */
    var textNodeNbrOfItems = document.createTextNode("");
    var textNodeSumTotal = document.createTextNode("");
    var cellsInLastRow = document.getElementById("sumrow").getElementsByTagName("td");
    cellsInLastRow[4].appendChild(textNodeNbrOfItems);
    cellsInLastRow[5].appendChild(textNodeSumTotal);


    var content = document.getElementById("content");
    /* create button and append to contentSqaure */
    var btnCalculate = document.createElement("input");
    btnCalculate.setAttribute("type", "button");
    btnCalculate.setAttribute("value", "Beräkna pris");
    content.appendChild(btnCalculate);
    btnCalculate.onclick = calculate;

}

function calculate() {
    var sumItems = 0, totalSum = 0;
    //find reference to all tablerows
    var tableRows = document.getElementsByTagName("tr");
    //for all tablerow (except the first, which contains headers), find reference to its cells, TD
    for(var i = 1; i < tableRows.length -1; i++) {
        var cells = tableRows[i].getElementsByTagName("td");    //cells in row
        var priceOfItem = parseInt(cells[3].childNodes[0].nodeValue);
        var nbrOfItems = parseInt(cells[4].childNodes[0].value);
        var sum = priceOfItem * nbrOfItems;
        totalSum += sum;                                                    //update total sum
        var sumCell = cells[5].childNodes[0].nodeValue = sum.toString();    //update the sumcell on this row
        sumItems += parseInt(cells[4].childNodes[0].value);             //sum of total items increases

    }
    /* update the cells */
    document.getElementById("sumrow").getElementsByTagName("td")[4].childNodes[0].nodeValue = sumItems;
    document.getElementById("sumrow").getElementsByTagName("td")[5].childNodes[0].nodeValue = totalSum;

}
