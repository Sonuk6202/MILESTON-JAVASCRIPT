function addDish() {
    const dishInputs = document.getElementById('dishInputs');
    const newDishInput = document.createElement('input');
    newDishInput.setAttribute('type', 'number');
    newDishInput.setAttribute('placeholder', 'Enter dish cost');
    newDishInput.classList.add('dish-cost');
    dishInputs.appendChild(newDishInput);
}

function calculateBill() {
    const dishCosts = document.querySelectorAll('.dish-cost');
    const costs = Array.from(dishCosts).map(input => parseFloat(input.value));
    const numberOfPeople = parseInt(document.getElementById('peopleCount').value);

    if (costs.some(isNaN) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        document.getElementById('result').textContent = 'Please enter valid inputs!';
        return;
    }

    const totalBill = costs.reduce((sum, cost) => sum + cost, 0);
    const billPerPerson = totalBill / numberOfPeople;

    document.getElementById('result').textContent = 
        `Total Bill: $${totalBill.toFixed(2)} \nBill Per Person: $${billPerPerson.toFixed(2)}`;
}
