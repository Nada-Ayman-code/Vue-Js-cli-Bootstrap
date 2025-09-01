<template>
  <nav
    class="navbar navbar-expand-lg position-sticky top-0 sticky-top"
    style="background-color: rgb(58, 68, 133)"
  >
    <div class="container-fluid">
      <a
        href="#"
        class="navbar-brand fs-1 ms-5"
        style="color: #f5f5f5; font-family: poppins"
      >
        Groceries
      </a>
      <button
        class="navbar-toggler"
        data-bs-target="#collapsetoggler"
        data-bs-toggle="collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsetoggler">
        <ul class="navbar-nav ms-auto w-50 justify-content-between">
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="#products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="#cart">View Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      name: "NavBar",
    };
  },
};
</script>
