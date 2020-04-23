// Custom JS here

// Header animations
gsap.from(".navbar-brand", { duration: 5, x: 50 });
gsap.from("#navbarNavDropdown", { duration: 5, x: 50 });


// Hero h1 animation
gsap.from(".fadeIn", {
    duration: 1,
    opacity: 0
})

// the animation to use
const tl = gsap.timeline({ paused: true });
tl.from(".scroll", { scale: 0.7, autoAlpha: 0 });

// The start and end positions in terms of the page scroll
const startY = innerHeight / 10;
const finishDistance = innerHeight / 5;

// Listen to the scroll event
document.addEventListener("scroll", function () {
    // Prevent the update from happening too often (throttle the scroll event)
    if (!requestId) {
        requestId = requestAnimationFrame(update);
    }
});

update();

function update() {
    // Update our animation
    tl.progress((scrollY - startY) / finishDistance);

    // Let the scroll event fire again
    requestId = null;
}
