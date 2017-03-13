(function($){

$.fn.modal = function() {
    $("#text").css("margin-left", 10);
    $("p").text("Congrats You've Signed Up!");
    $( "tr:even" ).css( "background-color", "lightgray" );
    $("tr:odd").css("background-color", "lightyellow");
    $(".mone").css({"width": "80px", "height":"30px"});
    $("p").css({"color": "red", "font-size" : "18px", "margin-top": "-5px"});

    $('#info').click( function(event){
        event.preventDefault();
        $("#mid").fadeIn(2000).find('#term').show(1500);

    });

    $("#close").click(function(event){
        event.preventDefault();
        $('#mid').fadeOut(3000).find('#term').hide(2000);
    });

    $("#last").mouseenter(function() {
        $(".mone").css("background-color", "gray");
    });

    $("#last").mouseleave(function() {
        $(".mone").css("background-color", "white");
    });

    $( "#last" ).click(function() {
        $( "p" ).toggle();
    });

    $( "tr" ).filter( ":odd" ).hide().end().filter( ":even" ).hover(function() {
            $( this ).toggleClass( "active" ).next().slideDown();
        });

    $("tr").filter(":odd").mouseleave(function(){
        $(this).slideUp();
    });

};

}(jQuery));

/*
 $(function() {});
(function($){}(jQuery));
 */