
// Dropdown price list
document.getElementById('quantity').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var price = selectedOption.getAttribute('data-price');
    document.getElementById('price').innerText = price;
});




//  Add To card
// Example: Increment cart count
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountSpan = document.querySelector('.cart-count');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
        // You would typically add the product to a cart data structure here
        console.log('Product added to cart');
    });
});


// dropdown 2

const selected = document.querySelector(".select-selected");
const items = document.querySelector(".select-items");

selected.addEventListener("click", () => {
  items.style.display = items.style.display === "block" ? "none" : "block";
});

items.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    items.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-select")) {
    items.style.display = "none";
  }
});
