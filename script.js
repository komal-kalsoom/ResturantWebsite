// console.log("first")
let cartItems = [];
displayItemsOnMenuPage()
displayCartIcon();


function addToCart(itemId){
cartItems.push(itemId);
displayCartIcon();
}

function displayCartIcon(){
let cartcountElement = document.querySelector('.bag-item-count');
if(cartItems.length>0){
  cartcountElement.style.visibility = 'visible'

  cartcountElement.innerText = cartItems.length;
}
else{
  cartcountElement.style.visibility = 'hidden'
}

}

function displayItemsOnMenuPage(){
let itemsContainerElement = document.querySelector(".items-container")

  let innerHTML = '';
  items.forEach((item) => {
    innerHTML += `
  
    <div class="item_container">
    <img class="image" src="${item.image}" alt="">
    <div class="name">${item.name}</div>
    <div class="description">${item.description}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="orignal-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount}% OFF)</span>
      <div>
        <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
    
      </div>
    </div>
    </div>
    
    `
  } )
  
  itemsContainerElement.innerHTML =  innerHTML;
}


