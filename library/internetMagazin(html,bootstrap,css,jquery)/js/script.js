$(document).ready(function () {
    $("#navbar2__buttons_menu").click(function (e) {
        e.preventDefault();
        $("#navbar2__menu").toggleClass("active");
    });
});
var swiper = new Swiper('.swiper-container.swiper-container--intro', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr("data-filter");
        if (value == "all") {
            $(".filter").show("1000");
        } else {
            $(".filter").not("." + value).hide("3000");
            $(".filter").filter("." + value).show("3000");
        }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});
$(document).on('click', '.filter-button', function () { 
    $(this).addClass("show").siblings().removeClass("show");
});
$(document).ready(function(){
    $('.gallert__product').hover(
        function(){ 
            $(this).find('.portfolio__border_icons').toggleClass('d-none');
        }
    );
});

var swiper = new Swiper('.swiper-container.swiper-container--reviews', {
    navigation: {
        nextEl: '#baners__1_right',
        prevEl: '#baners__1_left',
    },
});
var mySwiper2 = new Swiper('.swiper-container.swiper-container-s2', {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: '#portfolio_right',
        prevEl: '#portfolio_left',
    },
    breakpoints: {
        700: {
          slidesPerView: 2,
        }
    }
});
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
}