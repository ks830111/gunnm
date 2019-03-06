$(document).ready(function () {

    // 마우스 오버
    $('article').on('mouseenter', function () {
        // 비디오 재생
        var vid = $(this).find('video').get(0);
        vid.currentTime = 0; // 재생 위치를 처음으로 설정
        vid.play(); // 재생

        $(this)
            .stop()
            .animate({ width: '35%' }, 500, function () {

                // 부모 함수가 종료후 실행(콜백함수)
                $(this)
                    .find('h3')
                    .stop()
                    .animate({ right: '10px' }, 200);
                $(this)
                    .find('p')
                    .stop()
                    .animate({ right: '10px' }, 500);
            })


        $(this)
            .find('video')
            .stop()
            .animate({ opacity: 0.9 }, 1000)
    })

    // 마우스 아웃
    $('article').on('mouseleave', function () {
        $(this)
            .stop()
            .animate({ width: '12%' }, 700)

        $(this)
            .find('video')
            .stop()
            .animate({ opacity: 0 }, 2000)

        $(this)
            .find('h3')
            .stop()
            .animate({ right: '-310px' }, 200)

        $(this)
            .find('p')
            .stop()
            .animate({ right: '-310px' }, 500)
    })

});