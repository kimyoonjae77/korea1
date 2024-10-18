$(document).ready(function () {
    // .main2 요소의 offset().top 값을 가져옴

    const main1OffsetTop = $(".main1").offset().top; // 0
    const main2OffsetTop = $(".main2").offset().top; // 997
    const main3OffsetTop = $(".main3").offset().top; //1715
    const main4OffsetTop = $(".main4").offset().top; //2423
    const footerOffsetTop = $("#footer").offset().top;
    console.log(main2OffsetTop);
    // 특정 위치에 도달했을 때 실행될 함수
    function handleScroll() {
        const scrollPosition =
            window.scrollY || document.documentElement.scrollTop;
        const targetElements = [$(".target1"), $(".target2"), $(".target3")];
        targetElements.forEach(function (target) {
            // target.removeClass("on");
        });
        //  // 예를 들어, .main3 위치에 따라 다른 요소를 처리하는 경우
        if (
            scrollPosition >= main1OffsetTop &&
            scrollPosition < main2OffsetTop
        ) {
            $(".target1").addClass("on");
        } else if (
            scrollPosition >= main2OffsetTop &&
            scrollPosition < main3OffsetTop
        ) {
            $(".target2").addClass("on");
        } else if (
            scrollPosition >= main3OffsetTop &&
            scrollPosition < main4OffsetTop
        ) {
            $(".target3").addClass("on");
        } else if (
            scrollPosition >= main4OffsetTop &&
            scrollPosition < footerOffsetTop
        ) {
            $(".target3").addClass("on");
        }
    }

    // 스크롤 이벤트를 감지하여 handleScroll 함수 실행
    window.addEventListener("scroll", handleScroll);

    $(".card_img1").click(function () {
        $(".card_img1").css({
            transform: "translateX(50%) rotateY(180deg)",
            opacity: "0",
        });

        setTimeout(function () {
            $(".card_img_cont1").stop().css({
                transform: "translateX(-50%) rotateY(0deg)",
            });
        });
    });

    $(".card_img2").click(function () {
        $(".card_img2").css({
            transform: "translateX(-50%) rotateY(180deg)",
            opacity: "0",
        });

        setTimeout(function () {
            $(".card_img_cont2").stop().css({
                transform: "translateX(-50%) rotateY(0deg)",
            });
        });
    });

    $(".card_img3").click(function () {
        $(".card_img3").css({
            transform: "translateX(-50%) rotateY(180deg)",
            opacity: "0",
        });

        setTimeout(function () {
            $(".card_img_cont3").stop().css({
                transform: "translateX(-50%) rotateY(0deg)",
            });
        });
    });

    $(document).click(function (e) {
        if (
            // !$(e.target).closest(".modal").length &&
            !$(e.target).closest(".card_img1").length
        ) {
            $(".card_img1").css({
                transform: "rotateY(0deg) translateX(50%)",
                opacity: "1",
            });
            setTimeout(function () {
                $(".card_img_cont1").stop().css({
                    transform: "translateX(-50%) rotateY(-180deg)",
                });
            });
        }

        if (
            // !$(e.target).closest(".modal").length &&
            !$(e.target).closest(".card_img2").length
        ) {
            $(".card_img2").css({
                transform: "rotateY(0deg) translateX(-50%)",
                opacity: "1",
            });
            setTimeout(function () {
                $(".card_img_cont2").stop().css({
                    transform: "translateX(-50%) rotateY(-180deg)",
                });
            }, 0);
        }

        if (
            // !$(e.target).closest(".modal").length &&
            !$(e.target).closest(".card_img3").length
        ) {
            $(".card_img3").css({
                transform: "rotateY(0deg) translateX(-50%)",
                opacity: "1",
            });
            setTimeout(function () {
                $(".card_img_cont3").stop().css({
                    transform: "translateX(-50%) rotateY(-180deg)",
                });
            }, 0);
        }
    });
});
