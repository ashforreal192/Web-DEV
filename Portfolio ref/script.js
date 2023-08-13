const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function MouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circleScroll").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
MouseFollower()