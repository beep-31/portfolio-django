window.addEventListener('DOMContentLoaded', function(){

    //tab-content script
    'use strict';

    let header = document.getElementsByClassName('tab-header-element'),
        content = document.querySelectorAll('#element'),
        tab_header = document.querySelector('.tab-header');

    function hideContent(n){
        for(let i = n; i<content.length;i++){
            content[i].classList.remove('show');
            content[i].classList.add('hide');
        }
    }

    hideContent(1);

    function headerActive(n){
        for (let i = 0;i<header.length; i++){
            header[i].classList.remove('active');
        }
        header[n].classList.add('active');
    }

    function showTabContent(n){
        if(n==3){
            for(let i=0;i<content.length;i++){
                content[i].classList.remove('hide');
                content[i].classList.add('show');
            }
            
        }
        else if(content[n].classList.contains('hide')){
            content[n].classList.remove('hide');
            content[n].classList.add('show');
        }

        headerActive(n);
    }

    tab_header.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('tab-header-element')){
            for(let i=0; i<header.length;i++){
                if(target==header[i]){
                    if(i == 3){
                        showTabContent(3);
                        break;
                    }
                    else {
                        hideContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        }
    });
});