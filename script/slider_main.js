let mainBannerCarousel = [
    {
        'avatarUrl': './assets/image/avatar-jane.png',
        'stylistName': 'Jane',
        'product': [
                        {
                            'price': '$500',
                            'title':  'Trousers' 
                        },
                        {
                            'price': '$1350',
                            'title':  'Jacket' 
                        },
                        {
                            'price': '$900',
                            'title':  'Shoes' 
                        },
                        {
                            'price': '$230',
                            'title':  'Shirt' 
                        }
                    ],
        'mainImgUrl': './assets/image/man-slider-1.png',
    },
    {
        'avatarUrl': './assets/image/avatar-zoi.png',
        'stylistName': 'Zoi',
        'product': [
                        {
                            'price': '$1200',
                            'title':  'Jacket' 
                        },
                        {
                            'price': '$300',
                            'title':  'Shorts' 
                        },
                        {
                            'price': '$200',
                            'title':  'Doll' 
                        },
                        {
                            'price': '$1555',
                            'title':  'Robot' 
                        }
                    ],
        'mainImgUrl': './assets/image/woman-slider-1.png',
    },
    {
        'avatarUrl': './assets/image/avatar-anna.png',
        'stylistName': 'Anna',
        'product': [
                        {
                            'price': '$100',
                            'title':  'Skirt' 
                        },
                        {
                            'price': '$666',
                            'title':  'Coat' 
                        },
                        {
                            'price': '$50',
                            'title':  'Sox' 
                        },
                        {
                            'price': '$945',
                            'title':  'Bag' 
                        }
                    ],
        'mainImgUrl': './assets/image/man-slider-2.png',
    }
];


