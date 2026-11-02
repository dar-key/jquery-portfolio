$("h1").css("color", "darkblue");
$("#headline").css("font-style", "italic");
$(".intro").css("font-size", "18px");

$("#change-headline").click(function () {
  $("#headline").text("Now learning jQuery!");
  $(".intro").html("I'm a <b>student</b> who likes building websites.");
});

$("#dark").click(function () {
  $("body").css({ background: "#222", color: "#fff" });
  $("h1").css("color", "lightblue");
});

$("#light").click(function () {
  $("body").css({ background: "#fff", color: "#000" });
  $("h1").css("color", "darkblue");
});
