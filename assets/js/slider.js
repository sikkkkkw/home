$(document).ready(function() {
    var $imgHolder = $('#imgholder');
    var $imgs = $imgHolder.find('li');
    var imgCount = $imgs.length;
    var currentImg = 0;
    var slideInterval = 3000; // 이미지 전환 간격 (밀리초)

    function slideImages() {
        $imgs.eq(currentImg).removeClass('active');
        currentImg = (currentImg + 1) % imgCount;
        $imgs.eq(currentImg).addClass('active');
    }

    $imgs.eq(currentImg).addClass('active');
    setInterval(slideImages, slideInterval);
});
