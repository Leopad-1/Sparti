document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    let totalPrice = 0;
  
    cartButton.addEventListener('click', function() {
      cartModal.style.display = 'block';
    });
  
    closeModal.addEventListener('click', function() {
      cartModal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == cartModal) {
        cartModal.style.display = 'none';
      }
    });
  
    for (let button of addToCartButtons) {
      button.addEventListener('click', function() {
        const product = button.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h2').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.slice(1));
  
        const listItem = document.createElement('li');
        listItem.innerText = `${productName} - $${productPrice}`;
        cartItemsList.appendChild(listItem);
  
        totalPrice += productPrice;
        document.getElementById('total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  
    function addToCart(event) {
      const productId = event.target.closest('.product').getAttribute('data-id');
      // Aquí puedes agregar la lógica para agregar el producto al carrito
      console.log('Producto añadido al carrito:', productId);
    }
  });
  