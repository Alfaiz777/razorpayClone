document.addEventListener("DOMContentLoaded", () => {

  // HERO CAROUSEL
  let slides = document.querySelectorAll('.hero-slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
    });
  }

  document.getElementById('carousel-left').onclick = function () {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  document.getElementById('carousel-right').onclick = function () {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  showSlide(current);


  // SOLUTION TABS
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      tabBtns.forEach(b => {
        b.classList.remove('text-[#192839]', 'border-b-2', 'border-[#009E5C]');
        b.classList.add('text-[#768EA7]');
      });

      tabContents.forEach(tc => tc.classList.add('hidden'));

      btn.classList.add('text-[#192839]', 'border-b-2', 'border-[#009E5C]');
      btn.classList.remove('text-[#768EA7]');

      document.querySelector(`.tab-content[data-tab="${btn.dataset.tab}"]`)
        .classList.remove('hidden');
    });
  });


  // PRODUCT CAROUSEL
  const productSlides = document.querySelectorAll('.product-innovation-slide');
  const leftBtn = document.getElementById('product-carousel-left');
  const rightBtn = document.getElementById('product-carousel-right');
  let productCurrent = 0;

  function showProductSlide(index) {
    productSlides.forEach((slide, i) => {
      slide.classList.toggle('opacity-100', i === index);
      slide.classList.toggle('opacity-0', i !== index);
      slide.classList.toggle('pointer-events-auto', i === index);
      slide.classList.toggle('pointer-events-none', i !== index);
    });
  }

  leftBtn.addEventListener('click', () => {
    productCurrent = Math.max(0, productCurrent - 1);
    showProductSlide(productCurrent);
  });

  rightBtn.addEventListener('click', () => {
    productCurrent = Math.min(productSlides.length - 1, productCurrent + 1);
    showProductSlide(productCurrent);
  });

  showProductSlide(productCurrent);

});
