// Custom JS here

/**
 * 
 * Animations on page load
 * 
 */

// Header animations
gsap.from(".navbar-brand", { duration: 5, x: 50 });
gsap.from("#navbarNavDropdown", { duration: 5, x: 50 });


// Hero h1 animation
gsap.from(".fadeIn", {
    duration: 1,
    opacity: 0
})


/**
 * 
 * Interaction Animations
 * 
 */

const hoverGrow = document.querySelectorAll('.grow')

hoverGrow.forEach(el => {
    el.addEventListener('mouseover', () => {
        gsap.to(el, {
            ease: Power2.easeInOut,
            duration: 1,
            y: -15
        })
    }, false)
    
    el.addEventListener('mouseout', () => {
        gsap.to(el, {
            ease: Power4,
            duration: 2,
            y: 15
        })
    }, false)
})

const clickSpin = document.querySelector('.clickSpin')

clickSpin.addEventListener('click', function () {
    TweenLite.from(this, 2, { rotation: 360, transformOrigin: "left 50%" })

})