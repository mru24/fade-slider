jQuery(function($){

  class headerSlider {
		constructor() {
			this.slider = $('.page-header .slider');
			this.dots = $('.page-header .slider-dots li.slider-dot');
			this.sliderInterval;
			$('.page-header .slider .hidden').hide();
		}
		init() {
			console.log('slider init',this.slider);
			this.slider.length>0?this.sliderAction():'';
			this.dots.length>0?this.dotsClick():'';
		}
		sliderAction() {
			this.sliderInterval = setInterval(() => {
				this.sliderSlides();
				this.sliderDots();
			},9000);
		}
		sliderSlides() {
			this.slider.children().each((i,el) => {
				if($(el).hasClass('hidden')) {
					$(el)
						.fadeIn(1000)
						.removeClass('hidden');
				} else {
					$(el)
						.fadeOut(1000)
						.addClass('hidden');
				}
			})
		}
		sliderDots() {
			this.dots.each((i,el) => {
				if($(el).hasClass('active')) {
					$(el).removeClass('active');
				} else {
					$(el).addClass('active');
				}
			});
		}
		dotsClick() {
			this.dots.each((i,el) => {
				$(el).on('click',(e) => {
					clearInterval(this.sliderInterval);
					this.sliderSlides();
					this.sliderDots();
					this.sliderAction();
				})
			})
		}
	}
	var hs = new headerSlider();
	hs.init();



});
