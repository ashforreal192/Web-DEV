const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })


    tl.to(".boundingelem", {
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2
    })


    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
}


function circleChapta() {

    var xscale = 1
    var yscale = 1

    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function (dets) {
        var xdiff = dets.clientX - xprev
        var ydiff = dets.clientY - yprev

        xprev = dets.clientX
        yprev = dets.clientY

        xscale = gsap.util.clamp(0.8, 1.2, xdiff)
        yscale = gsap.util.clamp(0.8, 1.2, ydiff)
    })
}
circleChapta();


function MouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}


MouseFollower();
firstPageAnim();