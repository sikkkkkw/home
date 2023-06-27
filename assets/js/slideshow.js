function slideShow() {
  const images = document.querySelectorAll('.slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 2000); // 이미지가 2초마다 넘어감 (여기서 2000은 밀리초 단위로 지정합니다.)
}

slideShow();