$(document).ready(function(){
	// load navbar and footer
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");

    // toggle active navbar link. doesn't work yet!
    var activeLink = function(){
    	$('.nav-links li').click(function(e){
    		e.preventDefault();
    		e.stopPropagation();
    		$(this).siblings().removeClass('active');
    		$(this).addClass('active');
    	});
    };
    	

    // toggle info boxes on home page
    $('.arrow-box').hide();
    $('.mission').click(function(){
    	$(this).children('.arrow-box').slideToggle();
    });
});