/**
 * Created by alund on 16/04/15.
 */

// När innehållet i textinmatningsfältet förändras...
$('#fornamn').on('change paste keyup', function () {
    //Töm innehållet i listan
    $('#resultat').empty();
    // Hämta innehållet i inmatningsfältet
    var forNamnStr = $('#fornamn').val();

    //Om det finns ett innehåll (dvs längden är större än 0)
    if (forNamnStr.length > 0) {
        //Utför en förfrågan till webbtjänsten
        $.ajax({
            url: "https://webservice.informatik.umu.se/webservice_persondb/persondb.php",
            dataType: "jsonp",
            data: {
                limit: 15,
                name: forNamnStr
            },
            // Om förfrågan gått bra...
            success: function (response) {
                var personer = response.personer;
                // Gå igenom alla personobjekt
                personer.forEach(function (person) {
                    // Lägg till ett li-element med för- och efternamn till ul-elementet med id=resultat
                    $('#resultat').append('<li>' + person.fnamn + ' ' + person.enamn + '</li>');
                });

            }
        });
    }
});