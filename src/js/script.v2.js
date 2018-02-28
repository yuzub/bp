$(function () {
  // full-page carousel
  var $item = $('.item'),
    $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image': 'url(' + $src + ')',
      'background-color': $color
    });
    $(this).remove();
  });

  $(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  // carousel
  // $('.carousel').carousel({
  //   interval: 6000
  // });

  // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  })

  // smooth scrolling
  $('nav a[href^="#"]').bind('click', function () {
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

  // parallax scrolling with stellar.js
  // $(window).stellar();
});