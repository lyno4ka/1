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


function createLatestLooksGallerySlide() {
    latestImage.innerHTML = `
        <div class="looks-image-block">
            <img src="${latesLookstBannerCarousel[indexSlide].imgUrl}" alt="latest-looks">
        </div> 
    `;
    latestImage.replaceWith(latestImage);
}
createLatestLooksGallerySlide();

function createBestLooksGallerySlide() {
    bestRatedImage.innerHTML = `
        <div class="looks-image-block">
            <img  src="${bestRatedLookstBannerCarousel[indexSlide].imgUrl}" alt="best-looks">
        </div>
    `;
    bestRatedImage.replaceWith(bestRatedImage);
}
createBestLooksGallerySlide();


latestArrowLeft.addEventListener('click', function() {
    indexSlide > 0 ? indexSlide-- : indexSlide = latesLookstBannerCarousel.length - 1;
    createLatestLooksGallerySlide();    
});

latestArrowRight.addEventListener('click', function() {
    indexSlide < latesLookstBannerCarousel.length - 1 ? indexSlide++ : indexSlide = 0;
    createLatestLooksGallerySlide();
});

bestArrowLeft.addEventListener('click', function() {
    indexSlide > 0 ? indexSlide-- : indexSlide = bestRatedLookstBannerCarousel.length - 1;
    createBestLooksGallerySlide();
});

bestArrowRight.addEventListener('click', function() {
    indexSlide < bestRatedLookstBannerCarousel.length - 1 ? indexSlide++ : indexSlide = 0;
    createBestLooksGallerySlide();
});