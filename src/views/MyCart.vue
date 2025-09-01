<template>
  <div class="container mt-5">
    <h2 class="mb-4">Your Cart</h2>

    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <div class="card mb-3" v-for="item in cart" :key="item.id">
        <div
          class="card-body d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">Price: ${{ item.price }}</p>
          </div>

          <div class="d-flex align-items-center">
            <button
              class="btn btn-sm btn-secondary me-2"
              @click="decreaseQuantity(item)"
            >
              -
            </button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button
              class="btn btn-sm btn-secondary ms-2"
              @click="increaseQuantity(item)"
            >
              +
            </button>
          </div>

          <button class="btn btn-danger ms-4" @click="removeItem(item)">
            Remove
          </button>
        </div>
      </div>

      <div class="text-end mt-3">
        <h4>Total: ${{ totalPrice }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // array of products with quantity
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeItem(item);
      }
    },
    removeItem(item) {
      this.cart = this.cart.filter((i) => i.id !== item.id);
    },
    addToCart(product) {
      // Check if product is already in cart
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
  },
  mounted() {
    // For demo: populate cart with some products
    // In real app, get from localStorage or Vuex
    this.cart = [];
  },
};
</script>
