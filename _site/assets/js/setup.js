$(document).ready(function(){

//load youtube videos on click
 $('.activator').click(function() {
    var videoid = $(this).data("id");
    var frame = $("#" + videoid);
    if (frame.attr("src") === undefined) {
        frame.attr("src", frame.data("video"));
    }
});

// carousel setup
//if($('.carousel').length > 0){
//    $('.carousel').carousel();
//}

//load images after page load
 $('.responsive-img[data-src]').each(function() { 
     $(this).attr('src', $(this).data('src')); 
});



});