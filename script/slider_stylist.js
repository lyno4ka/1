const stylistBannerCarousel = [
    {   
        'imgUrl': './assets/image/stylistLindsayPearce.png',
        'altText': 'LindsayPearce',
        'nameStylist': 'Lindsay Pearce',
        'linkContact': 'Lindsay'
    },
    {   
        'imgUrl': './assets/image/stylistAnnaYoung.png',
        'altText': 'AnnaYoung',
        'nameStylist': 'Anna Young',
        'linkContact': 'Anna'
    },
    {   
        'imgUrl': './assets/image/stylistZoiCampbel.png',
        'altText': 'ZoiCampbel',
        'nameStylist': 'Zoi Campbel',
        'linkContact': 'Zoi'
    },
    {   
        'imgUrl': './assets/image/stylistJaneMacgonall.png',
        'altText': 'JaneMacgonall',
        'nameStylist': 'Jane Macgonall',
        'linkContact': 'Jane'
    }
];

let articleContent = document.querySelector('.article-content');
const articleArrowRight = document.getElementById('article-arrow-right');
const articleArrowLeft = document.getElementById('article-arrow-left');


function createStylistGallerySlide() {
    articleContent.innerHTML = `
        <div class="article-content-block">
            <div class="container-stylist">
                <img src="${stylistBannerCarousel[indexSlide].imgUrl}" alt="${stylistBannerCarousel[indexSlide].altText}">
            </div>
            <div class="container-information">
                <div class="stylist-info">
                    <div class="title-info">
                        <h2>Recommended stylists</h2>
                    <img class="divider-stilist" src="./assets/image/divider-st.png" alt="divider-stilist">
                    </div>
                    <div class="about-stylist">
                        <div class="name-block">
                            <h3 class="name-stylist">${stylistBannerCarousel[indexSlide].nameStylist}</h3>
                        </div>
                        <div class="info-block">
                            <div class="rating-block">
                                <div class="prof">
                                    <span class="text-prof">Stylist</span>
                                    <span class="text-prof">Bloger</span>
                                </div>
                                <div class="rating-stars-stylist">
                                    <img src="./assets/image/star-st-b.png" alt="star">
                                    <img src="./assets/image/star-st-w.png" alt="star-o">
                                </div>
                            </div>                                      
                            <p class="text-info"><span class="highlighted-text">Lorem Ipsum</span> has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised 
                            in the 1960s</p>
                            <a href="#" class="link-contact">Contact with ${stylistBannerCarousel[indexSlide].linkContact}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    articleContent.replaceWith(articleContent);
}
createStylistGallerySlide();


articleArrowLeft.addEventListener('click', function() {
    indexSlide > 0 ? indexSlide-- : indexSlide = stylistBannerCarousel.length - 1;
    createStylistGallerySlide();
});

articleArrowRight.addEventListener('click', function() {
    indexSlide < stylistBannerCarousel.length - 1 ? indexSlide++ : indexSlide = 0;
    createStylistGallerySlide();
});