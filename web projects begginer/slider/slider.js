var index = 0;
show_image(0);

function show_image(i){
    index += i;
    var images = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    // Hide all images
    for (var j = 0; j < images.length; j++) 
        images[j].style.display = "none";
    

    // Remove "active" class from all dots
    for (var j = 0; j < dots.length; j++) 
        dots[j].className = dots[j].className.replace(" active", "");
    

    if (index > images.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = images.length - 1;
    }

    // Display the current image
    images[index].style.display = "block";

    // Add "active" class to the corresponding dot
    dots[index].className += " active";
}
