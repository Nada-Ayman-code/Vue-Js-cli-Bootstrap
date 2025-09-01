<template>
  <div>
    <MyNav />
    <div
      class="d-flex flex-column justify-content-center align-items-center text-white"
      :style="{
        backgroundImage: `url(${require('@/assets/groceries.jpg')})`,
        height: '609px',
      }"
    >
      <h1 class="mt-0 mb-4">About Us</h1>
      <p class="mb-1 me-5 ms-5">
        At Groceries, we are passionate about providing our customers with the
        freshest produce, the finest pantry staples, and the most reliable
        household essentials. We believe that grocery shopping should be more
        than just a task — it should be a convenient, enjoyable experience that
        supports your lifestyle and well-being.
      </p>
      <br />
      <p class="mb-1 me-5 ms-5">
        Our team carefully sources products to ensure high quality, fair
        pricing, and sustainability. From farm-fresh fruits and vegetables to
        daily kitchen needs, we aim to bring everything under one roof, saving
        you time while guaranteeing freshness and value.
      </p>

      <p class="mb-1 me-5 ms-5">
        <br />
        Beyond products, we are committed to building trust with our community
        by offering excellent service, transparency, and care in every
        interaction. Whether you’re shopping for your family, stocking up on
        weekly essentials, or simply looking for inspiration in your meals,
        Groceries is here to make life easier, healthier, and happier.
      </p>
    </div>
  </div>
</template>
