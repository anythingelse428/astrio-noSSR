<template>
  <button class="productCard-add" @click="addToCart(id)">
    <i class="bi bi-cart-plus"></i>
  </button>
</template>

<script>
import Cart from "@/api/Cart";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addToCart(id) {
      Cart.add(id);
    },
  },
};
</script>

<style>
.productCard-add {
  width: 30%;
  border: 0;
  padding: 0.5em;
  border-radius: 0.25em;
  font-size: 1.5em;
  background: transparent;
  border: 2px solid #85848494;
  color: #5f5f5f;
  cursor: pointer;
  transition: all 0.1s;
}

.productCard-add:hover {
  background: linear-gradient(180deg,#ffac00d4,#ff921f);
  border-color: #f0b40f transparent #f1750e;
  box-shadow: inset 0 -2px 0 0 #ffffff61;
  color: #eee;
}
</style>