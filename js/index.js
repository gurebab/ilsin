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


    // sec4 에 대한 >>> 호버로 대체했음
    // $(".sec4 > .con > .item-wrap > li").mouseover(function(){
    //     var item = $(this).index();
    //     var per = '75%';
    //     console.log(item);
    //     $(".sec4 > .con > .item-wrap > li").css({'width' : 200});
    //     $(this).css({'width' : per});
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box").eq(item).css({'top' : '30%'});
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box > .visible").eq(item).addClass("active");
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box > .hidden").eq(item).addClass("active");
    // });
    // $(".sec4 > .con > .item-wrap > li").mouseleave(function(){
    //     var item = $(this).index();
    //     var per = '95%';
    //     console.log(item);
    //     $(".sec4 > .con > .item-wrap > li").css({'width' : per});
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box").css({'top' : '50%'});
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box > .visible").eq(item).removeClass("active");
    //     $(".sec4 > .con > .item-wrap > li > .opacity-wrap > .item-box > .hidden").eq(item).removeClass("active");
    // });

    // 스크롤
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 500){
            $(".top-btn").addClass("active");
        }else{
            $(".top-btn").removeClass("active");
        };


        if($(window).scrollTop() > 0){
            $(".sec1").css({'opacity' : 1});
        }else{
            $(".sec1").css({'opacity' : 0});
        }

        if($(window).scrollTop() > 600){
            $(".sec2").css({'opacity' : 1});
        }else{
            $(".sec2").css({'opacity' : 0});
        }

        if($(window).scrollTop() > 800){
            $(".sec3").css({'opacity' : 1});
        }else{
            $(".sec3").css({'opacity' : 0});
        }

        if($(window).scrollTop() > 900){
            $(".culum01").css({'opacity' : 1});
            $(".sec3 > .culum01 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum01").css({'opacity' : 0});
            $(".sec3 > .culum01 > .con > .text-wrap > span").removeClass("active");
        }

        if($(window).scrollTop() > 1200){
            $(".culum02").css({'opacity' : 1});
            $(".sec3 > .culum02 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum02").css({'opacity' : 0});
            $(".sec3 > .culum02 > .con > .text-wrap > span").removeClass("active");
        }

        if($(window).scrollTop() > 1500){
            $(".culum03").css({'opacity' : 1});
            $(".sec3 > .culum03 > .con > .text-wrap > span").addClass("active");
        }else{
            $(".culum03").css({'opacity' : 0});
            $(".sec3 > .culum03 > .con > .text-wrap > span").removeClass("active");
        }

        if($(window).scrollTop() > 1800){
            $(".sec4").css({'opacity' : 1});
        }else{
            $(".sec4").css({'opacity' : 0});
        }
        if($(window).scrollTop() > 2000){
            $(".sec5").css({'opacity' : 1});
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
    
    //저거 설명 1 :: var lastScrollTop은 0이고 var data는 5이다.
    //저거 설명 2 :: 스크롤 하면 펑션(event)한다. (e라 써도 되고 event라 써도 되는데 사실 안써도 됨)
    //저거 설명 3 :: st는 '이것'의 스크롤바 탑의 위치다.
    //저거 설명 4-1 :: (math.abs 가 절대값을 만드는 자바스크립트 메소드, abs는 absolute의 준말)
    //저거 설명 4-2 :: 만약, lastScrollTop(0) - $(this).scrollTop(); 보다 data(5) 작거나 같으면
    //저거 설명 5 :: 리턴한다.  (리턴 = 변화한 값을 계속해서 함수에 적용시킴)
    //저거 설명 6 :: 만약 이것의 스크롤값이 0과 같고 lastScrollTop 이 0이면 (lastScrollTop 은 설명1 에서 0이라고 했음, 즉 '참'이면 이란 뜻)
    //저거 설명 7 :: 헤더의 css : top 은 -80xp이 된다. (자기 헤더 height 값 이상 만큼 음수(-)로 쓰면 됨 ex. header 가 height :40px 이면 -40 이상)
    //저거 설명 8 :: 위의 경우(설명 6~7)이 아닌경우, 헤더의 top 값은 0 이다. (변화 없다.)
    // lastScrollTop 은 st 다. 즉 lastScrollTop 은 현재 브라우저 스크롤 높이와 같다.

    //결과 :: var - lastScrollTop 은 해당 index.html의 스크롤값에 따라 계속해서 바뀜, 근데 이 스크롤값이 조금이라도 - 가 되면 {ex)1000이었는데 999가 되면} header의 css top : 0; 이 되고 
    //스크롤이 계속해서 + 되면 {ex) 1000이었는데 1001~ 이 되면} css top : 0 이 되어 온전히 html상에 나타남. 참고로 var - data 의 값에 따라 스크롤 양이 정해짐, 즉 data 변수를 1,000으로 고치면 
    //스크롤이 1,000이 더해질때까지 해당 코드는 적용되지 않음 원하는 위치에서 나타났다 사라지기 원하면 console.log()로 스크롤 양 확인 후 적용 ㄱㄱ

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