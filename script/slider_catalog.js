const catalogBannerCarousel = [
    {
        'slides': [
            {
                'productImgUrl':  './assets/image/classic-blue-tshirt.png', 
                'altText': 'tshirt', 
                'price': '250$',
                'title': 'Lindsay Pearce Tshirt'
            },
            {
                'productImgUrl':  './assets/image/brown-bag.png',  
                'altText': 'brown-bag',
                'price': '500$',
                'title': 'Filson Small Duffell Bag'
            },
            {
                'productImgUrl':  './assets/image/watch-marine-grand-deck.png',  
                'altText': 'watch',
                'price': '2000$',
                'title': 'Marine Grand Deck 6300-300/GD'
            }
        ]
    },
    {
        'slides': [
            {
                'productImgUrl':  './assets/image/blue-dress-1.png', 
                'altText': 'dress', 
                'price': '1050$',
                'title': 'Anna Young Summer Dress'
            },
            {
                'productImgUrl':  './assets/image/black-bag.png',  
                'altText': 'black-bag',
                'price': '630$',
                'title': 'Under Armour Duffel Bag'
            },
            {
                'productImgUrl':  './assets/image/bremont-1918-rose-gold-watch.png',  
                'altText': 'watch',
                'price': '2570$',
                'title': 'Bremont 1918 Rose Gold Watch'
            }
        ]
    },
    {
        'slides': [
            {
                'productImgUrl':  './assets/image/blue-dress-2.png', 
                'altText': 'dress', 
                'price': '975$',
                'title': 'Dress Night Party'
            },
            {
                'productImgUrl':  './assets/image/black-bag-1.png',  
                'altText': 'black-bag',
                'price': '455$',
                'title': 'Handbag Tote Bag'
            },
            {
                'productImgUrl':  './assets/image/lg-g-watch-r-lg-watch-urbane.png',  
                'altText': 'watch',
                'price': '2060$',
                'title': 'Watch Urbane'
            }
        ]
    }
];

const colorProducts = [
    { 
        'slides':  [
            {
                'grey-color':  './assets/image/classic-gray-tshirt.png'
            },
            {
                'red-color':  './assets/image/classic-red-tshirt.png'
            },
            {
                'blue-color':  './assets/image/classic-blue-tshirt.png'
            }       
        ]
    },
    { 
        'slides':   [
            {
                'grey-color':  './assets/image/gray-dress-1.png' 
            },
            {
                'red-color':  './assets/image/red-dress-1.png'
            },
            {
                'blue-color':  './assets/image/blue-dress-1.png'
            }    
        ]
    },
    { 
        'slides':   [
            {
                'grey-color':  './assets/image/grey-dress-2.png'
            },
            {
                'red-color':  './assets/image/red-dress-2.png'
            },
            {
                'blue-color':  './assets/image/blue-dress-2.png'
            }     
        ]
    }
];


const catalogBlock = document.querySelector('.catalog-block');
const catalogNavLeft = document.getElementById('catalog-nav-left');
const catalogNavRight = document.getElementById('catalog-nav-right');
const greyColor = document.querySelector('.grey-color');
const vinousColor = document.querySelector('.vinous-color');
const blueColor = document.querySelector('.blue-color');
const productsTitleBlock = document.querySelectorAll('.products-title-block');

let indexCatalog = 0;


function createCatalogGallerySlide() {
    catalogBlock.innerHTML = `
        <div class="catalog">
            <div class="wrapper-products">
                <div class="item-block">
                    <div class="item-properties-block">
                        <div class="new"><span class="new-text">New</span></div>
                    </div>
                    <div class="item">
                        <img src="${catalogBannerCarousel[indexCatalog].slides[0].productImgUrl}" alt="${catalogBannerCarousel[indexCatalog].slides[0].altText}" class="item-img img-color fade">
                    </div>
                </div>
                <div class="products-info-block">
                    <div class="products-price-block"><span class="text-price">${catalogBannerCarousel[indexCatalog].slides[0].price}</span></div>
                    <div class="products-title-block"><span class="prod-title-text">${catalogBannerCarousel[indexCatalog].slides[0].title}</span></div>
                </div>
            </div>
            <div class="wrapper-products">
                <div class="item-block">
                    <div class="item-properties-block">
                        <div class="new"><span class="new-text">New</span></div>
                    </div>
                    <div class="item">
                        <img src="${catalogBannerCarousel[indexCatalog].slides[1].productImgUrl}" alt="${catalogBannerCarousel[indexCatalog].slides[1].altText}" class="item-img fade">
                    </div>
                </div>
                <div class="products-info-block">
                    <div class="products-price-block"><span class="text-price">${catalogBannerCarousel[indexCatalog].slides[1].price}</span></div>
                    <div class="products-title-block"><span class="prod-title-text">${catalogBannerCarousel[indexCatalog].slides[1].title}</span></div>
                </div>
            </div>
            <div class="wrapper-products">
                <div class="item-block">
                    <div class="item-properties-block">
                        <div class="new"><span class="new-text">New</span></div>
                    </div>
                    <div class="item">
                        <img src="${catalogBannerCarousel[indexCatalog].slides[2].productImgUrl}" alt="${catalogBannerCarousel[indexCatalog].slides[2].altText}" class="item-img fade">
                    </div>
                </div>
                <div class="products-info-block">
                    <div class="products-price-block"><span class="text-price">${catalogBannerCarousel[indexCatalog].slides[2].price}</span></div>
                    <div class="products-title-block"><span class="prod-title-text">${catalogBannerCarousel[indexCatalog].slides[2].title}</span></div>
                </div>
            </div> 
        </div>
    </div>
    `;

    catalogBlock.replaceWith(catalogBlock);
}
createCatalogGallerySlide();


catalogNavLeft.addEventListener('click', function() {
    indexCatalog > 0 ? indexCatalog-- : indexCatalog = catalogBannerCarousel.length - 1;
    createCatalogGallerySlide();
});

catalogNavRight.addEventListener('click', function() {
    indexCatalog  < catalogBannerCarousel.length - 1 ? indexCatalog ++ : indexCatalog = 0;
    createCatalogGallerySlide();
});

greyColor.addEventListener('click', function() {
    let image = document.querySelector('.img-color');
    image.src = colorProducts[indexCatalog].slides[0]["grey-color"];
});

vinousColor.addEventListener('click', function() {
    let image = document.querySelector('.img-color');
    image.src = colorProducts[indexCatalog].slides[1]["red-color"];
});

blueColor.addEventListener('click', function() {
    let image = document.querySelector('.img-color');
    image.src = colorProducts[indexCatalog].slides[2]["blue-color"];
});