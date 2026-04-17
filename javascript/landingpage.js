$(document).ready(function(){
    $("body").css({
        transform: "translateY(100%)",
        opacity: 0.7
    });
        if(localStorage.getItem("tocarMusica")=="true"){
        $(document).one("click", function(){
            var audio = $("#musica")[0];
            audio.volume = 0.5;
            audio.play();
            localStorage.removeItem("tocarMusica");
        });
}
    setTimeout(function(){
        $("body").css({
            transition: "transform 0.5s ease, opacity 0.5s",
            transform: "translateY(0)",
            opacity: 1
        });
    }, 10);

});