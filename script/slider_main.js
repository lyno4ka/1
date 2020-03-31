const mainBannerCarousel = [
    {
        'avatarUrl': './assets/image/avatar-jane.png',
        'stylistName': 'Jany',
        'products': [
                        {
                            'cost': '500 $',
                            'product':  'Trousers' 
                        },
                        {
                            'cost': '1370 $',
                            'product':  'Jacket' 
                        },
                        {
                            'cost': '900 $',
                            'product':  'Shoes' 
                        },
                        {
                            'cost': '230 $',
                            'product':  'Skirt' 
                        }
                    ],
        'mainImgUrl': './assets/image/man-slider-1.png',
    },
    {
        'avatarUrl': './assets/image/avatar-anna.png',
        'stylistName': 'Anna',
        'products': [
                        {
                            'cost': '400 $',
                            'product':  'Trousers' 
                        },
                        {
                            'cost': '1070 $',
                            'product':  'Dress' 
                        },
                        {
                            'cost': '900 $',
                            'product':  'Shoes' 
                        },
                        {
                            'cost': '1200 $',
                            'product':  'Bag' 
                        }
                    ],
        'mainImgUrl': './assets/image/woman-slider-1.png',
    },
    {
        'avatarUrl': './assets/image/avatar-zoi.png',
        'stylistName': 'Zoi',
        'products': [
                        {
                            'cost': '700 $',
                            'product':  'Breeches' 
                        },
                        {
                            'cost': '1070 $',
                            'product':  'Dress' 
                        },
                        {
                            'cost': '920 $',
                            'product':  'Skirt' 
                        },
                        {
                            'cost': '2540 $',
                            'product':  'Suit' 
                        }
                    ],
        'mainImgUrl': './assets/image/man-slider-2.png',
    },
    {
        'avatarUrl': './assets/image/avatar-amily.png',
        'stylistName': 'Amily',
        'products': [
                        {
                            'cost': '400 $',
                            'product':  'Trousers' 
                        },
                        {
                            'cost': '1670 $',
                            'product':  'Dress' 
                        },
                        {
                            'cost': '2200 $',
                            'product':  'Switch' 
                        },
                        {
                            'cost': '510 $',
                            'product':  'Coat' 
                        }
                    ],
        'mainImgUrl': './assets/image/woman-slider-2.png',
    },
];


let sliderWrapper = document.querySelector('.slider-wrapper');
let paginationList = document.querySelector('.pagination-list');
const sliderArrowLeft = document.getElementById('slider-arrow-left');
const sliderArrowRight = document.getElementById('slider-arrow-right');

let indexMain = 0;


function createMainBannerGallerySlide() {
    sliderWrapper.innerHTML = `
        <div class="slider-content">
            <div class="title-block">
                <h1>Thank you, John for using our TaxFree4U service!</h1>
                <img class="divider-white" src="./assets/image/divider-white.png" alt="divider-white">
                <p class="slider-text">Here’s some items you might like</p> 
                <a href="" class="slider-link">See all my looks</a>
            </div>
            <div class="products-prices-block">
                <div class="wrapper-avatar">
                    <div class="slider-avatar">
                        <div class="avatar">
                            <img class="image-avatar" src="${mainBannerCarousel[indexMain].avatarUrl}" alt="avatar">
                            <span class="line-avatar"></span>
                            <span class="text-avatar">Made by ${mainBannerCarousel[indexMain].stylistName}</span>
                            <div class="rating-stars">
                                <img src="./assets/image/star-w.png" alt="star">
                                <img src="./assets/image/star-t1.png" alt="star-o">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prices-container">
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexMain].products[0].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexMain].products[0].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexMain].products[1].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexMain].products[1].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexMain].products[2].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexMain].products[2].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexMain].products[3].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexMain].products[3].product}</span>
                            </div>
                        </div>
                    </div>                                 
                </div>        
            </div>
            <div class="slider-image fade">
                <img src="${mainBannerCarousel[indexMain].mainImgUrl}" alt="man">
            </div>
        </div>
    `;

    sliderWrapper.replaceWith(sliderWrapper);
}
createMainBannerGallerySlide();

function createMainBannerGalleryPagination() {
    for (var i = 0; i < mainBannerCarousel.length; i++) {
        let li = document.createElement('li');
        li.classList.add('pagination-item');
        li.setAttribute('onclick', 'changeSlide(event)');
        li.id = i;
        let iTag = document.createElement('i');
        iTag.classList.add('fa', 'fas', 'fa-circle', 'circle');

        paginationList.appendChild(li);
        li.appendChild(iTag); 
    }
};
createMainBannerGalleryPagination();

function addClassToPagination() {
    for (let i = 0; i <  paginationList.children.length; i++) {
        paginationList.children[indexMain].classList.add('current-selector');  
    }
};
addClassToPagination();

function changeSlide(event) {
    if(event.target.tagName === 'I') {
        console.log(event)
        event.currentTarget.parentElement.offsetParent.children[0].children[indexMain].classList.remove('current-selector');
        indexMain = event.target.parentElement.id;
        createMainBannerGallerySlide();
        addClassToPagination();
    } 
}


sliderArrowLeft.addEventListener('click', function() {
    paginationList.children[indexMain].classList.remove('current-selector');
    indexMain > 0 ? indexMain -- : indexMain = mainBannerCarousel.length - 1;
    createMainBannerGallerySlide();
    addClassToPagination();
});

sliderArrowRight.addEventListener('click', function() {
    paginationList.children[indexMain].classList.remove('current-selector');
    indexMain < mainBannerCarousel.length - 1 ? indexMain++ : indexMain = 0;
    createMainBannerGallerySlide();
    addClassToPagination();
});