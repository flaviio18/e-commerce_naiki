
//prendo tutto ciò che sta nel file "articoli.json e creo le apposite card per ogni articolo"

fetch('./articoli.json')
    .then((respons) => respons.json())
    .then((data) => {
        let cardsWrapper = document.querySelector('#cardsWrapper');
        function showCards(array) {
            cardsWrapper.innerHTML = '';
            array.forEach((element) => {
                let div = document.createElement('div');
                div.classList.add('col-12', 'col-lg-4', 'col-md-7');
                div.innerHTML = `
                <div class="card my-5" style="width: 18rem;">
                <img src="${element.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.model}</p>
                    <button class="button-57" role="button"><span class="text">Prize</span><span class="mt-2">${element.price}</span></button>
                </div>
            </div>
                    `
                cardsWrapper.appendChild(div)
            })
        }
        showCards(data)


        //filtro per parola
        let inputWord = document.querySelector('#inputWord');
        function filterByWord() {
            let value = inputWord.value;
            let filtered = data.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()));
            // console.log(filtered);
            showCards(filtered)

        }
        // evento per parola
        inputWord.addEventListener('input', () => {
            filterByWord();
        })


        let inputRange = document.querySelector('.form-range');
        console.dir(inputRange);
        let priceLabel = document.querySelector('#priceLabel');
        // filtro per prezzo 
        function findMaxPrice (){
            let maxPrice= data.map((el) => Number(el.price)).sort((a, b) => b-a)[0];
            inputRange.max= maxPrice;
            inputRange.value= maxPrice;
            console.log(maxPrice);
        }

        findMaxPrice()

        function filterByPrice(){
            let filtered = data.filter((el) => +el.price <= inputRange.value);
            showCards(filtered);
        }

        // evento per prezzo 
        inputRange.addEventListener('input', () => {
            priceLabel.innerHTML = inputRange.value
            filterByPrice()
        })
        
        // filtro per modello
        let categoriesWrapper = document.querySelector('#categoriesWrapper');

        function setModelRadios() {
            let categories = data.map((el) => el.model)
            let uniqueCategories = [];
            categories.forEach((model) => {
                if (!uniqueCategories.includes(model)) {
        
                    uniqueCategories.push(model)
                }
            })
            // console.log(uniqueCategories);
            uniqueCategories.forEach((model) => {
                let div = document.createElement('div');
                div.classList.add('form-check');
                div.innerHTML = `
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${model}">
                        <label class="form-check-label" for="${model}">
                            ${model}
                        </label>
                        `
                categoriesWrapper.appendChild(div);
            })
        }
        setModelRadios()

        //evento per modelli
        let radioInput= document.querySelectorAll('.form-check-input');
        console.log(radioInput)
        let radioBtn= Array.from(radioInput);

        function filterByModel (){
            let checked= radioBtn.find((input)=> input.checked);
            let models= checked.id;
            if(models != 'all'){
                let filtered= data.filter((el)=> models == el.model )
                showCards(filtered);
            }
            else {
                showCards(data);
            }
        }

        radioInput.forEach((input)=>{
            input.addEventListener('click', () => {
                filterByModel()
            })
        })
    })




