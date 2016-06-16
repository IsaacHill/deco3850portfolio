
$( document ).ready(function() {
    var color;
    var current;
    var transitioning;
    var name = "Introduction";
    var content = "Intro"
     $('#introduction').addClass("visible");
     $('.introduction').hover(function(){hoverIn("Introduction")}, function(){hoverIn(name)});
    $('.team').hover(function(){hoverIn("Team")}, function(){hoverIn(name)});
    $('.product').hover(function(){hoverIn("Product")}, function(){hoverIn(name)});
    $('.reflection').hover(function(){hoverIn("Reflection")},function(){hoverIn(name)});
    $('.process').hover(function(){hoverIn("Process")}, function(){hoverIn(name)});
     

    
    $(".circle").click(function() {
            if(!$(this).hasClass(current) && !transitioning) {
                current = this;
                if ($(this).hasClass('introduction')) {
                    color = '#BEBAA9';
                    name = "Introduction";
                    current="introduction"
                } else if ($(this).hasClass('team')) {
                    color = '#FFB266';
                    name = "Team";
                    current="team"
                } else if ($(this).hasClass('product')){
                    color = '#4FA9BE';
                    name = "Product";
                     current="product";
                } else if ($(this).hasClass('process')) {
                    color = "#F76277";
                    name = "Process";
                    current='process';
                } else if ($(this).hasClass('reflection')) {
                    color = "#7CE55B";
                    name = "Reflection";
                    current="reflection";
                }
                $(".background-radius").removeClass('background-full');
            // color = $(this).css('background');
                
                $(".background-radius").css('background', color);
                $(".background-radius").addClass('background-full');
                
                transitioning = true
            } 
        });


    $(".background-radius")
        .on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
    function(e){
         $('html,body').scrollTop(0);
        $('.text').removeClass("visible");
        $('.text').removeClass("visible");
        $('#'+current).addClass("visible");
       $(".background-radius").removeClass('background-full');
       $("body").css('background', color);

       transitioning = false;

        
    }); 
});

function hoverIn(text) {
     console.log(text);
    $('.sectionName').text(text);
}
