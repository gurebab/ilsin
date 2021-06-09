$(document).ready(function(){
    $(".slide").slick({
        infinite : true,
        autoplay : true,
        autoplaySpeed : 5000.000,
        speed:500,
        pauseOnHover : false,
        dots : true,
        arrows : false,
        fade: true,
    });

    //모바일
    $(".ham").click(function(){
        $("moblie-nav-wrap").addClass("active");
    });
    $(".util > .ham").click(function(){
        $(".util > .ham > .bar").toggleClass("active");
        $(".mobile-nav-wrap").toggleClass("active");
        $(".mobile-nav-wrap > .mobile-nav").toggleClass("active");
    });
    $(".mobile-nav-bg").click(function(){
        $(".mobile-nav-wrap").toggleClass("active");
        $(".mobile-nav-wrap > .mobile-nav").toggleClass("active");
        $(".util > .ham > .bar").toggleClass("active");
    });
    $(".mobile-nav .moblie-close-wrap").click(function(){
        $(".mobile-nav-wrap").toggleClass("active");
        $(".mobile-nav-wrap > .mobile-nav").toggleClass("active");
        $(".util > .ham > .bar").toggleClass("active");
    });
    $(".mobile-nav > .nav-list1 > ul > li > p").click(function(){
        $(this).next("ul").slideToggle().css({"color" : "#ff7c24"});
        $(this).parent().siblings().find("ul").slideUp(300);
        $(".mobile-nav > .nav-list1 > ul > li").removeClass("active");
        $(this).parent().toggleClass("active");
    });


    // 스크롤
    $(window).scroll(function(){
        var scr = $(window).scrollTop();
        if(scr > 500){
            $(".top-btn").addClass("active");
        }else{
            $(".top-btn").removeClass("active");
        };

        var sec1set = $(".sec1").offset().top;
        if( scr >= sec1set / 2){
            $(".sec1").css({'opacity' : 1});
            console.log('1임');
        }else{
            $(".sec1").css({'opacity' : 0});
        }
        var sec2set = $(".sec2").offset().top;
        if(scr > sec2set / 2){
            $(".sec2").css({'opacity' : 1});
        }else{
            $(".sec2").css({'opacity' : 0});
        }

        var sec3set = $(".sec3").offset().top;
        if(scr > sec3set / 1.5){
            $(".sec3").css({'opacity' : 1});
        }else{
            $(".sec3").css({'opacity' : 0});
        }

        if(scr > $(".culum01").offset().top / 1.2){
            $(".culum01").css({'opacity' : 1});
            $(".sec3 > .culum01 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum01").css({'opacity' : 0});
            $(".sec3 > .culum01 > .con > .text-wrap > span").removeClass("active");
        }

        if(scr > $(".culum02").offset().top / 1.2){
            $(".culum02").css({'opacity' : 1});
            $(".sec3 > .culum02 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum02").css({'opacity' : 0});
            $(".sec3 > .culum02 > .con > .text-wrap > span").removeClass("active");
        }

        if(scr > $(".culum03").offset().top / 1.2){
            $(".culum03").css({'opacity' : 1});
            $(".sec3 > .culum03 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum03").css({'opacity' : 0});
            $(".sec3 > .culum03 > .con > .text-wrap > span").removeClass("active");
        }
        var sec4set = $(".sec4").offset().top;
        if( scr >= sec4set / 1.1){
            $(".sec4").css({'opacity' : 1});
        }else{
            $(".sec4").css({'opacity' : 0});
        }
        var sec5set = $(".sec5").offset().top;
        if( scr >= sec5set / 1.15){
            $(".sec5").css({'opacity' : 1});
        }else{
            $(".sec5").css({'opacity' : 0});
        }
    });
    $(".top-btn").click(function(){
        $('html').animate({
            scrollTop:0
        },300);
    });
    // 스크롤 헤더

    // 반응형 애니메이션
    $(window).resize(function(){
        if($(window).width() < 768){
            console.log("반응형");
        };
    });


    //개쩌는 헤더
    $(function(){
        var lastScrollTop = 0, data = 5;
        $(window).scroll(function(e){
           var st = $(this).scrollTop();
           
           if(Math.abs(lastScrollTop - st) <= data){
              return;
            }
            if ((st > lastScrollTop) && (lastScrollTop>0)){
          $("header").css("top","-80px");
      
       } else {
          $("header").css("top","0px");
       }
           lastScrollTop = st;
        });
    });

    // 구글맵
    $(".show-map").click(function(){
        $(".map-wrap").addClass("active");
    });
    $(".map-wrap > .map-btn-wrap").click(function(){
        $(".map-wrap").removeClass("active");
    });
    $(".map-wrap").click(function(){
        $(".map-wrap").removeClass("active");
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $(".map-wrap").removeClass("active");
            $(".mobile-nav-wrap").removeClass("active");
            $(".util > .ham > .bar").toggleClass("active");
       }
   });

});