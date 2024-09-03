function addItem() {
    const cartItems = document.getElementById('cartItems');
    const newUnitPriceInput = document.createElement('input');
    const newQuantityInput = document.createElement('input');

    newUnitPriceInput.setAttribute('type', 'number');
    newUnitPriceInput.setAttribute('placeholder', 'Unit Price');
    newUnitPriceInput.classList.add('unit-price');

    newQuantityInput.setAttribute('type', 'number');
    newQuantityInput.setAttribute('placeholder', 'Quantity');
    newQuantityInput.classList.add('quantity');

    cartItems.appendChild(newUnitPriceInput);
    cartItems.appendChild(newQuantityInput);
}

function calculateTotal() {
    const unitPrices = document.querySelectorAll('.unit-price');
    const quantities = document.querySelectorAll('.quantity');

    const cart = Array.from(unitPrices).map((input, index) => ({
        unitPrice: parseFloat(input.value),
        quantity: parseInt(quantities[index].value)
    }));

    const totalPrice = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
    document.getElementById('result').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}
