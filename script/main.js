console.log("Hello World");
console.log("Im Alive");

  let cart = [];
    let total = 0;

    function addToCart(itemName, itemPrice, itemId) {
      // 1. Add item to our array
      cart.push({ name: itemName, price: itemPrice });

      // 2. Update the Total
      total += itemPrice;

      // 3. Update the UI (the visual list)
      renderCart();

      console.log(itemName, itemPrice, itemId);
    }

    function removeFromCart(itemId) {
      
      renderCart();
    }

    function renderCart() {
      const list = document.getElementById('cart-items');
      const totalDisplay = document.getElementById('total-price');

      // Clear the current list so we don't get duplicates
      list.innerHTML = "";

      // Loop through cart array and create list items
      cart.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        list.appendChild(li);
      });

      totalDisplay.innerText = total;
    }

    let name;

    document.getElementById("name-confirm").onclick = function(){
      name = document.getElementById("name-input").value;
      console.log(name);
      document.getElementById("name-display").innerHTML = name;
    }







/*
    let name = document.getElementById('name-input').value;
    console.log(name)*/