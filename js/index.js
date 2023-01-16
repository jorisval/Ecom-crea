$(function() {
    $('.menu-md__icon').click(function(){
        $('.menu-md__hide').toggleClass('show');
        $(this).toggleClass('active');
    });
    $('.menu-md__hide a').click(function(){
        $('.menu-md__hide').removeClass('show');
        $('.menu-md__icon').removeClass('active');
    });
    
    //--- Product page
    //------Price section
    var regexNumber = /[0-9]/;
    var inputNumberElement = document.getElementById('quantity');
    var testElement = document.querySelector(".product-title span");
    $('#quantity__button-up').on('click',function(e) {
        document.getElementById('quantity').value = inputNumberElement.value + 1;
        console.log(document.getElementById('quantity').value);
        testElement.textContent = document.getElementById('quantity').value + "€";
    });

    //--- add to cart page
    
});
