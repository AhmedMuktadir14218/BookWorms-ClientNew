// jquery start
$(document).ready(function(){

  // password show hide
	const password = $('.u_pass');

	$('.eye').click(function(){
		if(password.prop('type') == 'password') {
			$(this).removeClass('fa-eye-slash');
			password.attr('type','text');
		}else{
			$(this).addClass('fa-eye-slash');
			password.attr('type','password');

		}

	});

	const pass = $('.s_pass');

	$('.eye2').click(function(){
		if(pass.prop('type') == 'password') {
			$(this).removeClass('fa-eye-slash');
			pass.attr('type','text');
		}else{
			$(this).addClass('fa-eye-slash');
			pass.attr('type','password');

		}

	});


	$('.side_menu').click(function(){

		$(".c_body").toggleClass("side_padding");
		$(".sidebar").toggleClass("sm_sidebar");


	});


	// slick slider

	$('.best_slider').slick({
  dots: true,
  infinite: true,
  dots:false,
  arrows: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  // header

$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('header').addClass('blur');
    }
    else{
      $('header').removeClass('blur');
    }
    
  });

// menu
$(".c_nav").click(function(){
    $("header").toggleClass("bg-light");
  });


});



















