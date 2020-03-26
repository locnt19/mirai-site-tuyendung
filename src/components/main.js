$(document).ready(function () {
	// all script write here
	BackToTop();
	SlideSwiper();
	ToggleUserNav();
	ShowHideSearchRecent();
	FilterListViecLam();
	ResetFilterListViecLam();
	ViewMore();
	InfoBox_Event();

	LazyLoadFunction();
});

function LazyLoadFunction() {
	// function logElementEvent(eventName, element) {
	// 	console.log(Date.now(), eventName, element.getAttribute("data-src"));
	// }
	// var callback_enter = function (element) {
	// 	logElementEvent("🔑 ENTERED", element);
	// };
	// var callback_exit = function (element) {
	// 	logElementEvent("🚪 EXITED", element);
	// };
	// var callback_loading = function (element) {
	// 	logElementEvent("⌚ LOADING", element);
	// };
	// var callback_loaded = function (element) {
	// 	logElementEvent("👍 LOADED", element);
	// };
	// var callback_error = function (element) {
	// 	logElementEvent("💀 ERROR", element);
	// 	element.src = `https://via.placeholder.com/256/?text=Not found`;
	// };
	// var callback_finish = function () {
	// 	logElementEvent("✔️ FINISHED", document.documentElement);
	// };
	var lazyLoad = new LazyLoad({
		elements_selector: ".lazy",
		// Assign the callbacks defined above
		// callback_enter: callback_enter,
		// callback_exit: callback_exit,
		// callback_loading: callback_loading,
		// callback_loaded: callback_loaded,
		// callback_error: callback_error,
		// callback_finish: callback_finish
	});
	lazyLoad.update();
}

function BackToTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.b2t').fadeIn()
		} else $('.b2t').fadeOut()
	})
	$('.b2t').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})
}

function ToggleUserNav() {
	$('.user-nav_hamburger').click(function () {
		$(this).toggleClass('open');
		$('.user-nav').toggleClass('open');
	})
};

function ShowHideSearchRecent() {
	$('.banner-lc_search--input').on('focusin', function () {
		$('.banner-lc_search--recent').addClass('show');
	});
	$('.banner-lc_search--close').on('click', function () {
		$('.banner-lc_search--recent').removeClass('show');
	});
};

function SlideSwiper() {
	const banner_lc = new Swiper('.banner-lc .swiper-container', {
		effect: 'fade',
		lazy: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
	const job_totnhat = new Swiper('.job.totnhat .swiper-container', {
		spaceBetween: 32,
		lazy: true,
		loop: true,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		speed: 3000,
		pagination: {
			el: '.job.totnhat .job-pagination',
			clickable: true
		}
	});
	const job_banner = new Swiper('.job.banner .swiper-container', {
		loop: true,
		lazy: true,
		autoplay: {
			delay: 12000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.job-btn_next',
			prevEl: '.job-btn_prev',
		},
		speed: 1000
	});
	const vl_company = new Swiper('.vl-company .swiper-container', {
		spaceBetween: 16,
		lazy: true,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		speed: 1000,
		pagination: {
			el: '.vl-company_pagination',
			clickable: true
		}
	});
};

function FilterListViecLam() {
	$('.vl-tree_content input:radio').on('change', function () {
		$('.vl-tree_btn--removeFilter').addClass('d-flex');
		// if ($(this).is(':checked')) {
		// 	console.log('filter');
		// 	$('#vieclam_list').data('list').filter(this.value);
		// }
	});
}

function ResetFilterListViecLam() {
	$('.vl-tree_btn--removeFilter').click(function (e) {
		e.preventDefault();
		console.log('reset filters');
		// $('#vieclam_list').data('list').filter('');
		$('.vl-tree_content input:radio').prop('checked', false);
		$('.vl-tree_btn--removeFilter').removeClass('d-flex');
	});
}

function ViewMore() {
	var dsnnListContainer = $('.dsnn-list2');
	var dsnnListItem = $('.dsnn-list2 li');
	ViewMore_Items('hide', dsnnListItem, 4, dsnnListItem.length);
	ViewMore_HandlerEvent(dsnnListContainer, dsnnListItem, 4);

	var vlTreeListDiaDiemContainer = $('.vl-tree_list.dia-diem');
	var vlTreeListDiaDiemItem = $('.vl-tree_list.dia-diem li');
	ViewMore_Items('hide', vlTreeListDiaDiemItem, 4, vlTreeListDiaDiemItem.length);
	ViewMore_HandlerEvent(vlTreeListDiaDiemContainer, vlTreeListDiaDiemItem, 4);
}

function ViewMore_Items(type, array, start, end) {
	if (type === 'show') {
		for (var i = start; i < end; i++) {
			$(array[i]).show();
		}
	}
	if (type === 'hide') {
		for (var i = start; i < end; i++) {
			$(array[i]).hide();
		}
	}
}

function ViewMore_HandlerEvent(container, array, number) {
	var button = $("<a class='viewmore' href>Xem thêm</a>");
	array.length <= number ? null : button.appendTo($(container));
	button.click(function (e) {
		e.preventDefault();
		switch ($(button).text()) {
			case 'Xem thêm':
				ViewMore_Items('show', array, number, array.length);
				$(button).text('Thu gọn');
				break;
			case 'Thu gọn':
				ViewMore_Items('hide', array, number, array.length);
				$(button).text('Xem thêm');
				break;
			default:
				break;
		}
	})
}

function InfoBox_Event() {
	$('.infobox .infobox-btn_close').on('click', function () {
		$(this).parents('.infobox').remove();
	});
}