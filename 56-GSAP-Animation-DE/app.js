const navButton = document.querySelector('.nav-button');

const navOpen = document.querySelector('.nav-open');

// const tween = TweenLite.to(object,time,{properties-animate})
// const tween = TweenLite.to(".cover",2,{
//     width:"40%"
// });

const tl = new TimelineLite({ paused: true });

tl.to('.cover', 1, {
    width:'60%',
    ease:Power2.easeOut
})
.to('nav',1,{
    height:'100%',
    ease:Power2.easeOut
});

navButton.addEventListener('click',()=>{
    tl.play();
});