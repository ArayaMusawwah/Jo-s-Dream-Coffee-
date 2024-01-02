document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Espresso Beans",
        image: "bag1.jpeg",
        price: 14.99,
        normalPrice: 20.0,
        stars: 4,
        halfStar: 1,
      },
      {
        id: 2,
        name: "Premium Americano Beans",
        image: "bag2.jpg",
        price: 59.99,
        normalPrice: 69.0,
        stars: 5,
      },
      {
        id: 3,
        name: "Central Africano Beans",
        image: "bag3.jpg",
        price: 34.99,
        normalPrice: 50.0,
        stars: 4,
      },
      {
        id: 4,
        name: "Arabica Beans",
        image: "bag4.jpg",
        price: 24.99,
        normalPrice: 50.0,
        stars: 4,
        halfStar: 1,
      },
      {
        id: 5,
        name: "Robusta Beans",
        image: "bag5.jpg",
        price: 14.99,
        normalPrice: 29.0,
        stars: 5,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    quantity: 0,
    total: 0,

    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
        this.total = parseFloat(this.total.toFixed(2));
        return item;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            this.total = parseFloat(this.total.toFixed(2));
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      console.log(cartItem);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= cartItem.price;
            this.total = parseFloat(this.total.toFixed(2));
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
        return this.total;
      }
    },
  });
});

function starMaker() {
  return `<svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="filled-star"
        >
          <use
            href="node_modules/feather-icons/dist/feather-sprite.svg#star"
          />
        </svg>`;
}

function halfStarMaker() {
  return `<svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="half-star"
        >
          <use
            href="node_modules/feather-icons/dist/feather-sprite.svg#star"
          />
        </svg>`;
}

// Dollar Converter
const dollar = (number) => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

//Rupiah Converter
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
