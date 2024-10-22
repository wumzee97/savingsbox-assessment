<template>
  <v-app>
    <AppNavBar />
    <!-- <v-app-bar elevation="1" class="container">
      <v-app-bar-title class="font-weight-bold">
        <NuxtLink :to="'/'">SavingsBox Assessment</NuxtLink></v-app-bar-title
      >

      <template #append>
        <v-btn class="text-capitalize" to="/">Home</v-btn>
        <v-btn class="text-capitalize" to="/users">Users</v-btn>
      </template>
    </v-app-bar> -->

    <div>
      <NuxtPage />
    </div>

    <v-footer color="#000831" class="pa-md-8 pb-6">
      <div class="px-md-16">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-12">
            <img
              src="../assets/logo.png"
              style="
                max-width: 12.8rem;
                margin-bottom: -50px;
                margin-left: -20px;
              "
              alt=""
            /><br />
            <small
              >SavingsBox is your all in 1 place for savings, investment and
              loans. We are embarking on a journey to redefine wealth creation
              and piloting financial products that meet societal needs.</small
            ><br />
            <img src="../assets/audit.png" width="120px" class="mt-3" alt="" />
          </div>

          <div class="col-lg-7 col-12">
            <div class="row">
              <div class="col-lg-3 col-6 pt-12">
                <p class="font-weight-bold">COMPANY</p>
                <p>About Us</p>
                <p>Partners</p>
                <p>Blog</p>
              </div>

              <div class="col-lg-3 col-6 pt-12">
                <p class="font-weight-bold">SERVICES</p>
                <p>Jolly</p>
                <p>Savings</p>
                <p>Investibox</p>
                <p>Loan</p>
              </div>

              <div class="col-lg-3 col-6 pt-12">
                <p class="font-weight-bold">FEATURES</p>
                <p>Virtual Account</p>
                <p>Secure Investments</p>
                <p>Competitive Interest</p>
                <p>Jolly Gifting</p>
              </div>

              <div class="col-lg-3 col-6 pt-12">
                <p class="font-weight-bold">RESOURCES</p>
                <p>Support</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>FAQs</p>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-12 pt-12">
            <a
              href="#"
              class="btn btn-outline-light px-7 py-3 fs-5 font-weight-medium rounded-lg w-100"
            >
              <IconsIconApple /> Apple Store
            </a>
            <a
              href="#"
              class="btn btn-outline-light px-7 py-3 fs-5 font-weight-medium rounded-lg mt-6 w-100"
            >
              <IconsIconPlaystore /> Play Store
            </a>
          </div>
        </div>

        <v-divider class="mt-10"></v-divider>
        <div class="d-flex justify-content-between">
          <p>
            &copy; Adewumi Alabi {{ new Date().getFullYear() }} | All rights
            reserved.
          </p>

          <div class="d-flex gap-2">
            <a href="">
              <IconsIconFacebook />
            </a>
            <a href="">
              <IconsIconInstagram />
            </a>
            <a href="">
              <IconsIconTwitter />
            </a>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>
