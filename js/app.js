$(document).ready(function(){
    
    $('.fa-fire').on('mouseover',function(){
        $('.nav1').css('display','block');
    });

    $('.fa-fire').on('mouseout',function(){
        $('.nav1').css('display','none');
    });

    $('.fa-fire').on('click',function(){
        $('.nav1').css('display','none');
    });

    $('.toggler').on('click',function(){
        $('.shift').toggleClass('shift1');
        $('.section2').toggleClass('section21');
        $(this).toggleClass('toggler1');
        $('.p1').toggleClass('p21');
        $('.section3').toggleClass('section31');
        $('.section4').toggleClass('section41');
        $('.field').toggleClass('field41');
        $('.area').toggleClass('area41');
        $('.sent').toggleClass('sent41');
        $('.credit').toggleClass('credit41');
        $('.faron').toggleClass('faron1');
    });

    $('.youtube').on('mouseover',function(){
        $(this).css('cursor','pointer');
    });


});