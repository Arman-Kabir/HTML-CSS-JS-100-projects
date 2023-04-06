
gsap.registerPlugin(ScrollTrigger);


gsap.to(".square", {
    x: 700,
    duration:3,
    // scrollTrigger:".square2",
    scrollTrigger:{
        trigger:".square",
        // start:400,
        start:"top 40%",
        markers:true
    },
})