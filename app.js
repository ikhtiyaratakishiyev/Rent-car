import cars from './data.json' assert {type: "json"}


const cardC = document.querySelector('.cards-c')
const search = document.querySelector('#search')
const filterS = document.querySelector(".filter-s")
const filtering = document.querySelector("#filtering")
// Filter

const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");
const minYear = document.querySelector("#minYear");
const maxYear = document.querySelector("#maxYear");
const btnFilter = document.querySelector("#btnFilter")


cars.map(car => {
    const post = document.createElement('div')

    post.classList.add('card')

    post.innerHTML = `<div class="card-title">
<h3>${car.vendor} ${car.model}</h3>
<img src="${car.isFavorite ? "./asserts/icon/heart-red.svg" :"./asserts/icon/heart-gray.svg"}" alt="">
</div>

<p>${car.type}</p>

<div class="card-img">
<img src="${car.img}" alt="">
</div>

<div class="card-info">
<li>
<img src="./asserts/icon/petrol.svg" alt="">
<span>${car.petrolCapacity}</span>
</li>
<li>
<img src="./asserts/icon/shifter.svg" alt="">
<span>${car.shifter}</span>
</li>
<li>
<img src="./asserts/icon/personCount.svg" alt="">
<span>${car.personCapacity} People</span>
</li>
</div>

<div class="card-button">
<div class="price-section">
<p><span>${car.currentPrice}</span> azn</p>
<p>${car.beforePrice}azn</p>
</div>
<button>Buy Now</button>
</div> `

    cardC.appendChild(post)
})


search.addEventListener('input', () => {
    cardC.innerHTML = ''
    cars
        .filter(car => car.vendor.toLowerCase().includes(search.value.toLowerCase()))
        .map(car => {
            const post = document.createElement('div')

            post.classList.add('card')

            post.innerHTML = `<div class="card-title">
    <h3>${car.vendor} ${car.model}</h3>
    <img src="./asserts/icon/heart-red.svg" alt="">
    </div>
    
    <p>${car.type}</p>
    
    <div class="card-img">
    <img src="${car.img}" alt="">
    </div>
    
    <div class="card-info">
    <li>
      <img src="./asserts/icon/petrol.svg" alt="">
      <span>${car.petrolCapacity}</span>
    </li>
    <li>
      <img src="./asserts/icon/shifter.svg" alt="">
      <span>${car.shifter}</span>
    </li>
    <li>
      <img src="./asserts/icon/personCount.svg" alt="">
      <span>${car.personCapacity} People</span>
    </li>
    </div>
    
    <div class="card-button">
    <div class="price-section">
        <p><span>${car.currentPrice}</span> azn</p>
        <p>${car.beforePrice}azn</p>
    </div>
    <button>Buy Now</button>
        </div> `

            cardC.appendChild(post)
        })
       
})

btnFilter.addEventListener("click",()=>{
  // console.log(minPrice.value)
  // console.log(maxPrice.value)

  cardC.innerHTML = ''
    cars
        .filter(car => {
         
          return (
            
            car.currentPrice>minPrice.value && car.currentPrice<maxPrice.value
            && 
            car.year>=minYear.value && car.year<=maxYear.value

            );
        })
        .map(car => {
            const post = document.createElement('div')

            post.classList.add('card')

            post.innerHTML = `<div class="card-title">
    <h3>${car.vendor} ${car.model}</h3>
    <img src="./asserts/icon/heart-red.svg" alt="">
    </div>
    
    <p>${car.type}</p>
    
    <div class="card-img">
    <img src="${car.img}" alt="">
    </div>
    
    <div class="card-info">
    <li>
      <img src="./asserts/icon/petrol.svg" alt="">
      <span>${car.petrolCapacity}</span>
    </li>
    <li>
      <img src="./asserts/icon/shifter.svg" alt="">
      <span>${car.shifter}</span>
    </li>
    <li>
      <img src="./asserts/icon/personCount.svg" alt="">
      <span>${car.personCapacity} People</span>
    </li>
    </div>
    
    <div class="card-button">
    <div class="price-section">
        <p><span>${car.currentPrice}</span> azn</p>
        <p>${car.beforePrice}azn</p>
    </div>
    <button>Buy Now</button>
        </div> `

            cardC.appendChild(post)
        })
})
filtering.addEventListener("click",()=>{
   filterS.classList.toggle('active')  
})


