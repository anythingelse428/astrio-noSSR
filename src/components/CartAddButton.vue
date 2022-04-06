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
  background: #a7f5b3;
  cursor: pointer;
  transition: all 0.2s;
}
.productCard-add:hover {
  background: #6ff08b;
}
</style>