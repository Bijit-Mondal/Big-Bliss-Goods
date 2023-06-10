<script setup>
import Carousel from '../components/Carousal.vue'
import Products from '../components/Products.vue'
import productsData from '../../product.json'
const lastSixProducts = productsData.products.slice(-6)

</script>

<template>
  <div>
    <Carousel/>
    <Products :productsData="lastSixProducts"/>
    <div class="see-all-button">
      <vs-button color="primary" to="/products" type="filled">See all products</vs-button>
    </div>
  </div>
</template>
<style>
.see-all-button {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
}
</style>