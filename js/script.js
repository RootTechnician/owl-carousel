// JavaScript Document

 $('.owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
	autoplayTimeout:1800,
	autoplayHoverpause:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
		800:{
            items:3
        },
		900:{
            items:4
        },
        1000:{
            items:5
        }
    }
})
