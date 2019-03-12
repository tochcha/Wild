$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

// Zoom gallery
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function (item) {
			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img');
		}
	}

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}); //fade-zoom

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}); //fade-slide

$('.test-popup-link').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	zoom: {
		enabled: false, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function (openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */

var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});

/*$('.coupon .buttonbox').hover(
	function () {
		$('.coupon__box').addClass('hover')
	},
	function () {
		$('.coupon__box').removeClass('hover')
	}
);*/

$('.prefooter__text-button span').click(function () {
	$('.prefooter__text').toggleClass("heightauto");
	$('.prefooter__text-button span').toggleClass("dn");
});

$(function(){
  $("#phone").mask("+7(999) 999-99-99");
});

/*scroll id*/
$('.js-scroll').click(function() {
	var target = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 1000);
	return false;
});
/*scroll id*/



$(window).bind('load', handler);
$(window).bind('resize', handler);
