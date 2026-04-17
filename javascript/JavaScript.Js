$(document).on("click", ".heart", function(e){
    e.preventDefault();
    localStorage.setItem("tocarMusica", "true");
    $("html, body").css("overflow", "hidden");
    $("body").css("transition", "transform 0.5s ease, opacity 0.5s");
    $("body").css({
        transform: "translateY(-100%)",
        opacity: 0.7
    });
    setTimeout(function(){
        window.location.href = "../LoveForYou/html/landingpage.html";
    }, 500);
});