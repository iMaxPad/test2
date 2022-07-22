$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $( ".header" ).addClass( "active");
        } else {
            $( ".header" ).removeClass( "active");
        }
    });

   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $( ".header__menu" ).addClass( "move");
        } else {
            $( ".header__menu" ).removeClass( "move");
        }
    });



    $( ".hamburger" ).click(function() {
        $( ".header__menu" ).fadeIn("slow, linear");
      });

      $( ".close, .header__link" ).click(function() {
        $( ".header__menu" ).fadeOut("slow, linear");
      });

    $('.slider__wrapper').slick(
        {
            dots: true,
            speed: 1000,
            // autoplay: true,
            // fade: true,
            arrows:false,
            // responsive: [
            //   {
            //     breakpoint: 577,
            //     settings: {
            //       slidesToShow: 1 ,
            //       arrows: false
            //     }
            //   }
            // ]
        }
    );

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup'). fadeOut();
        }
    });

    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
      });
});