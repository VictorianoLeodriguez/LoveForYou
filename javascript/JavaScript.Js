$(document).on("click", ".heart", function(e){
    e.preventDefault();
    
    $("html, body").css("overflow", "hidden");

    $("body").css("transition", "transform 0.5s ease, opacity 0.5s");

    $("body").css({
        transform: "translateY(-100vh)",
        opacity: 0.7
    });

    setTimeout(function(){
        window.location.href = "../html/landingpage.html";
    }, 500);
});