// $(window).on('scroll', function() {

//     var profile = document.querySelector('.profile').getBoundingClientRect().top;
//     console.log(profile);
//     if(profile  < 120) {
//         $('.profile').addClass('sticky-top');
//         console.log("test");
//     }
//     else {
//         $('.profile').removeClass('sticky-top');
//     }
// })

$(document).ready(function () {
    
  AOS.init({
      duration: 1000,
      disable: window.innerWidth < 992
  });

    $('.jumplinks').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var hash = this.hash;
        var offset;
        if(target == "#accueil") {
           offset = 200;
        }
        else {

            offset = 130;
        }

        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 600);
    
        window.location.hash = hash;
    });


    // $(document).scroll(function() {
    //     var test = $(".container-services").offset().top;
    //     var viewportTop = $(window).scrollTop();
    //     var calc = test-viewportTop;

    //     var winHeight = $(window).height() + $(".navbar").height();
    //     console.log("top services: " + test);
    //     console.log("top: " + viewportTop);
    //     console.log("window height " + $(window).height())
    //     console.log("Services - top= " + calc)
    //     console.log("winHeihgt - calc = " + (winHeight-calc))
    //     if( (calc ) <= 0) {
    //         console.log("SECTION SERVICES");
    //     }
    // })

});