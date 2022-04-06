<template>
  <nav class="navigation">
    <router-link to="/" class="navigation__link">
      <div class="logo navigation__logo navigation__link">
        <img src="../assets/logo.png" alt="" srcset="" />
      </div>
    </router-link>
    <router-link to="cart" class="navigation__link">
      <div class="cart navigation__cart">
        <i class="bi bi-cart" id="cart"></i>
        <label for="cart" class="cart__counter" v-show="cartQty > 0">
          <span>
            {{ cartQty }}
          </span>
        </label>
      </div>
    </router-link>
  </nav>
</template>

<script>
import Cart from "@/api/Cart";
export default {
  data() {
    return {
      cartQty: 0,
    };
  },
  methods: {
    checkQty() {
      this.cartQty = Cart.getTotalQty();
    },
  },

  mounted() {
    this.checkQty();
    window.addEventListener("save-cart", this.checkQty);
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  width: 100%;
  background: #e59c48;
  position: sticky;
  z-index: 1;
  top: 0;
  margin-bottom: 2em;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
}
.navigation__link {
  text-decoration: none;
  color: #2b2b2b;
  cursor: pointer;
}
.cart {
  font-size: 2em;
  cursor: pointer;
  display: flex;
}
.cart__counter {
  font-size: 0.5em;
  background: #ffffff;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  padding: 0.1em;
}
@media screen and (max-width: 680px) {
  .navigation {
    padding: 1em;
  }
}
</style>