document.addEventListener('DOMContentLoaded', function () {
    
    const selector = document.querySelector('[data-quantity-selector]');
    const quantities = document.querySelectorAll('[data-quantity]');

    // Update quantity depending on the selector value
    function updateQuantity() {
        let value = selector.value;

        quantities.forEach(quantity => {
            let number = quantity.getAttribute('data-quantity') * value;
            let data = (number % 1) ? number.toFixed(2) : number.toFixed(0);
            let unit = quantity.getAttribute('data-unit');

            if (unit != null) data += unit;

            quantity.textContent = data;
        });
    }

    // Update quantity on page load
    updateQuantity();

    // Update quantity on selector change
    document.querySelector('[data-quantity-selector]').addEventListener('change', (event) => {
        updateQuantity();
    });

});