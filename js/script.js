const products_cards = [...document.querySelectorAll('.products_cards')];

products_cards.forEach(item,i) => {
    let productsDimensions = item.getBoundingClientRect();
    let productsWidth = productsDimensions.width;

    
}