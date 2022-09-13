$("img").hover(function(e){
    
    var cloneImg = $(this).clone();
    $("body").append(cloneImg);
  
    $("img").on("mousemove" , function(e){

    cloneImg.addClass("copied");
    if(screen.width - e.pageX < 300){

        cloneImg.css({
            "top": e.pageY,
            "right": screen.width - e.pageX,})
    }else{
    cloneImg.css({
        "top": e.pageY,
        "left": e.pageX,
    })}})
} , function(){
    $(".copied").remove();
})





// $("img").hover(function(e){
//     $($(this)).clone();
//     $("body").append($(this));
//     $(this).addClass("copied");
//     $(this).css({
//         "top": `${e.pageX}px`,
//         "left":`${e.pageY}px`,
//     } , function(){
//         $("body").remove($(this));
//     });

// $("img").on("mouseleave" , function(){
//     $("body").remove($(this));
// })

// $("img").on("mousemove" , function(e){
//     console.log(e.pageX , e.pageY);
// })
