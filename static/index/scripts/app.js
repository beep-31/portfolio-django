window.addEventListener('DOMContentLoaded', function(){
    let element = document.querySelector('#writing_text');
    var typed = new Typed( element, {
        strings: ['am a front-end web developer', 'love coding so much', 'am ready to solve your problems'],
        typeSpeed: 30,
        backSpeed: 40,
        // bindInputFocusEvents: true,
        loop: false,
        stringsElement: null,
        contentType: 'text',
        onComplete: function(){
            element.style.color = "#fff";
            element.style.backgroundColor = "#e67e22";
            let cursor = document.querySelector(".typed-cursor");
            cursor.classList.remove("typed-cursor--blink");
        }

    });

    $('[data-scroll]').on('click', function(event){
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });
    let mail_input = document.querySelector('#input-mail')
        mail_label = document.querySelector('#mail-label')
        textarea = document.querySelector('#input-text')
        form = document.querySelector('#form');

    mail_input.addEventListener('focusout', function(){
        if(!mail_input.checkValidity()){
            mail_input.style.borderColor = 'red';
            mail_label.style.color = 'red';
            mail_label.style.top = '-10px';
            mail_label.style.fontSize = '12px';
        } else{
            mail_input.style.borderColor = '#fff';
            mail_label.style.color = '#fff';
            mail_label.style.top = '-10px';
            mail_label.style.fontSize = '12px';
        } 

        if(mail_input.value == ''){
            mail_input.style.borderColor = '#fff';
            mail_label.style.color = '#fff';
            mail_label.style.top = '0px';
            mail_label.style.fontSize = '16px';
        }
    });

   mail_input.addEventListener('focus', function(){
        mail_input.style.borderColor = '#ee760c';
        mail_label.style.color = '#ee760c';
        mail_label.style.top = '-10px';
        mail_label.style.fontSize = '12px';
   });

   form.addEventListener('submit' ,function(){
        alert('Your message was successfully send!');
   });



});