let indexSlide = 0;


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function createMainBannerGallerySlide() {
    let sliderWrapper = document.querySelector('.slider-wrapper');
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
                    <span class="text-avatar">Made by Jany</span>
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
                        <span class="cost">500 $</span>
                        <span class="line"></span>
                        <span class="product">Trousers</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">1370 $</span>
                        <span class="line"></span>
                        <span class="product">Jacket</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">900 $</span>
                        <span class="line"></span>
                        <span class="product">Shoes</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">230 $</span>
                        <span class="line"></span>
                        <span class="product">Skirt</span>
                    </div>
                </div>
            </div>                                 
        </div>        
    </div>
    <div class="slider-image fade">
        <img src="${mainBannerCarousel[indexSlide].mainImgUrl}" alt="man">
    </div>
    </div>`
    ;

    sliderWrapper.replaceWith(sliderWrapper);

    // qui.replaceChild(sliderArrowLeft)
}
createMainBannerGallerySlide();

	// function createMainBannerGallerySelector () {
	// 	for (var i = 0; i < mainBannerCarousel.length; i++) {
	// 		slideWrapper.appendChild(`
	// 			<li>
	// 				<a href='#'>
	// 					<i class="fas fa-circle"></i>
	// 				</a>
	// 			</li>
	// 		`);
	// 	};
	// };
	// createMainBannerGallerySelector();


let sliderArrowLeft = document.getElementById('slider-arrow-left');
sliderArrowLeft.addEventListener('click', function(event) {
    console.log('УРААА')
    // event.preventDefault();
    indexSlide > 0 ? indexSlide -- : indexSlide = mainBannerCarousel.length-1;
    createMainBannerGallerySlide();
});

let sliderArrowRight = document.getElementById('slider-arrow-right');
sliderArrowRight.addEventListener('click', function(event) {
    console.log('УРААА 2')
    // event.preventDefault();
    indexSlide < mainBannerCarousel.length-1 ? indexSlide ++ : indexSlide = 0;
    createMainBannerGallerySlide();
});


















    // slide.append();

    // let paginationItem = document.querySelectorAll('.pagination-item');

    // if (n > slideWrapper.length) {
    //     slideIndex = 1;
    // }    

    // if (n < 1) {
    //     slideIndex = slide.length;
    // }

    // for (i = 0; i < slide.length; i++) {
    //     slides[i].style.display = "none";
    // }

    // for (i = 0; i < paginationItem.length; i++) {
    //     paginationItem[i].className = paginationItem[i].className.replace(' active', '');
    // }
    
    // slideWrapper[slideIndex-1].style.display = 'block';  
    // slideWrapper[slideIndex-1].style.display = 'flex'; 
    // // paginationItem[slideIndex-1].className += ' active';
    // paginationItem[slideIndex-1].classList.add('active');
// }








// --------------------------------------------------------------------
/*<div class="slider-content">
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
                    <img class="image-avatar" src="./assets/image/avatar-jane.png" alt="avatar">
                    <span class="line-avatar"></span>
                    <span class="text-avatar">Made by Jany</span>
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
                        <span class="cost">500 $</span>
                        <span class="line"></span>
                        <span class="product">Trousers</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">1370 $</span>
                        <span class="line"></span>
                        <span class="product">Jacket</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">900 $</span>
                        <span class="line"></span>
                        <span class="product">Shoes</span>
                    </div>
                </div>
            </div>
            <div class="wrapper-prices">
                <div class="prices">
                    <div class="cost-block">
                        <span class="cost">230 $</span>
                        <span class="line"></span>
                        <span class="product">Skirt</span>
                    </div>
                </div>
            </div>                                 
        </div>        
    </div>
    <div class="slider-image fade">
        <img src="./assets/image/man-slider-1.png" alt="man">
    </div>
</div>
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
                <img class="image-avatar" src="./assets/image/avatar-anna.png" alt="avatar">
                <span class="line-avatar"></span>
                <span class="text-avatar">Made by Anna</span>
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
                    <span class="cost">400 $</span>
                    <span class="line"></span>
                    <span class="product">Trousers</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">1070 $</span>
                    <span class="line"></span>
                    <span class="product">Dress</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">1200 $</span>
                    <span class="line"></span>
                    <span class="product">Bag</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">510 $</span>
                    <span class="line"></span>
                    <span class="product">Pullover</span>
                </div>
            </div>
        </div>                                 
    </div>        
</div>
<div class="slider-image fade">
    <img src="./assets/image/woman-slider-1.png" alt="woman">
</div>
</div>
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
                <img class="image-avatar" src="./assets/image/avatar-zoi.png" alt="avatar">
                <span class="line-avatar"></span>
                <span class="text-avatar">Made by Zoi</span>
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
                    <span class="cost">700 $</span>
                    <span class="line"></span>
                    <span class="product">Breeches</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">1070 $</span>
                    <span class="line"></span>
                    <span class="product">Dress</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">920 $</span>
                    <span class="line"></span>
                    <span class="product">Skirt</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">2540 $</span>
                    <span class="line"></span>
                    <span class="product">Suit</span>
                </div>
            </div>
        </div>                                 
    </div>        
</div>
<div class="slider-image fade">
    <img src="./assets/image/man-slider-2.png" alt="man">
</div>
</div>
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
                <img class="image-avatar" src="./assets/image/avatar-amily.png" alt="avatar">
                <span class="line-avatar"></span>
                <span class="text-avatar">Made by Amily</span>
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
                    <span class="cost">400 $</span>
                    <span class="line"></span>
                    <span class="product">Trousers</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">2070 $</span>
                    <span class="line"></span>
                    <span class="product">Dress</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">3200 $</span>
                    <span class="line"></span>
                    <span class="product">Switch</span>
                </div>
            </div>
        </div>
        <div class="wrapper-prices">
            <div class="prices">
                <div class="cost-block">
                    <span class="cost">510 $</span>
                    <span class="line"></span>
                    <span class="product">Coat</span>
                </div>
            </div>
        </div>                                 
    </div>        
</div>
<div class="slider-image fade">
    <img src="./assets/image/woman-slider-2.png" alt="woman">
</div>
</div>

/* -------------------------------------------------------------------------- */