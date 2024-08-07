<script setup>

</script>

<template>
  <div class="home-banner-wrapper">
    <div class="home-banner">
      <div class="content-layer col-sm-12 col-lg-6 ">
        <div class="text-content" style="display: block; z-index: 100">
          <div class="banner-heading">
            <h1 class="banner-title" style="
            font-size: 62px;
            font-weight: 800;
            width: 70%;
            color: #0f2c6b;
            font-family: system-ui;
            ">Commençons le Plan Financier du Futur</h1>
            <p class="banner-sub" style="    
            font-size: 20px;
            color: #333333;
            width: 55%;
            font-family: sans-serif;
            font-weight: bold;
            margin-top: 40px;
            ">
              Nous fournissons des conseils financiers depuis plus de 20 ans avec nos meilleurs experts et nous vous
              assurons les meilleurs résultats
            </p>
          </div>
          <div class="button-container">
            <router-link to="/à-propos"><button class="btn btn-primary">En savoir plus</button></router-link>
            <router-link to="/contact"><button class="btn btn-secondary">Nous contacter</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style >
:root {
  --primary-color: #ffcf06;
  --secondary-color: #375084;
}

.btn-secondary {
  color: #fff;
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary.focus,
.btn-secondary:active,
.btn-secondary.active {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-color: var(--primary-color)
}

.btn-primary {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-color: var(--primary-color)
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary.focus,
.btn-primary:active,
.btn-primary.active {
  color: #fff;
  background-color: var(--secondary-color);
  border-color: var(--secondary-color)
}

.home-banner-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
  max-width: none !important;
}

.home-banner {
  background-image: url("https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/06/slider_2.jpg?x12902");
  background-size: cover;
  background-attachment: fixed;
  height: 750px;
}

.content-layer {
  position: absolute;
  top: 25%;
  left: 20%;
  padding: 20px;


}

.button-container {
  display: flex;
  margin-top: 40px;
}

button {
  padding: 15px 40px !important;
  cursor: pointer !important;
  font-size: 2rem !important;
  font-weight: bold !important;
}
</style>
