$(document).ready(function(){
    $("body").css({
        transform: "translateY(100vh)",
        opacity: 0.7
    });
    setTimeout(function(){
        $("body").css({
            transition: "transform 0.5s ease, opacity 0.5s",
            transform: "translateY(0)",
            opacity: 1
        });
    }, 10);

});