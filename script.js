// section 1
let wrapper = document.querySelector('#swiper-wrapper');


popular = [{ 'scarpe': '', url: './media/more-popular/popular1.png' },
{ 'scarpe': '', 'url': './media/more-popular/popular2.png' },
{ 'scarpe': '', 'url': './media/more-popular/popular3.png' },
]


popular.forEach((scarpa) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    // console.log(scarpa.url);
    div.innerHTML = `
    <img src=${scarpa.url} />
    <div class='btn-custom  '>
    <button class="button-57" role="button"><span class="text">Prize</span><span class="mt-2">  100$</span></button>
    </div>
    `

    wrapper.appendChild(div);
})

// swiper JS section 1
var swiper1 = new Swiper("#mySwiper1", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


//Section 2
const numberUp1 = document.querySelector('#numJs1');
const numberUp2 = document.querySelector('#numJs2');
const numberUp3 = document.querySelector('#numJs3');


function createInterval(finalN, element, frequency) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < finalN) {
            counter += 2
            element.innerHTML = counter + "+";
        } else {
            clearInterval(interval);
        }
    }, frequency)
}
createInterval(500, numberUp1, 4);
createInterval(1000, numberUp2, 2);
createInterval(250, numberUp3, 4);


// observe 

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
            createInterval(500, numberUp1, 4);
            createInterval(1000, numberUp2, 2);
            createInterval(250, numberUp3, 4);
        }
    })
})
observer.observe(numberUp1);

//section recensioni
const reviewsWrapper = document.querySelector('#reviewsWrapper');
// console.log(reviewsWrapper);

let reviews = [

    { 'name': 'Biaggio', 'review': 'Convenienti e rapidi nella spedizione.', 'rank': 4, 'url': './media/ignoto.png' },

    { 'name': 'Lauro', 'review': 'SerietÃ  e puntualitÃ ... Molto soddisfatta... Grazie', 'rank': 4.5, 'url': './media/ignoto.png' },

    { 'name': 'Oscar', 'review': 'Servizio impeccabile, persone cordiali e disponibili.', 'rank': 5, 'url': './media/ignoto.png' },

    { 'name': 'Marino', 'review': 'servizio ottimo', 'rank': 5, 'url': './media/ignoto.png' },

    { 'name': 'Nello', 'review': 'Soddisfatto del servizio e ottimo anche il personale ,gentili e cordiali.', 'rank': 5, 'url': './media/ignoto.png' },

    { 'name': 'Simone', 'review': 'contento degli acquisti ,sicuramente farÃ² altri acquisti nei prossimi giorni ,grazzie!!', 'rank': 4.5, 'url': './media/ignoto.png' },

    { 'name': 'Rossella', 'review': 'Tutto come stabilito consegna e prodotto. Ottimo feedback!!', 'rank': 4.5, 'url': './media/ignoto.png' }

]

reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="review-card">
            <div class="star-container d-flex justify-content-center mb-4">
                ${generateStars(review.rank)}
            </div>
            <p class="d-flex justify-content-center"> ${review.review}</p>
            <div class="d-flex justify-content-center">
                <img src="${review.url}" alt="">
            </div>
            <div class="d-flex justify-content-center">
                <p class=" mt-2 fw-bold">${review.name}</p>
            </div>
        </div>
`
    reviewsWrapper.appendChild(div)
})


let starContainer = document.querySelectorAll('.star-container')
function generateStars(rank) {
    let result = ''
    for (let i = 1; i <= 5; i++) {
        if (rank == 0.5) {
            result += '<i class="fa-regular fa-star-half-stroke"></i>'
            rank = 0
        } else if (rank > 0) {
            result += '<i class="fa-solid fa-star"></i>'
            rank--
        } else {
            result += '<i class="fa-regular fa-star"></i>'
        }
    }
    return result
}

// swiper JS recensioni
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

//Inizializzazione AOS
AOS.init();