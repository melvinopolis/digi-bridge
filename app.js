$(document).ready(function(){
    $('.social-links').load("social-links.html");
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");

    // not working 
    $('.nav-links li').on( "click", function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    $('.arrow-box').hide();
    $('.mission').click(function(){
    	$('.arrow-box').slideToggle();
    });
});