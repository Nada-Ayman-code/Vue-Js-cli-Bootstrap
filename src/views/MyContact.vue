<template>
  <div class="row mb-4 justify-content-center mt-5">
    <div class="col-12 col-sm-10 col-md-6 col-lg-4">
      <h3 style="color: rgb(77, 77, 146)">Contact Us</h3>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="bg-white border rounded p-3"
      >
        <input
          type="hidden"
          name="access_key"
          value="f6785770-d73b-4cb0-8bf0-41516260370e"
        />
        <div class="form-group">
          <label
            for="name"
            class="form-label mb-1"
            style="color: rgb(77, 77, 146)"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Name"
          />
          <small class="form-text text-secondary">enter your Name</small>
        </div>

        <div class="form-group">
          <label
            for="email"
            class="form-label mt-3 mb-1"
            style="color: rgb(77, 77, 146)"
            >Email</label
          >
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email"
          />
          <small class="form-text text-secondary">enter your email</small>
        </div>

        <div class="form-group">
          <label
            for="message"
            class="form-label mt-3 mb-1"
            style="color: rgb(77, 77, 146)"
            >Message</label
          >
          <textarea
            type="textarea"
            name="message"
            rows="10"
            id="message"
            class="form-control"
            placeholder="Type Your Message Here"
          ></textarea>
        </div>

        <button class="btn" style="color: rgb(77, 77, 146)">Send</button>
      </form>
    </div>
  </div>
</template>
