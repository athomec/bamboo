$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------頁籤設定------------------------
	$('.js-toggle-menu').find(".js-toggle-button").click(function () {
		$(this).toggleClass("active");
		$(this).siblings('.js-toggle-button').removeClass('active');

	});

	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});

	//----------------gotop功能-----------------
	$(".gotop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度
	});

	//跳閱書籤設定
	$(".js-link-bookmark").click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top - 150 }, 300);
		return false;
	});
	//手機選單設定
	$(".js-navbar-nav").find(".js-link-bookmark").click(function () {
		$(".js-toggler").click();
		return false;
	});
	

	RESIZE();

	$(window).resize(function () {
		RESIZE();
	});

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();

		if (WINDOW < 768) {
			$('.navbar-toggler').addClass("js-toggler");
		}else{
			$('.navbar-toggler').removeClass("js-toggler");
		}
	}


})//JS尾端	