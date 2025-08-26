//slide buttons action
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

//icons animations
const iconSets = [
  [
    '<i class="fa-solid fa-graduation-cap text-2xl text-[#223250]"></i>',
    '<i class="fa-regular fa-message text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-briefcase-medical text-2xl text-[#223250]"></i>',
    '<i class="fa-regular fa-file-code text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-lock text-2xl text-[#223250]"></i>',
  ],
  [
    '<i class="fa-solid fa-chart-pie text-2xl text-[#223250]"></i>',
    '<i class="fa-regular fa-file-code text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-cart-shopping text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-house text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-play text-2xl text-[#223250]"></i>',
  ],
  [
    '<i class="fa-solid fa-cart-shopping text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-book-open text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-play text-2xl text-[#223250]"></i>',
    '<i class="fa-regular fa-message text-2xl text-[#223250]"></i>',
    '<i class="fa-solid fa-location-dot text-2xl text-[#223250]"></i>'
  ],
];

let currentSet = 0;
const iconsDiv = document.getElementById('industry-icons');

function showIcons(setIndex, animateIn = true) {
  iconsDiv.innerHTML = iconSets[setIndex].join('');
  iconsDiv.classList.remove('opacity-0', 'translate-y-8');
  if (animateIn) {
    setTimeout(() => {
      iconsDiv.classList.remove('opacity-0', 'translate-y-8');
      iconsDiv.classList.add('opacity-100', 'translate-y-0');
    }, 10);
  } else {
    iconsDiv.classList.add('opacity-100', 'translate-y-0');
  }
}

// Initial state
iconsDiv.classList.add('opacity-100', 'translate-y-0');
showIcons(currentSet, false);

setInterval(() => {
  // Animate out
  iconsDiv.classList.remove('opacity-100', 'translate-y-0');
  iconsDiv.classList.add('opacity-0', '-translate-y-8');
  setTimeout(() => {
    // Switch set and animate in
    currentSet = (currentSet + 1) % iconSets.length;
    showIcons(currentSet, true);
  }, 500); // match duration-500
}, 3000);

//Card tabs switvhing Solutions sections
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Remove active classes
    tabBtns.forEach(b => b.classList.remove('text-[#192839]', 'border-b-2', 'border-[#009E5C]'));
    tabBtns.forEach(b => b.classList.add('text-[#768EA7]'));
    tabContents.forEach(tc => tc.classList.add('hidden'));

    // Add active classes to clicked tab
    btn.classList.add('text-[#192839]', 'border-b-2', 'border-[#009E5C]');
    btn.classList.remove('text-[#768EA7]');
    document.querySelector(`.tab-content[data-tab="${btn.dataset.tab}"]`).classList.remove('hidden');
  });
});

//product innovation cards/slides
const productSlides = document.querySelectorAll('.product-innovation-slide');
const leftBtn = document.getElementById('product-carousel-left');
const rightBtn = document.getElementById('product-carousel-right');
let productCurrent = 0;

function showProductSlide(index) {
  productSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('opacity-100', 'pointer-events-auto', 'z-10');
      slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
    } else {
      slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      slide.classList.remove('opacity-100', 'pointer-events-auto', 'z-10');
    }
  });

  // Show/hide buttons as before
  if (index === 0) {
    leftBtn.style.display = 'none';
    rightBtn.style.display = '';
  } else if (index === productSlides.length - 1) {
    leftBtn.style.display = '';
    rightBtn.style.display = 'none';
  } else {
    leftBtn.style.display = '';
    rightBtn.style.display = '';
  }
}

leftBtn.addEventListener('click', () => {
  if (productCurrent > 0) {
    productCurrent--;
    showProductSlide(productCurrent);
  }
});
rightBtn.addEventListener('click', () => {
  if (productCurrent < productSlides.length - 1) {
    productCurrent++;
    showProductSlide(productCurrent);
  }
});

// Initialize
showProductSlide(productCurrent);