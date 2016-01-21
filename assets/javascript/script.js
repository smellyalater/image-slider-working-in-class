$(document).ready(function() {

    var autoPlayInterval;


    //code to cycle through all images and then restart loop over at first image when the end is reached.
    function showNextImage() {
        var currentImageNode = $('.slider-img:visible').get(0);
        var allImages = $('.slider-img').get();
        var currentIndex = allImages.indexOf(currentImageNode);
        var nextIndex = (currentIndex + 1) % $('.slider-img').length;
        $(currentImageNode).hide();
        var nextImageNode = $('.slider-img').get(nextIndex);
        $(nextImageNode).show();

    }



    function startButtonClick() {
        

        //while slider is autoplaying, unbind click events on images
        $('.slider-img').off('click');

        autoPlayInterval = setInterval(function() {
            showNextImage();
        }, 1000);

    }



    function stopButtonClick() {

        clearInterval(autoPlayInterval);

        //once user stops slider, bind the click handler back to the images.
        $('.slider-img').on('click', function() {
            showNextImage();
        });

        $('.start').on('click', function() {

            startButtonClick();

        });
    }





    //on page load, hide all images and then show first image in node
    $('.slider-img').hide();
    $('.slider-img').first().show();
    

    //when user clicks on image, display next image.
    $('.slider-img').on('click', function() {
        showNextImage();
    });


    //when user clicks on 'start' autoplay sliders every ~1000ms
    $('.start').on('click', function() {

        startButtonClick();

        $('.start').off('click');

    });





    //when user clicks 'stop' stop autoplaying the slider.
    $('.stop').on('click', function() {

        stopButtonClick();

    });
});