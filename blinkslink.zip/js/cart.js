const cartData = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart-items");
const totalDiv = document.getElementById("total-price");
let total = 0;

if (cartData.length === 0) {
  cartDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartData.forEach(p => {
    cartDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" style="height:150px;">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
    total += Number(p.price);
  });
  totalDiv.innerText = `Total: ₹${total}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
