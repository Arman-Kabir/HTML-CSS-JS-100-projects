
gsap.registerPlugin(ScrollTrigger);


gsap.to(".square", {
    // x: 500,
    duration: 3,
    // scrollTrigger: ".square2",
    scrollTrigger: {
        trigger: ".square",
        // start:400,
        start: "top 40%",
        // end:"center 20%",
        end:()=>`+=${document.querySelector(".square").offsetHeight}`,
        markers: true,
        // markers: {
        //     startColor:"purple",
        //     endColor:"fuchsia",
        //     fontSize:"4rem",
        //     indent:200,
        // },
        toggleClass:"red",
    },
})