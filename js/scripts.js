var name;
var climate;
var stressLevel;
var transit;
var budget;

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".initially-hidden").hide();
    $("#result-header").hide();

    name = $("input#participant-name").val();
    climate = $("#climate").val();
    stressLevel = $("input:radio[name=stress-level]:checked").val();
    transit = $("#travel-option").val();
    budget = $("input:radio[name=cost]:checked").val();

    if (name === "") {
      $(".result-name").text("My friend");
    } else {
      $(".result-name").text(name);
    }
    // $("#result-header").show();

    //FOR FINAL ELSE OF CHOICES
    $(".initially-hidden").show();

    //ELSE IF (exhilirating)
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
