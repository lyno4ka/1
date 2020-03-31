const latesLookstBannerCarousel = [
    {
        'imgUrl': './assets/image/latest-looks-man-1.png',
    },
    {
        'imgUrl': './assets/image/latest-looks-woman-1.png',
    },
    {
        'imgUrl': './assets/image/latest-looks-man-2.png',
    },
    {
        'imgUrl': './assets/image/latest-looks-woman-2.png',
    },
    {
        'imgUrl': './assets/image/latest-looks-woman-3.png',
    }
];

const bestRatedLookstBannerCarousel = [
    {
        'imgUrl': './assets/image/best-rated-looks-coat-1.png',
    },
    {
        'imgUrl': './assets/image/best-rated-looks-jacket-1.png',
    },
    {
        'imgUrl': './assets/image/best-rated-looks-qrey-shirt-2.png',
    },
    {
        'imgUrl': './assets/image/best-rated-looks-dress-1.png',
    },
    {
        'imgUrl': './assets/image/best-rated-looks-dress-2.png',
    }
];


let latestImage = document.getElementById('latest-image');
let bestRatedImage = document.getElementById('best-rated-image');
const latestArrowLeft  = document.getElementById('latest-arrow-left');
const latestArrowRight = document.getElementById('latest-arrow-right');
const bestArrowLeft = document.getElementById('best-arrow-left');
const bestArrowRight = document.getElementById('best-arrow-right');

let indexLooks = 0;


function createLatestLooksGallerySlide() {
    latestImage.innerHTML = `
        <div class="looks-image-block">
            <img src="${latesLookstBannerCarousel[indexLooks].imgUrl}" alt="latest-looks">
        </div> 
    `;
    latestImage.replaceWith(latestImage);
}
createLatestLooksGallerySlide();

function createBestLooksGallerySlide() {
    bestRatedImage.innerHTML = `
        <div class="looks-image-block">
            <img  src="${bestRatedLookstBannerCarousel[indexLooks].imgUrl}" alt="best-looks">
        </div>
    `;
    bestRatedImage.replaceWith(bestRatedImage);
}
createBestLooksGallerySlide();


latestArrowLeft.addEventListener('click', function() {
    indexLooks > 0 ? indexLooks-- : indexLooks = latesLookstBannerCarousel.length - 1;
    createLatestLooksGallerySlide();    
});

latestArrowRight.addEventListener('click', function() {
    indexLooks < latesLookstBannerCarousel.length - 1 ? indexLooks++ : indexLooks = 0;
    createLatestLooksGallerySlide();
});

bestArrowLeft.addEventListener('click', function() {
    indexLooks > 0 ? indexLooks-- : indexLooks = bestRatedLookstBannerCarousel.length - 1;
    createBestLooksGallerySlide();
});

bestArrowRight.addEventListener('click', function() {
    indexLooks < bestRatedLookstBannerCarousel.length - 1 ? indexLooks++ : indexLooks = 0;
    createBestLooksGallerySlide();
});