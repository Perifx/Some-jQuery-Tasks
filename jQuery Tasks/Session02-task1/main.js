$(document).ready(function(){

    $(".container").hover(function(){

        $(this).animate({
            opacity: '1',
            left: '0'
        }, 800)
    }, function(){

        $(this).animate({
            opacity: '0.25',
            left: '-10%'
        }, 1000)
    })

    $("ul").on("click", function(){
        

        $("ul").find("li").css({height: '0', visibility: 'hidden'});
        $(this).find("li").css({height: '30px', visibility: 'visible'});
    })
})