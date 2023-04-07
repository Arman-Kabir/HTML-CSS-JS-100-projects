
gsap.registerPlugin(ScrollTrigger);

// video -> 1 & 2
// gsap.to(".square", {
//     // x: 500,
//     duration: 3,
//     // scrollTrigger: ".square2",
//     scrollTrigger: {
//         trigger: ".square",
//         // start:400,
//         start: "top 40%",
//         // end:"center 20%",
//         end:()=>`+=${document.querySelector(".square").offsetHeight}`,
//         markers: true,
//         // markers: {
//         //     startColor:"purple",
//         //     endColor:"fuchsia",
//         //     fontSize:"4rem",
//         //     indent:200,
//         // },
//         toggleClass:"red",
//     },
// })


// vdo-3 ==> Toggle Actions
gsap.to(".square", {
    x: 1000,
    duration: 8,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%",
        end:"top 40%",
        // toggleActions --> play restart pause resume complete none, 
        toggleActions:"restart pause resume complete",
        //            onEnter  onLeave   onEnterBack   onLeaveBack

        markers: {
            startColor:"purple",
            endColor:"fuchsia",
            fontSize:"3rem",
            // indent:200,
        },
        toggleClass:"red",
    },
})