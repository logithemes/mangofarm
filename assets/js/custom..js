$(document).ready(function(){

   
    $(".pop-up2 ul li.cl-budjet").on("click", function(){
        $(this).children().closest(".sub-Budget").addClass("act");

        $(".sub-Budget").mouseleave(function(){
            $(this).children().closest(".sub-Budget").removeClass("act");
        });
    
    });


    $(".sub-Budget .s-Budget").on("click", function(){
        var _check = $(this).text();
       $(".book-now li .dp-icon").val(_check);
     
    });




    $(".sub-Budget .s-Budget1").on("click", function(){
        var _insert = $(this).text();
       $(".book-now li .dp-icon1").val(_insert);
     
    });
  

 $(".quick-booking").click(function(){
        $(".quick-booking1").addClass("act");
    });

$(".quick-booking1").mouseleave(function(){
    $(this).removeClass("act");
});



    $(window).on("scroll", function(){
        var _top = $(window).scrollTop();

        if(_top >= 100){
            $(".nav-right a").addClass("act");
        }
        
        else{
            $(".nav-right a").removeClass("act");
        }


        if(_top >= 100){
            $(".nav-right").addClass("act");
        }
        else{
            $(".nav-right").removeClass("act");
        }
    })
    

    // Lightbox
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $('<div id="prevButton"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>');
    var $nextButton = $('<div id="nextButton"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>');
    var $exitButton = $('<div id="exitButton"> <i class="bi bi-times"></i> </div>');

    // Add overlay
    $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
    $("#gallery").append($overlay);

    // Hide overlay on default
    $overlay.hide();

    // When an image is clicked
    $(".img-overlay").click(function (event) {
        event.preventDefault();
        var imageLocation = $(this).prev().attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    // When the overlay is clicked
    $overlay.click(function () {
        $(this).fadeOut("slow");
    });

    // When next button is clicked
    $nextButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").next().find("img"));
        var $images = $("#image-gallery img");
        if ($nextImg.length > 0) {
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        } else {
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
        }
        event.stopPropagation();
    });

    // When previous button is clicked
    $prevButton.click(function (event) {
        $("#overlay img").hide();
        var $currentImgSrc = $("#overlay img").attr("src");
        var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
        var $nextImg = $($currentImg.closest(".plac-gal-imag").prev().find("img"));
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
        event.stopPropagation();
    });

    $exitButton.click(function () {
        $("#overlay").fadeOut("slow");
    });


  });