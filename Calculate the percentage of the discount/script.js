// Arrow function to calculate discount percentage
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
        return "Original price must be greater than zero.";
    }
    if (discountedPrice < 0 || discountedPrice > originalPrice) {
        return "Discounted price must be between 0 and the original price.";
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Rounded to two decimal places
};

// Function to handle the button click
function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const discountedPrice = parseFloat(document.getElementById('discounted-price').value);

    if (isNaN(originalPrice) || isNaN(discountedPrice)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    const result = calculateDiscountPercentage(originalPrice, discountedPrice);
    document.getElementById('result').textContent = `Discount Percentage: ${result}%`;
}
