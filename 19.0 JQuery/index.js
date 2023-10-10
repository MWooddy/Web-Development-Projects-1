$("h1").addClass("big-title");
$("h1").text("Nothing to see but jQuery");

$("button").html("<em>Hey</em>");
$("button").text("Don't Click Me");

$("a").attr("href", "https://www.google.com");
console.log($("h1").attr("class"));

$("h1").click(function (){
    $("h1").css("color", "purple");
    $("h1").text("Good Bye");
});

$("button").click(function () {
    $("button").html("<em>Hey</em>");
});

$(document).keydown(function (e) { 
    $("h1").text(e.key);
    $("h1").css("color", "red");
});

$("h1").on("mouseover", function (){
    $("h1").css("color", "blue");
    $("h1").text("Hello");
});

$("h1").on("mouseout", function (){
    $("h1").css("color", "purple");
    $("h1").text("Good Bye").slideUp().slideDown().fadeOut().fadeIn();
});
