$(".level1").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/16/8f/33/168f33328213ef4b913675d3a4eefa11.gif)");
});

$(".start-game").click(function() {
    $(".start").fadeOut();
    $(".game").fadeIn();
});
$(".ryu").click(function() {
    $(".sprite").fadeOut();
    $(".sprite-jab-attack").fadeIn();
});
$(".ryu").dblclick(function() {
    $(".sprite").hide();
    $(".sprite-jump-attack").show();
});
$(".ryu").mouseenter(function() {
    $(".sprite").hide();
    $(".sprite-taunt").show();
});
$(".ryu").mouseleave(function() {
    $(".sprite").hide();
    $(".sprite-ready").show();
});


