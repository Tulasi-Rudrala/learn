var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Increment slideIndex and show the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    
    // Call showSlides() again after 2 seconds
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}