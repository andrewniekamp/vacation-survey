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

    if (stressLevel === "high") {
      if (budget === "low") {
        $("#denali").show();
      } else if (budget === "medium"){
        $("#machu-picchu").show();
      } else {
        $("#rio-de-janeiro").show();
      }
    } else if (climate === "cold") {
      $("#denali").show();
    } else if (transit === "train" || transit === "automobile") {
      $("#savannah").show();
    } else if (stressLevel === "low"){
      if (budget === "low") {
        $("#punta-cana").show();
      } else {
        $("#santorini").show();
      }
    } else if (stressLevel === "medium") {
      if (budget === "low") {
        $("#savannah").show();

      } else if (budget === "medium") {
        $("#cambodia").show();
      } else {
        $("#santorini").show();
      }
    } else {
      $(".initially-hidden").show();
    }

    // insert this later: <h1>Here is where you should go, <span class="result-name"></span>.</h1>
    //IMPORTANT
    //FOR FINAL ELSE OF CHOICES
    //$(".initially-hidden").show();


  })
});


/*

hot
temperate

expensive
moderate

*/
