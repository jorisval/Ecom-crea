
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
    $('.product-hero__part-2 .quantity__button-down').on('click', function(){
        var input = $('.product-hero__part-2 #quantity');
        var inputValue = parseInt(input.val(), 10);
        if (!isNaN(inputValue)) {
            if (inputValue > 0) {
                input.val(inputValue - 1);
            } else {
                input.val(0);
            }
            
        } else {
            input.val(1)
        }
    });
    $('.product-hero__part-2 .quantity__button-up').on('click', function(){
        var input = $('.product-hero__part-2 #quantity');
        var inputValue = parseInt(input.val(), 10);
        if (!isNaN(inputValue)) {
            input.val(inputValue + 1);
        } else {
            input.val(1)
        }
    });

    //--- add to cart page
    $('.bi-bag-plus').on('click', function(e) {
        $('.cart .background').css('display','block');
        $('.cart-content').addClass('show');
    });
    $('.cart-content__header .bi-x').on('click', function(e) {
        $('.cart-content').removeClass('show');
        $('.cart .background').css('display','none');
    });
    $('.cart .background').on('click', function(e) {
        $('.cart-content').removeClass('show');
        $('.cart .background').css('display','none');
    });

        //-- quantity section
        $('.cart-content-product__part2-quantity .quantity__button-down').on('click', function(){
            var input = $('.cart-content-product__part2-quantity #quantity');
            var inputValue = parseInt(input.val(), 10);
            if (!isNaN(inputValue)) {
                if (inputValue > 0) {
                    input.val(inputValue - 1);
                } else {
                    input.val(0);
                }
                
            } else {
                input.val(1)
            }
        });
        $('.cart-content-product__part2-quantity .quantity__button-up').on('click', function(){
            var input = $('.cart-content-product__part2-quantity #quantity');
            var inputValue = parseInt(input.val(), 10);
            if (!isNaN(inputValue)) {
                input.val(inputValue + 1);
            } else {
                input.val(1)
            }
        });
});
