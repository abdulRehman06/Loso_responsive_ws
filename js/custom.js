/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
                
            });
            
        } else {
            
           
            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
                
                
            });
            
            
        }
       
        
    });
    
    
});


$(document).ready(function(){
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active"); // this will remove the perivius active css
        $(this).parent().addClass("active");

    });
    


});










$(document).ready(function(){

    'use strict';
    $(window).scroll(function(){
        'use strict';
        $("section").each(function(){
            let bb = $(this).attr("id");
            let hei = $(this).outerHeight();
            let grttop = $(this).offset().top - 70;
            if($(window).scrollTop() > grttop &&  $(window).scrollTop() < grttop  + hei)
            {
                $(".navbar-nav li  a[href='#" + bb + "']").parent().addClass("active");
            }
            else 
            {
                $(".navbar-nav li  a[href='#" + bb + "']").parent().removeClass("active");
            }


        });


    });


});



// $('.bxslider').bxSlider({
//     auto: true,
//     autoControls: true,
//     stopAutoOnClick: true,
//     pager: true,
//     slideWidth: 600
//   });

// Add bx slider to screens
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        // auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 100,

            auto: true,
          
            stopAutoOnClick: true,
            pager: true,
            // slideWidth: 00
    });
    
});


// Add counter
$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});






