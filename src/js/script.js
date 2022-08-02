
$(document).ready(function(){
    
        // Slider
    $('.carousel__inner').slick({
        speed: 300,
        focusOnSelect: true,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: false,
                    centerMode: true,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
              }
          ]
    });
 
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

});


const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});




$(document).ready(function(){

        // Tabs

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

        // Accordeon

    $(function() {
        $('.faq__list-heading').on('click', function(e) {
          e.preventDefault();
          if ($(this).hasClass('faq__list-heading_active')) {
            $(this).removeClass('faq__list-heading_active');
            $(this).next()
            .stop()
            .slideUp(300);
          } else {
            $(this).addClass('faq__list-heading_active');
            $(this).next()
            .stop()
            .slideDown(300);
          }
        });
    });

        // Scroll menu fadeIn

    $(window).scroll(function() {
        if( window.innerWidth >= 769 ){
            if (($(this).scrollTop() > 150) && ($(this).scrollTop() < 4650)) {
                $('.upmenu').fadeIn();
            } else {
                $('.upmenu').fadeOut();
            }
        } else {
            $('.upmenu').fadeOut();
        }
    });

    $(window).scroll(function() {
        if( window.innerWidth <= 768 ){
            if ($(this).scrollTop() > 4750) {
                $('.mobile__round').fadeOut();
            } else {
                $('.mobile__round').fadeIn();
            }
        } else {
            $('.mobile__round').fadeOut();
        }
    });
    $(window).scroll(function() {
        if( window.innerWidth >= 1439 ){
            if ($(this).scrollTop() > 4650) {
                $('.sidepanel').fadeOut();
            } else {
                $('.sidepanel').fadeIn();
            }
        } else {
            $('.sidepanel').fadeOut();
        }
    });
            
    $(window).scroll(function() {
        if( window.innerWidth > 768 ){
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        } else {
            $('.pageup').fadeOut();
        }
    });
        
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    
});





