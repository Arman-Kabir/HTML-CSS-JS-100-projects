
// window.scrollBy(0,2000);
// window.scroll;
// const goTop = document.getElementById("goTop");
// goTop.addEventListener('click',()=>{
//     window.scrollTo(0,0);
// });
// console.log(goTop);

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
};

// header container
ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption
});

ScrollReveal().reveal(".header__container .btn",{
    ...scrollRevealOption,
    delay:500
});

// about container
ScrollReveal().reveal(".about__item",{
    ...scrollRevealOption,
    interval:500,
});

// stats container
ScrollReveal().reveal(".stats__image img",{
    ...scrollRevealOption,
    origin:"right",
    interval:500,
});

ScrollReveal().reveal(".stats__card",{
    interval:500,
    duration:500,
    delay:1000,
});

// blog container
ScrollReveal().reveal(".blog__card",{
    ...scrollRevealOption,
    interval:500,
})