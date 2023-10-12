// JavaScript 코드
const slideshow = document.querySelector('.slideshow');
const container = slideshow.querySelector('.slideshow-container');
const items = container.querySelectorAll('.slideshow-item');
const prevBtn = slideshow.querySelector('.slideshow-prev');
const nextBtn = slideshow.querySelector('.slideshow-next');
let currentIndex = 0;
let intervalId;

// 이전 슬라이드로 이동
function prevSlide() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add('active');
}

// 다음 슬라이드로 이동
function nextSlide() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
}

// 슬라이드를 자동으로 이동시키는 함수
function startSlideShow() {
  intervalId = setInterval(nextSlide, 2000);
}

// 이전/다음 버튼 이벤트 처리
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 슬라이드 쇼 시작
startSlideShow();
