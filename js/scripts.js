/*- field-input -*/
$('.field-input input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
});
 
$('.field-input input').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});

/*- direction-tabs -*/
const directionTabs = document.querySelectorAll('.direction-tabs [data-tab-target]');
const directionTabContents = document.querySelectorAll('.direction-tabs [data-tab-content]');

directionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        directionTabContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        directionTabs.forEach(tab => {
          tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});

/*- gallery-slider -*/
var swiper = new Swiper('.gallery-slider .swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.gallery-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-slider .swiper-button-next',
        prevEl: '.gallery-slider .swiper-button-prev',
    },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    369: {
      slidesPerView: 2,
      spaceBetween: 19,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }, 
});

/*- teachers-slider -*/
var swiper = new Swiper('.teachers-slider .swiper', {
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.teachers-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.teachers-slider .swiper-button-next',
        prevEl: '.teachers-slider .swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        369: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        680: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    }, 
});

/*- reviews-slider -*/
var swiper = new Swiper('.reviews-slider .swiper', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    pagination: {
        el: '.reviews-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews-slider .swiper-button-next',
        prevEl: '.reviews-slider .swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        369: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
    }, 
});

/*- news-slider -*/
var swiper = new Swiper('.news-slider .swiper', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    pagination: {
        el: '.news-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-slider .swiper-button-next',
        prevEl: '.news-slider .swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        369: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
    }, 
});

/*- courses-slider -*/
var swiper = new Swiper('.courses-slider .swiper', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 28,
    loop: true,
    pagination: {
        el: '.courses-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#courses-slider-arrows .swiper-button-next',
        prevEl: '#courses-slider-arrows .swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        369: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
    }, 
});

/*- questions-accordion -*/
$('.questions-accordion__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- profile -*/
var siteToggle = $('.profile__name'),
    siteMenu= $('.profile__dropdown');

siteToggle.click(function(){
    siteToggle.toggleClass("show");
    siteMenu.toggleClass("show");
});

$(document).click(function (e) {
    if ( !siteMenu.is(e.target) && !siteToggle.is(e.target) && siteToggle.has(e.target).length === 0) {
        siteToggle.removeClass("show");
        siteMenu.removeClass('show');
    };
});


/*- account-tabs -*/
const accountTabs = document.querySelectorAll('.account-tabs [data-tab-target]');
const accountTabContents = document.querySelectorAll('.account-tabs [data-tab-content]');

accountTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        accountTabContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        accountTabs.forEach(tab => {
          tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});

/*- courses-catalog_ -*/
$('.courses-catalog .course:lt(3)').show();

$('#load-more').click(function() {
  event.preventDefault();
  var $hidden = $('.courses-catalog .course:hidden');
  $($hidden).slice(0, 3).fadeIn(800);
  if ($hidden.length == 3) {
    $('#load-more').addClass('gl-btn_hidden');
  }
});

/*- order-info -*/
$('.order-info__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- language-info -*/
$('.language-info__top-panel').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});