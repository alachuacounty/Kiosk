window.addEventListener('load', () => {

    const glide = new Glide('.glide', {
        type: "carousel",
        touchAngle: 45,
        startAt: 0,
        perView: 5.5,
        keyboard: true,
        gap: 50,
        autoplay: false,
        peek: {
            before: 100,
            after: 50
        },

    })

    glide.mount()

})