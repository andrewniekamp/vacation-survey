var name;
var climate;
var stressLevel;
var transit;
var budget;

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".initially-hidden").hide();

    name = $("input#participant-name").val();
    climate = $("#climate").val();
    stressLevel = $("input:radio[name=stress-level]:checked").val();
    transit = $("#travel-option").val();
    budget = $("input:radio[name=cost]:checked").val();

    $("#result-name").text(name);

    //IF (all any)
      //please try again, or show all

    // ELSE IF (exhilirating)
      //if (cheap)
        //DENALI
      //else if moderate
        //MACHU PICCHU
      //else
        //RIO

    //ELSE IF cold
      //DENALI

    //ELSE IF (Automobile || train)
      //SAVANNAH

    //ELSE IF (relaxing)
      //PUNTO CANA

    //ELSE IF interesting
      //IF cheap
        //CAMBODIA
      //else
        //SANTORINI




  })
});


/*

hot
temperate

expensive
moderate

*/
