$(document).ready(function () {
	// all script write here
	SlideSwiper();
	ToggleUserNav();
	ShowHideSearchRecent();
	FilterListViecLam();
	ResetFilterListViecLam();
	ViewMoreViecLamTree();
});

function ToggleUserNav() {
	$('.user-nav_hamburger').click(function () {
		$(this).toggleClass('open');
		$('.user-nav').toggleClass('open');
	})
};

function ShowHideSearchRecent() {
	$('.banner-lc_search--input input').on('focusin', function () {
		$('.banner-lc_search--recent').addClass('show');
	});
	$('.banner-lc_search--input input').on('focusout', function () {
		$('.banner-lc_search--recent').removeClass('show');
	});
};

function SlideSwiper() {
	const banner_lc = new Swiper('.banner-lc .swiper-container', {
		effect: 'fade',
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
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		speed: 2500,
		pagination: {
			el: '.job.totnhat .job-pagination',
			clickable: true
		}
	});
	const job_banner = new Swiper('.job.banner .swiper-container', {
		loop: true,
		autoplay: {
			delay: 8000,
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
		if ($(this).is(':checked')) {
			console.log('filter');
			$('#vieclam_list').data('list').filter(this.value);
		}
	});
}

function ResetFilterListViecLam() {
	$('.vl-tree_btn--removeFilter').click(function (e) {
		e.preventDefault();
		console.log('reset filters');
		$('#vieclam_list').data('list').filter('');
		$('.vl-tree_content input:radio').prop('checked', false);
		$('.vl-tree_btn--removeFilter').removeClass('d-flex');
	});
}

function ViewMoreViecLamTree() {
	$('.vl-tree_list li').length < 3 ? $('.vl-tree_btn--more').hide() : null;
	$('.vl-tree_btn--more').click(function (e) {
		e.preventDefault();
		$('.vl-tree_list.dia-diem').toggleClass('viewmore');
		$('.vl-tree_list.dia-diem').hasClass('viewmore') ? $(this).text('Thu gọn') : $(this).text('Xem thêm');
	});
}