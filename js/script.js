


$('.owl-about').owlCarousel({
    loop: true,
    margin: 136,
    items: 2,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive:{
        992: {
            items: 2
        },
        768: {
            items: 2
        },
        320: {
            items: 1
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 136,
    items: 5,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive:{
        992: {
            items: 5
        },
        768: {
            items: 3
        },
        320: {
            items: 2
        }
    }
})



$('.carousel').carousel({
    interval: 1500
  })
// filter

$(document).ready(function(){
    // clicking button with class "category-button"
    $(".filter-btn").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".all").show();
        }
        else
        {   
            // hide all items
            $(".all").not('.'+filterValue).hide();
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show();
        }
    });

});

/* ABOUT COMMENTS */




