var name;
var climate;
var stressLevel;
var transit;
var budget;
var success;

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".initially-hidden").hide();
    $("#result-header").hide();
    $("html, body").scrollTop(0);

    name = $("input#participant-name").val();
    climate = $("#climate").val();
    stressLevel = $("input:radio[name=stress-level]:checked").val();
    transit = $("#travel-option").val();
    budget = $("input:radio[name=cost]:checked").val();
    success = true;

    if (name === "") {
      $(".result-name").text("my friend");
    } else {
      $(".result-name").text(name);
    }

    if (stressLevel === "high") {
      if (budget === "low" && climate !== "hot") {
        $("#denali").show();
      } else if (budget === "low"){
        $("#grand-canyon").show();
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
        $("#myrtle").show();
      } else if (budget === "medium"){
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
      success = false;
    }
    if (success === true) {
      $("#result-header").show();
    }
  });
});


//MAKE HEADER AND SURVEY FADOUT THEN FADEIN RESULTS? ALSO BUTTON TO SHOW SURVEY AGAIN?
