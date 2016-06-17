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
    $(".intro-section, form").fadeOut('fast', function() {
      $("html, body").scrollTop(0);
    });

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
        $("#denali").fadeIn(1200);
      } else if (budget === "low"){
        $("#grand-canyon").fadeIn(1200);
      } else if (budget === "medium"){
        $("#machu-picchu").fadeIn(1200);
      } else if (climate !== "cold"){
        $("#rio-de-janeiro").fadeIn(1200);
      } else {
        $("#denali").fadeIn(1200);
      }
    } else if (transit === "train" || transit === "automobile") {
      $("#savannah").fadeIn(1200);
    } else if (stressLevel === "low"){
      if (budget === "low") {
        $("#myrtle").fadeIn(1200);
      } else if (budget === "medium"){
        $("#punta-cana").fadeIn(1200);
      } else {
        $("#santorini").fadeIn(1200);
      }
    } else if (stressLevel === "medium") {
      if (budget === "low") {
        $("#savannah").fadeIn(1200);
      } else if (budget === "medium") {
        $("#cambodia").fadeIn(1200);
      } else {
        $("#santorini").fadeIn(1200);
      }
    } else {
      $(".initially-hidden").fadeIn(1200);
      success = false;
    }
    if (success === true) {
      $("#result-header").fadeIn(1200);
      $('#center-btn2').fadeIn(1200);
      $('#return').fadeIn(1200);
    }
  });

  $("#return").click(function() {
    $("#result-header").fadeOut(200);
    $(".initially-hidden").fadeOut(200);
    $(".intro-section, form").fadeIn(1200);
  });
});
