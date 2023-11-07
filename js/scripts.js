/*- field-input -*/
$('.field-input input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
});
 
$('.field-input input').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});

/*- field-textarea -*/
$('.field-textarea textarea').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
});
 
$('.field-textarea textarea').on('focusout', function() {
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

/*- video-reviews-slider -*/
var swiper = new Swiper('.video-reviews-slider .swiper', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    pagination: {
        el: '.video-reviews-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.video-reviews-slider .swiper-button-next',
        prevEl: '.video-reviews-slider .swiper-button-prev',
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


/*- interior-gallery -*/
const reviewsTabs = document.querySelectorAll('.reviews-nav [data-tab-target]');
const reviewsTabContents = document.querySelectorAll('.reviews-content [data-tab-content]');

reviewsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        reviewsTabContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        reviewsTabs.forEach(tab => {
          tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});

/*- training-steps -*/
$('.training-steps__item').click(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active'); 
    $('.training-steps__text').stop().removeClass('show');
    $('.training-steps__item.active .training-steps__text').stop().addClass('show');
});

/*- courses-catalog -*/
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

/*- drop-down -*/
$('.drop-down__header').click(function(){
    $(this).siblings('.filters').slideToggle();
    $(this).find('i').toggleClass('opened')
})

$('.filters .filter').click(function(){
    $(this).parent().slideToggle();
    $(this).parent().prev('.drop-down__header').find('i').toggleClass('opened');
    SelectedFilter($(this));
})

function SelectedFilter(el){
    el.siblings().removeClass('selected');
    el.addClass('selected');
    var filter_text = el.text();
    el.closest('.drop-down').find('.filter_selected').text(filter_text);
    console.log(`Filter ${filter_text} selected`);
}

$(document).ready(function() {
    $('.filters').hide();
    $('.filters').each(function () {
        SelectedFilter($(this).children().first());
    });
})

/*- chat-panel -*/
$('.chat-panel__icon').click(function(e) {
    $('.chat-panel__dropdown').addClass('show');
});

$('.chat-panel__close-btn').click(function(e) {
    $('.chat-panel__dropdown').removeClass('show');
});

/*- reviews-nav -*/
$('.reviews-nav__text-reviews').click(function(e) {
    $('.text-reviews-btn').removeClass('hidden');
    $('.video-reviews-btn').addClass('hidden');
});

$('.reviews-nav__video-reviews').click(function(e) {
    $('.text-reviews-btn').addClass('hidden');
    $('.video-reviews-btn').removeClass('hidden');
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,
    afterClose: function(modal){
        let videoframe = modal.openedWindow.querySelector('iframe');
        if(videoframe){
            videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    },        
});

/*- teachers__scroll -*/
var swiper = new Swiper(".teachers__scroll", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
    el: ".teachers__scroll .swiper-scrollbar",
    },
    mousewheel: true,
});

/*- file-input -*/
var $file = $('#text-file input'),
$label = $file.next('#text-file label'),
$labelText = $label.find('.file-input__text'),
$labelRemove = $('#text-file .file-input__delete'),
labelDefault = $labelText.text();
  
$file.on('change', function(event){
var fileName = $file.val().split( '\\' ).pop();
    if( fileName ){
        $labelText.text(fileName);
        $labelRemove.show();
    } 
else {
    $labelText.text(labelDefault);
    $labelRemove.hide();
    }
});
  
$labelRemove.on('click', function(event){
    $file.val("");
    $labelText.text(labelDefault);
    $labelRemove.hide();
});

/*- mov-input -*/
var $files = $('#mov-file input'),
$labels = $files.next('#mov-file label'),
$labelTexts = $labels.find('.file-input__text'),
$labelRemoves = $('#mov-file .file-input__delete'),
labelDefaults = $labelTexts.text();
  
$files.on('change', function(event){
var fileNames = $files.val().split( '\\' ).pop();
    if( fileNames ){
        console.log($files)
        $labelTexts.text(fileNames);
        $labelRemoves.show();
    } 
else {
    $labelTexts.text(labelDefaults);
    $labelRemoves.hide();
    }
});
  
$labelRemoves.on('click', function(event){
    $files.val("");
    $labelTexts.text(labelDefaults);
    $labelRemoves.hide();
    console.log($files)
});

/*- lesson-widget -*/
$('.lesson-widget').click(function () {
    if (!$(this).hasClass('active')) {
        $('.lesson-widget').removeClass('active');
        $('.lesson-widget__description').fadeOut(0);
        $(this).addClass('active')
        $(this).find('.lesson-widget__description').fadeIn()
    } 
    else {
        $('.lesson-widget').removeClass('active');
        $('.lesson-widget__description').fadeOut(0);
    }
});

/*- schedule-calendar -*/
var calendarSwiper = new Swiper('.schedule-calendar__slider', {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    allowTouchMove: false,
});

var tableSwiper = new Swiper('.schedule-slider', {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.schedule-calendar__right-arrow',
        prevEl: '.schedule-calendar__left-arrow'
    },
});

tableSwiper.controller.control = this.calendarSwiper;

/*- phone
$.mask.definitions['9'] = false;
$.mask.definitions['0'] = "[0-9]";
$("input[type='tel']").mask("8(000) 000-00-00");-*/
