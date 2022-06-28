/*
This is how an item object should look like
{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}
*/
let items = [

    {
      id: 1,
      src: 'assets/icons/001-beetroot.svg', 
      name: "beetroot",
      price: 0.35,
      howmany: 1
    },
    {
      id: 2, 
      src: 'assets/icons/002-carrot.svg',
      name: "carrot",
      price: 0.35,
      howmany: 1
    },
    {
      id: 3, 
      src: 'assets/icons/003-apple.svg',
      name: "apple",
      price: 0.35,
      howmany: 1
    },
    {
      id: 4, 
      src: 'assets/icons/004-apricot.svg',
      name: "apricot",
      price: 0.35,
      howmany: 1
    },
    {
      id: 5, 
      src: 'assets/icons/005-avocado.svg',
      name: "avocado",
      price: 0.35, 
      howmany: 1
    },
    {
      id: 6, 
      src: 'assets/icons/006-bananas.svg',
      name: "bananas",
      price: 0.35, 
      howmany: 1
    },
    {
      id: 7, 
      src: 'assets/icons/007-bell-pepper.svg',
      name: "bell-pepper",
      price: 0.35, 
      howmany: 1
    },
    {
      id: 8, 
      src: 'assets/icons/008-berry.svg',
      name: "berry",
      price: 0.35, 
      howmany: 1
    },
    {
      id: 9, 
      src: 'assets/icons/009-blueberry.svg',
      name: "blueberry",
      price: 0.35,
      howmany: 1
    },
    {
      id: 10,
      src: 'assets/icons/010-eggplant.svg', 
      name: "eggplant",
      price: 0.35, 
      howmany: 1
    }
  ]
 
  function store(fruit) {
    let liEl = document.createElement('li')
  
    let divEl = document.createElement('div')
    divEl.className = 'store--item-icon'
    let imgEl = document.createElement('img')
    imgEl.src = fruit.src
    imgEl.alt = fruit.name
    let buttonEl = document.createElement('button')
    buttonEl.textContent = 'Add to cart'
    buttonEl.addEventListener("click", ()=>cart(fruit))
  
    let theul = document.querySelector('.item-list.store--item-list')
      theul.append(liEl)
      liEl.append(divEl, imgEl, buttonEl)
      divEl.append(imgEl)
  }
  for (let fruit of items) {
     store(fruit)
  }
  
  {/* <li>
    <img
      class="cart--item-icon"
      src="assets/icons/001-beetroot.svg"
      alt="beetroot"
    />
    <p>beetroot</p>
    <button class="quantity-btn remove-btn center">-</button>
    <span class="quantity-text center">1</span>
    <button class="quantity-btn add-btn center">+</button>
  </li> */}
  
  
  function cart(fruit){
    let liEl = document.createElement('li')
  
    let imgEl = document.createElement('img')
    imgEl.src = fruit.src
    imgEl.alt = fruit.name
    imgEl.className = '.cart--item-icon'
  
    let pEl = document.createElement('p')
    pEl.textContent = fruit.name
  
    let buttonEl = document.createElement('button')
    buttonEl.className = '.quantity-btn.remove-btn center'
    buttonEl.textContent = '-'
  
    let spanEl = document.createElement('span')
    spanEl.className = 'quantity-text center'
    spanEl.textContent = fruit.howmany
    
    let button2El = document.createElement('button')
    buttonEl.className = '.quantity-btn.add-btn center'
    buttonEl.textContent = '+'
  
    let theul = document.querySelector('.item-list.cart--item-list')
      theul.append(liEl)
      liEl.append(imgEl, pEl, buttonEl, spanEl, button2El)
  }