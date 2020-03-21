let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slider');
    let paginationItem = document.querySelectorAll('.pagination-item');

    if (n > slides.length) {
        slideIndex = 1;
    }    

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < paginationItem.length; i++) {
        paginationItem[i].className = paginationItem[i].className.replace(' active', '');
    }
    
    slides[slideIndex-1].style.display = 'block';  
    slides[slideIndex-1].style.display = 'flex'; 
    paginationItem[slideIndex-1].className += ' active';
}