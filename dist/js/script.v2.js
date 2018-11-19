$(function () {
   // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  })

  // smooth scrolling
  $('a[href^="#"]').bind('click', function (event) {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // full screen background image
  $(function() {
    $(window).on('load resize', function() {
      $('.fill-screen').css('height', window.innerHeight);
    });
  });

  new WOW().init();

  // validation form --------------------------------------------------------------------
  const $formContact = $('#contact');
  const $formModal = $('#registration');

  const validate = event => {
    // alert('click -> validate() start');
      var formValid = true;
      var $formInputs = event.data.form.find('input');
      $formInputs.each(function () {
        //найти предков, которые имеют класс .form-group, для установления success/error
        var formGroup = $(this).parents('.form-group'),
          fas = formGroup.find('.form-control-feedback'),
          helpBlock = formGroup.find('.help-block');

        //для валидации данных используем HTML5 функцию checkValidity
        if (this.checkValidity()) {
          formGroup.addClass('has-success').removeClass('has-error');
          fas.addClass('fa-check').removeClass('fa-backspace');
          helpBlock.addClass('hidden');
        } else {
          formGroup.addClass('has-error').removeClass('has-success');
          fas.addClass('fa-backspace').removeClass('fa-check');
          helpBlock.removeClass('hidden');
          
          //отметить форму как невалидную
          formValid = false;
        }
      });

      if (formValid) {
        //скрыть модальное окно
        $('#registrationModal').modal('hide');
        //отобразить сообщение об успехе
        // alert('Form valid');
      }else{
        // alert('Form not valid');
      }
  };

  // smtpjs - send form on email ----------------------------------------------------
  const token = "2fbcb4f3-4a74-45e7-9acb-7799eb6e3ae9",
    dogGm = '@gmail.com',
    gebberish = 'bl100yuriySefgulevskiydp';

  const fr = gebberish.slice(5,10).concat('.', gebberish.slice(-11,-2)),
    t1 = gebberish.slice(0,5).concat('.', gebberish.slice(-2)),
    t2 = gebberish.slice(10,13).concat('.', gebberish.slice(5,10));

  const sendForm = event => {
    event.preventDefault();
    // alert('submit -> sendForm() start');

    var $curForm = event.data.form;
    var $formInputs = $curForm.find('input, select, textarea');
    
    var messages = [];

    // var serializeData = $($curForm).serializeArray();
    // console.log(serializeData);

    $formInputs.each(function() {
      messages.push( $(this).val() );
    });
    console.log(messages);
    smtpJS(messages, $curForm);
  };

  const smtpJS = (messages, form) => {
    try {
      Email.send(
        `${fr}${dogGm}`,
        // `${t1}${dogGm}`,
        `${t1}${dogGm},${t2}${dogGm}`,
        `${messages[0]} ${messages[1]} ${messages[3]} course`,
        // `${messages[0]} ${messages[1]} ${messages[2]}. ${messages[3]}. ${messages[4]}`,
        `${messages.join()}`,
        { 
          token, 
          callback: function done(msg) {
            alert(`Спасибо за сообщение. Мы свяжемся с Вами в ближайшее время.`);
          }
        }
      );

      // clear form inputs and textarea
      form.find('input, textarea').val('')
      .parents('.form-group').removeClass('has-success')
      .find('.form-control-feedback').removeClass('fa-check') ;
    } catch (e) {
      alert("Erro");
    }
  
  };

  $('#btn-contact-send').on('click', { form: $formContact }, validate);
  $formContact.on('submit', { form: $formContact }, sendForm);

  $('#btn-registration-send').on('click', {form: $formModal}, validate);
  $formModal.on('submit', {form: $formModal}, sendForm);
});