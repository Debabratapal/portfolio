$(document).ready(function() {
  var scrollItems = $('.scroll');
  scrollItems.click(function(e){
    e.preventDefault();
    let anchor = $(this).children();
    let link = anchor.attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    },1000)
        
  })
  
})




$(window).on('scroll', () =>{
  if($(window).scrollTop()){
    $('.nav__section').addClass('black')
  } else {
    $('.nav__section').removeClass('black')
  }
})

