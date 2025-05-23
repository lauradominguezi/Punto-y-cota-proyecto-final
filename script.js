  // Submenú Catálogo
  const catalogoToggle = document.getElementById("catalogo-toggle");
  const catalogoItem = document.querySelector(".catalogo-menu-item");

  catalogoToggle.addEventListener("click", function (e) {
    e.preventDefault();
    catalogoItem.classList.toggle("open");
  });

  // Mostrar cantidad y total desde localStorage
  document.addEventListener("DOMContentLoaded", function () {
    const cantidad = localStorage.getItem("cartCantidad") || 0;
    const total = localStorage.getItem("cartTotal") || "0.00";

    document.getElementById("cart-count").innerText = cantidad;
    document.getElementById("cart-price").innerText = "$" + parseFloat(total).toFixed(2);
  });


  document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que se recargue la página

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = 'Las contraseñas no coinciden.';
    return;}

  if (password.length < 6) {
    message.style.color = 'red';
    message.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;}

  // Simula "registro exitoso"
  message.style.color = 'green';
  message.textContent = '¡Registro exitoso, te llegara un correo electronico de verificación!';

  // Puedes almacenar en localStorage si quieres simular guardado
  localStorage.setItem('user', JSON.stringify({ username, email }));

  // Opcional: limpiar campos
  document.getElementById('registerForm').reset();
});


// Inicializar el número de artículos y el precio
  let cantidadArticulos = 0;
  let precioTotal = 0;

// Esta función simula agregar un producto de $25.00 al carrito
  function agregarProducto() {
  cantidadArticulos++;
  precioTotal += 25.00;

// Actualiza el contador de artículos
  document.getElementById("cart-count").innerText = cantidadArticulos;

// Actualiza el precio total, con 2 decimales
  document.getElementById("cart-price").innerText = "$" + precioTotal.toFixed(2);}
