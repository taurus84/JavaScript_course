window.onload = initiate;


function initiate() {

    var button = document.getElementById("sok-button");
    button.onclick = search;
    var livsmedelAttributeArray = ["namn", "energi", "kolhydrater", "protein", "fett"];
}


function search() {
    // Töm listan
    //$('#tabell').empty();     //denna tömmer helt, även huvud och inget finns kvar..
    // Hämta innehållet i inmatningsfältet
    var strInput = $('#livsmedelsSokOrd').val();
    // Hämta tabell bodyn
    var tabell = document.getElementById("tabell");

    // TODO: rensa tabell bodyn innan nytt anrop


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
                alert(livsmedelArray.length);
                $("#tabell").show();

                for(var i = 0; i < livsmedelArray.length; i++) {
                    var livsmedel = livsmedelArray[i];
                    // Hämta attributvärden från livsmedel
                    var namnVal = livsmedelArray[i].namn;
                    var energiVal = livsmedelArray[i].energi;
                    var kolhydratVal = livsmedelArray[i].kolhydrater;
                    var proteinVal = livsmedelArray[i].protein;
                    var fettVal = livsmedelArray[i].fett;


                    var newTr = document.createElement("tr");       //create new row
                    for(var j = 0; j < 5; j++) {  //5 attribut på varje livsmedel
                        //Skapa en cell med en text inuti
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


                    }
                    tabell.appendChild(newTr);
                }

            }
            else {
                $("#tabell").hide();
            }

           /* alert(response.livsmedel.length);
            for(var i=0; i < personArray.length; i++) {
                var person = personArray[i];
                $('#person-lista').append('<li>' + person.fnamn + '</li>');
            } */
        }
    });
}



//$("#tabell").hide();







