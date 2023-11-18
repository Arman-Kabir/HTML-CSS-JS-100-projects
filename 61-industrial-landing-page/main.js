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