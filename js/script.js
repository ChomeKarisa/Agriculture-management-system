let cart_Icon = document.querySelector('#cart_icon');
let cart = document.querySelector('.cart');
let closeIcon = document.querySelector('#close_icon');

cart_Icon.onclick = () => {
    cart.classList.add("active");
}

closeIcon.onclick = () => {
    cart.classList.remove("active");
}
//////////////
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
} else{
    ready();
}
////////////////////
function ready(){
    var removeCartButtons = document.getElementById('cart_remove')
    console.log(removeCartButtons)
    for (var i=0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    } 

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0; i<quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener ("change", quantityChanged);

    }

    ///////////////////////////////
    var addCart = document.getElementById('cart_icon') ;
    for(var i = 0; i < addCart.length; i++){
        var button = addCart [i]
        button.addEventListener('clicked', addCartClicked);
    }
    ////////////////////////////////////
    document.getElementsByClassName('btn-buy')[0]
    .addEventListener("click", buyButtonClicked);
}
////////////////////////////////
function buyButtonClicked(){
    alert('order placed')
    var cartShopBox = document.getElementsByClassName('cart-stuff')[0]
    while(cartStuff.hasChildNodes()){
        cartShopBox.removeChild(cartShopBox.firstChild);
    }
    updatetotal();
}

/////////////////////////////
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//////////////////////////////

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;  
    }
    updatetotal(); 
}

///////////////////////////////

function addCartClicked(event){
    var button = event.target
    var shopContent = button.parentElement
    var title = shopContent.getElementsByClassName('prod-title')[0].innerText;
    var price = shopContent.getElementsByClassName('price')[0].innerText;
    var productImage = shopContent.getElementsByClassName('pro-img')[0].src;
    addProductToCart(title,price,productImage);
    updatetotal();
}
function addProductToCart(title, price, productImage){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName ('cart-stuff')[0]
    var cartNames = cartItems.getElementsByClassName('cart-title')
    for (var i = 0; i <cartNames.length; i++){
        alert('already added');
        return;
    }
}
var cartShopBox = `
                        <img src="${productImage}" width="200" height="100" alt="" class="stuff-img">

                            <div class="cart-details">
                                <div class="cart-title">${title}</div>
                                <div class="price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>


                             <i class="fa-light fa-basket-shopping" id="cart_remove"></i>`;
cartShopBox.innerHTML = cartBox
cartItems.append(cartShopBox)

cartShopBox
    .getElementById('cart-remove')[0]
    .addEventListener('click',removeCartItem); 
cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change',quantityChanged);                         

////////////////////////////////
function update(){
    var cartStuff = document.getElementsByClassName('cart-stuff') [0]
    var cartBox = cartStuff.getElementsByClassName('cart-box')

    var total = 0;
    for (var i=0; i < cartBox.length; i++){
        var cartBox = cartBox[i]
        var priceElement = cartBox.getElementsByClassName('price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value
        total = total + price * quantity;
    }
        ///////////////////////////
        total = math.round(total * 100)/100; 

        document.getElementsByClassName('total-price')[0].innerText='$' + total
    
}