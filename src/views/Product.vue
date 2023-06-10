<script setup>
import Products from '../components/Products.vue'
import productsData from '../../product.json'
const AllProducts = productsData.products;

</script>

<template>
  <div>
    <Products :productsData="AllProducts"/>
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