$(function () {
    var swiper = new Swiper('#visual .swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '#visual .swiper-pagination',
        }

    });
    $('#new_design .tab>li>a').on('click', function(evt){
        
    });
    $('#header .mainmenu>ul>li>a').first().trigger('click');

    var pos = []; 
    var base_line = -500; 

    function save_offset (){
        pos = []; 
        $('section').each(function(index){                      
            pos.push( $('section').eq(index).offset().top ); 
        });
        pos.push( $('section').last().offset().top + $('section').last().height() ); 
    }
    
    save_offset (); 

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();

        $('section').each(function(index){
            if( scroll >= pos[index] + base_line ){
                $('section').eq(index).addClass('on')
            }
        });

    });

});