$(function() {
    $('.menu-md__icon').click(function(){
        $('.menu-md__hide').toggleClass('show');
        $(this).toggleClass('active');
    });
    $('.menu-md__hide a').click(function(){
        $('.menu-md__hide').removeClass('show');
        $('.menu-md__icon').removeClass('active');
    });
    
});