document.getElementById('quantity').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var price = selectedOption.getAttribute('data-price');
    document.getElementById('price').innerText = price;
});
