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

let indexSlide = 0;


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
                            <img class="image-avatar" src="${mainBannerCarousel[indexSlide].avatarUrl}" alt="avatar">
                            <span class="line-avatar"></span>
                            <span class="text-avatar">Made by ${mainBannerCarousel[indexSlide].stylistName}</span>
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
                                <span class="cost">${mainBannerCarousel[indexSlide].products[0].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexSlide].products[0].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexSlide].products[1].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexSlide].products[1].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexSlide].products[2].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexSlide].products[2].product}</span>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-prices">
                        <div class="prices">
                            <div class="cost-block">
                                <span class="cost">${mainBannerCarousel[indexSlide].products[3].cost}</span>
                                <span class="line"></span>
                                <span class="product">${mainBannerCarousel[indexSlide].products[3].product}</span>
                            </div>
                        </div>
                    </div>                                 
                </div>        
            </div>
            <div class="slider-image fade">
                <img src="${mainBannerCarousel[indexSlide].mainImgUrl}" alt="man">
            </div>
        </div>
    `;

    sliderWrapper.replaceWith(sliderWrapper);
}
createMainBannerGallerySlide();

function createMainBannerGalleryPagination() {
    for (let i = 0; i < mainBannerCarousel.length; i++) {
        let li = document.createElement('li');
        li.classList.add('pagination-item');
        let i = document.createElement('i');
        i.classList.add('fa', 'fas', 'fa-circle', 'circle');

        paginationList.appendChild(li);
        li.appendChild(i);
    }
};
createMainBannerGalleryPagination();

function addClassToPagination() {
    for (let i = 0; i <  paginationList.children.length; i++) {
        paginationList.children[indexSlide].classList.add('current-selector');  
    }
};
addClassToPagination();

sliderArrowLeft.addEventListener('click', function() {
    paginationList.children[indexSlide].classList.remove('current-selector');
    indexSlide > 0 ? indexSlide -- : indexSlide = mainBannerCarousel.length - 1;
    createMainBannerGallerySlide();
    addClassToPagination();
});

sliderArrowRight.addEventListener('click', function() {
    paginationList.children[indexSlide].classList.remove('current-selector');
    indexSlide < mainBannerCarousel.length - 1 ? indexSlide++ : indexSlide = 0;
    createMainBannerGallerySlide();
    addClassToPagination();
});

// li.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('current-selector');
//         console.log('aaaa');
//     }
   
// });

paginationList.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log(this.children)
    let nodes = paginationList.children;
    nodes[indexSlide].classList.remove('current-selector');
    console.log(nodes);
    
    // nodes.forEach(function (item, i) {
        
    //     console.log('item[i]', item[i]);
    //     let index = [...item].indexOf(item[i]);
    //     indexSlide = index;
    //     console.log('iindexSlide', indexSlide);
    //     return item[i];
    // });

    for(let i = 0; i < nodes.length; i++) {
        
        // console.log("this[i]", this.children[i]);   
        // console.log('nodes', nodes[i]);
        let index = [...this.children].indexOf(this.children[i]);
        indexSlide = index;
        console.log('iindexSlide', indexSlide);
       
        
    }
   
    createMainBannerGallerySlide();
    addClassToPagination();        
});


// for(let i = 0; i < paginationList.length; i++) {

//     paginationList.addEventListener('click', function() {

//         paginationList[indexSlide].classList.remove('current-selector');

//         let index = [...paginationList.children].indexOf(paginationList.children[i]);
//         indexSlide = index;
//         console.log('iindexSlide', indexSlide);

//         addClassToPagination();
//         createMainBannerGallerySlide();
//     });
        
// }