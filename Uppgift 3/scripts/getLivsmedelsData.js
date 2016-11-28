window.onload = initiate;


function initiate() {

    var button = document.getElementById("sok-button");
    button.onclick = search;
}

function search() {
    // Hämta innehållet i inmatningsfältet
    var strInput = $('#livsmedelsSokOrd').val();
    // Hämta tabell bodyn och rensa den innan nytt anrop
    var tabell = document.getElementsByTagName("tbody")[0];
    for(var i = tabell.rows.length - 1; i >= 0; i--) {
        tabell.deleteRow(i);
    }

    $.ajax({
        url: "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php",
        dataType: "jsonp",
        data: {
            limit: 10,
            namn: strInput
        },
        // Om förfrågan gått bra...
        success: function (response) {
            var livsmedelArray = response.livsmedel;
            if(livsmedelArray.length > 0) {
                $("#tabell").show();

                // För varje livsmedel, skapa rad och fyll i värdena
                for(var i = 0; i < livsmedelArray.length; i++) {
                    var livsmedel = livsmedelArray[i];
                    // Hämta attributvärden från livsmedel
                    var namnVal = livsmedelArray[i].namn;
                    var energiVal = livsmedelArray[i].energi;
                    var kolhydratVal = livsmedelArray[i].kolhydrater;
                    var proteinVal = livsmedelArray[i].protein;
                    var fettVal = livsmedelArray[i].fett;
                    
                    var newTr = document.createElement("tr");       //create new row

                    //Skapa nya celler med en text inuti. Appenda barnen och lägg till i tabellen
                    var newTdNamn = document.createElement("td");
                    var newTdEnergi = document.createElement("td");
                    var newTdKolhydrater = document.createElement("td");
                    var newTdProtein = document.createElement("td");
                    var newTdFett = document.createElement("td");

                    var textNodeNamn = document.createTextNode(namnVal);
                    var textNodeEnergi = document.createTextNode(energiVal);
                    var textNodeKolhydrater = document.createTextNode(kolhydratVal);
                    var textNodeProtein = document.createTextNode(proteinVal);
                    var textNodeFett = document.createTextNode(fettVal);

                    newTdNamn.appendChild(textNodeNamn);
                    newTdEnergi.appendChild(textNodeEnergi);
                    newTdKolhydrater.appendChild(textNodeKolhydrater);
                    newTdProtein.appendChild(textNodeProtein);
                    newTdFett.appendChild(textNodeFett);

                    newTr.appendChild(newTdNamn);
                    newTr.appendChild(newTdEnergi);
                    newTr.appendChild(newTdKolhydrater);
                    newTr.appendChild(newTdProtein);
                    newTr.appendChild(newTdFett);

                    tabell.appendChild(newTr);
                }

            }
            else $("#tabell").hide();        // Listan är tom

        }
    });
}







