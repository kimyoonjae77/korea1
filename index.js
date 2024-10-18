$(document).ready(function(){

    let i = 0;
    let count = $(".main_bg>li").length;


    let b = $(".banner_img>li").length;
    
    setInterval(function(){
        if(i == count-1){
            i=0;
        }else{ i++;}
        $(".main_bg").stop().animate({"margin-left":"-200%"}, function(){
            $(".main_bg>li:first-child").appendTo(".main_bg");
            $(".main_bg").css({"margin-left":"-100%"});
        });
        $(".ind_1>li").removeClass("ind_on");
        $(".ind_1>li").eq(i).addClass("ind_on");
    }, 5000);
    



    let ii = 0;
    let bb = $(".banner_img>li").length;
    setInterval(function(){   
        if(ii == bb - 1){
            ii = 0;
        }else{ 
            ii++;
        }

        $(".banner_img>li").stop().fadeOut();
        $(".banner_img>li").eq(ii).stop().fadeIn();

        $(".ind_bar>li").removeClass("bar_on");
        $(".ind_bar>li").eq(ii).addClass("bar_on");
    }, 3000);
    

    $(".show_left>li").click(function(){
        let cir = $(this).index();

        $(".show_left>li").children(".circle").removeClass("on");
        $(".show_left>li").children(".circle").eq(cir).addClass("on");
        $(".show_left>li").children(".show_img").removeClass("active");
        $(".show_left>li").children(".show_img").eq(cir).addClass("active");
    });

    $(".view_map_gr_left>li").click(function(){

        let view = $(this).index();

        $(".view_map_gr_left>li").children("img").stop().css({"opacity":"0"});
        $(".view_map_gr_left>li").children("img").eq(view).stop().css({"opacity":"1"});
        $(".view_map_gr_right>li").stop().fadeOut();
        $(".view_map_gr_right>li").eq(view).stop().fadeIn();
    });

    let carousel = $(".attraction_img"),
    items = $(".item"),
    currdeg  = 0;

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

    function rotate(e){
    if(e.data.d=="n"){
    currdeg = currdeg - 90;
    }
    if(e.data.d=="p"){
    currdeg = currdeg + 90;
    }
    carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
    });
    items.css({
    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
    "-o-transform": "rotateY("+(-currdeg)+"deg)",
    "transform": "rotateY("+(-currdeg)+"deg)"
    });
    }
});