// image slide
setInterval(function(){

  $('.fig1 ul').animate({
    left : '-1920px'
  }, 600, function(){
    $('.fig1 ul').append($('.fig1 ul li').eq(0));
    $('.fig1 ul').css({ left : 0 });
  });

},3000);

// popup menu
