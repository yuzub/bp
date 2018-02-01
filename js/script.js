$(function() {
  $(window).on('load resize', function() {
    $('.fill-screen').css('height', window.innerHeight - 91);
    // console.log(window.innerHeight);
  });

  // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  })

  // smooth scrolling
  $('nav a, .down-button a').bind('click', function() {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // show/hide course content
  $('#course-eng').click(_ => {
    // alert('clicked on couse-eng');
    $('#course-content-eng').toggle();
    event.preventDefault();
  });
});