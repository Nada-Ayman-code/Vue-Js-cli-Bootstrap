<template>
  <div>
    <MyNav />
    <div
      class="d-flex flex-column align-items-center justify-content-center text-white"
      :style="{
        backgroundImage: `url(${require('@/assets/groceries.jpg')})`,
        height: '609px',
      }"
    >
      <h2 class="mt-0 me-4 ms-4">
        Welcome to Groceries — your trusted shop for fresh, quality, and
        affordable products every day!
      </h2>
      <p class="mt-3 me-5 ms-5 mb-5">
        At Groceries, we believe in making your shopping simple and enjoyable.
        From farm-fresh fruits and vegetables to pantry essentials and daily
        household needs, we’ve got everything you need under one roof. Shop with
        us and experience freshness, quality, and care in every purchase.
      </p>
    </div>
    <p class="col-3">In-Cart: {{ cartcount }}</p>
    <hr />

    <div class="row">
      <button
        class="btn btn-secondary col-12 border"
        style="color: rgb(77, 77, 146); background-color: rgb(207, 207, 236)"
        @click="showProducts = !showProducts"
      >
        {{ showProducts ? "Hide Products ↑" : "Show Products ↓" }}
      </button>
    </div>

    <div class="row justify-content-center align-items-center">
      <div
        class="col-12 col-sm-10 col-md-6 col-lg-3 ms-3 mb-4 card"
        style="height: 700px"
        v-for="card in products"
        :key="card.id"
        v-show="showProducts"
      >
        <div
          class="row justify-content-end align-items-center"
          style="background-color: rgb(193, 213, 241)"
          v-if="card.discountPercentage > 0"
        >
          <p
            class="col-6 fs-4"
            style="font-family: 'Times New Roman', Times, serif"
          >
            Discount {{ card.discountPercentage }}%
          </p>
          <img
            class="col-2"
            :src="require('@/assets/discount-icon.png')"
            alt="d"
            width="30px"
          />
        </div>

        <img
          v-bind:src="card.thumbnail"
          style="height: 325px"
          class="card-img-top"
          alt="1"
        />
        <hr class="mb-0 ms-4 me-4" />

        <div
          class="card-body text-center"
          v-if="card.availabilityStatus && card.price >= 50"
        >
          <h4 class="card-title">
            <strong>{{ card.title }}</strong>
          </h4>
          <p class="card-text">
            Price: {{ card.price }}<br />
            <span class="text-white bg-success rounded p-1">IN-Stock</span
            ><br />
            <small>{{ card.description }}</small>
          </p>
          <button class="btn btn-secondary" @click="productAdded(card.id)">
            Add To Cart
          </button>
          <div class="alert alert-success" role="alert" v-show="card.alert">
            Product: {{ card.title }} Added Successfully
          </div>
        </div>

        <div
          class="card-body text-center"
          v-else-if="card.availabilityStatus && card.price < 50"
        >
          <h4 class="card-title">
            <strong>{{ card.title }}</strong>
          </h4>
          <p class="card-text">
            Price: {{ card.price }}<br />
            <span class="text-white bg-warning rounded p-1">IN-Stock</span
            ><br />
            <small>{{ card.description }}</small>
          </p>
          <button class="btn btn-secondary" @click="productAdded(card.id)">
            Add To Cart
          </button>
          <div class="alert alert-success" role="alert" v-show="card.alert">
            Product: {{ card.title }} Added Successfully
          </div>
        </div>

        <div class="card-body text-center" v-else>
          <h4 class="card-title text-secondary">
            <strong>{{ card.title }}</strong>
          </h4>
          <p class="card-text">
            Price: {{ card.price }}<br />
            <span class="text-white bg-danger rounded p-1">OUT-OF-Stock</span
            ><br />
            <small>{{ card.description }}</small>
          </p>
          <button class="btn btn-secondary disabled" aria-disabled="true">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMain",
  data() {
    return {
      name: "grocery",
      products: [],
      showProducts: true,
      cartcount: 0,
    };
  },

  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
          //   console.log(data);
        });
    },

    productAdded(productid) {
      this.cartcount++;
      let filt = this.products.find((item) => item.id === productid);

      filt.alert = !filt.alert;
      let stop = setInterval(() => {
        filt.alert = !filt.alert;
      }, 3000);

      setTimeout(() => {
        clearInterval(stop);
      }, 3000);
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
