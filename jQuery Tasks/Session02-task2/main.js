$(document).ready(function(){

    $(".image").on("click", function(){

        $(".container").css('opacity', '0.3');

        $("#newImg").attr("src", $(this).attr("src"));

        $(".view").css({

            "display": "flex",
            "position": "absolute",
            "top": "10%"
        })

    })

    $("#close").on("click", function(){

        $(".view").hide();
        $(".container").css("opacity", "1");
    })

    var counter = 0;

    $("#left").on("click", function(){

        $("#newImg").attr("src", $(".image").eq(counter).attr("src"));

        if(counter == $(".image").length-1){
            counter = 0;
        }
        else{
            counter++
        }
        // $("#newImg").attr("src", $(".image").eq(counter).attr("src")).fadeIn(1000);
    })

    $("#right").on("click", function(){

        $("#newImg").attr("src", $(".image").eq(counter).attr("src"));

        if(counter == $(".image").length-1){
            counter = 0;
        }
        else{
            counter--
        }
        // $("#newImg").attr("src", $(".image").eq(counter).attr("src")).fadeIn(1000);
    })
})