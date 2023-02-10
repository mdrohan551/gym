$(function(){
'use stict';
//banner part start

$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });
  new VenoBox({
    selector: '.video',
    spinner:'grid'
});
//menu fix
var  scil = $('.main_menu').offset().top;


$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > scil){
    $('.main_menu').addClass('manu_fix');
  }
 
else{
  $('.main_menu').removeClass('manu_fix')
}


});
new VenoBox({
  selector: '.amar',
  numeration: true,
  infinigall: true,
  share: false,
  spinner: 'grid',
  spinColor:'red',
});

new VenoBox({
  selector: '.video',
  sound:true
});

//slide with test
$('.slider_test').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
  ]
});
// $(window).scroll(function () {
//   var scroling = $(this).scrollTop();
//   if (scroling > scil) {
//     $('.main_menu').addClass('manu_fixd');

//   } else {
//     $('.main_menu').removeClass('manu_fixd')
//   }



//pre load
$(window).on('load', function () {
  $('.loading').delay(500).fadeOut();
});


//counter
// counter up
$('.fast').counterUp({
  delay: 10,
  time: 100000,
});



//class


$('.slider_2').slick({
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  centerPadding: '1px',
  centerMode: true,
  arrows: true,
  prevArrow: '<i class="fas fa-chevron-left prev_arro"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arro"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
        dots:false
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        arrows:false,
      }
    }
  ]
  
});

	
		// team slider
    $('.slider_team').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
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
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
      ]
    });

});