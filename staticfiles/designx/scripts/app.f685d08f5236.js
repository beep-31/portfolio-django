
//smooth scroll

let nav = $("#nav");

$("[data-scroll]").on('click', function(event){
    event.preventDefault();
    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    console.log(elementOffset);
    nav.removeClass('show');
    $("html, body").animate({
        scrollTop: elementOffset - 70
    }, 700);
});


//fixed header
let header = $('#header');
let intro = $('#intro');
let introHeight = intro.innerHeight();
let scrollPos = $(window).scrollTop();

checkScroll();

$(window).on("scroll resize", function(){
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introHeight);
});

function checkScroll(scrollPos, introHeight){
    if(scrollPos > introHeight){
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
}

//nav Button

let navButton = $("#navButton");
navButton.on('click', function(event){
    event.preventDefault();
    nav.toggleClass("show");
})


//owl carousel(slider)
const responsive = {
    0:{
        items: 1
    },

    425:{
        items: 1
    },

    768:{
        items: 2
    },

    800:{
        items: 3
    }


};

$('.owl-carousel').owlCarousel({
    dots:true,
    infinite: false,
    slidesToShow: 1,
    items: 3,
    margin: 10,
    responsive: responsive
});



//view more or less function

$('#view').click(function(){
    var elem = $('#view').text();
    if(elem == 'View More'){
        $('#view').text('View Less');
        $('.view-more').slideDown();
    } else{
        $('#view').text("View More");
        $('.view-more').slideUp();
    }
});