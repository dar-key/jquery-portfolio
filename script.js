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

$("#hide").click(function () {
  $("#status, #facts").hide();
});

$("#show").click(function () {
  $("#status, #facts").show();
});

$("#toggle").click(function () {
  $("#status, #facts").toggle();
});

$("#fade-in").click(function () {
  $(".photo").fadeIn();
});

$("#fade-out").click(function () {
  $(".photo").fadeOut();
});

$("#fade-toggle").click(function () {
  $(".photo").fadeToggle();
});

$(".title").click(function () {
  $(this).next(".panel").slideToggle();
});
$("#slide-up").click(function () {
  $(".panel").slideUp();
});
$("#slide-down").click(function () {
  $(".panel").slideDown();
});

$("#add-skill").click(function () {
  var skill = $("#skill-input").val().trim();
  if (skill === "") return alert("Enter a skill first");
  $("#skill-list").append("<li>" + skill + "</li>");
  $("#skill-input").val("");
});

$("#prepend-skill").click(function () {
  var skill = $("#skill-input").val().trim();
  if (skill === "") return alert("Enter a skill first");
  $("#skill-list").prepend("<li>" + skill + "</li>");
  $("#skill-input").val("");
});

$("#remove-skill").click(function () {
  $("#skill-list li:last").remove();
});

$("#change-link").click(function () {
  $("#social").attr("href", "https://www.linkedin.com").text("LinkedIn");
});

$("#name-input").on("input", function () {
  $("#name-out").text($(this).val());
});
$("#email-input").on("input", function () {
  $("#email-out").text($(this).val());
});
