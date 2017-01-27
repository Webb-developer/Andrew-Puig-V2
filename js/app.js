// @codekit-prepend "_jquery-3.1.1.slim.js";

function imageSwap(){

    "use-strict";

    var $image      = $(".image-swap__image");
    var $controller = $(".image-swap__controller"),
        src, $self;

    var getSwapSrc = function($controller){
        return $controller.data("swap-src");
    };

    var swap = function(src){
        $image.attr("src", src);
    };

    var unHighlightAllControllers = function($except){

        if($except){
            $controller.not($except)
            .removeClass("image-swap__controller--active");
        } else {
            $controller.removeClass("image-swap__controller--active");
        }

    };

    var highlightController = function($controller){
        $controller.addClass("image-swap__controller--active");
    };

    var bindUI = function(){

        $controller.on("mouseenter", function(){

            $self = $(this);
            src   = getSwapSrc($self);

            unHighlightAllControllers($self);
            highlightController($self);

            swap(src);

        });

    };

    var init = function(){
        bindUI();
    };

    init();

}

imageSwap();
