new Glide(".images",{
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    autoplay:3500,
    gap: 10,
    breakpoints: {
        1200:{
            perView: 3
        },
        800:{
            perView:1
        } 
    }
}).mount();