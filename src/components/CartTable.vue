<template>
  <div class="CartTable">
    <table class="table cart__table" v-if="cart.length > 0">
      <thead>
        <tr>
          <th class="table-collapse">#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody class="body table__body">
        <tr class="body__row" v-for="(item, idx) in cart" :key="idx">
          <th class="table-collapse">{{ idx + 1 }}</th>

          <td>
            <div class="body__row-name">
              <div class="table-collapse ratio ratio-4x3">
                <img :src="getCardSrc(item.image)" width="100" />
              </div>
              <span>
                <span>
                  {{ item.brand }}
                </span>
                /
                <span>
                  {{ item.title }}
                </span>
              </span>
            </div>
          </td>
          <td nowrap>
            <span v-if="item.price.currency == 'USD'">$</span
            ><span v-else-if="item.price.currency == 'RUB'">₽</span
            >{{ item.price.value }}
          </td>
          <td nowrap>
            <button
              @click="changeItemQty(item, 'add')"
              class="cart__button-changeQty"
            >
              +</button
            ><span>
              {{ item.qty }}
            </span>
            <button
              @click="changeItemQty(item, 'remove')"
              class="cart__button-changeQty"
            >
              -
            </button>
          </td>
          <td>{{ item.total.toFixed(2) }}</td>
          <td>
            <i
              @click="changeItemQty(item, 'delete')"
              class="bi bi-trash-fill cart__button-changeQty"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table__footer" v-if="cart.length > 0">
      <span>
        Subtotal <b>{{ SUBTOTAL }}</b>
      </span>
      <button class="btn btn-primary">Checkout</button>
    </div>
    <div v-else>
      <h2>Похоже корзина пуста, вернитесь на главную, чтобы пополнить ее!</h2>
    </div>
  </div>
</template>

<script>
import Cart from "../api/Cart";
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    getCardSrc(src) {
      return Cart.validCardImage(src);
    },

    changeItemQty(cartItem, action) {
      let isLast = cartItem.qty - 1 === 0;
      switch (action) {
        case "add":
          Cart.add(cartItem.id);
          break;
        case "remove":
          if (!isLast) {
            Cart.removeOne(cartItem.id);
          } else {
            confirm("Товар будет удален из корзины, продолжить?")
              ? Cart.removeOne(cartItem.id)
              : false;
          }
          break;
        case "delete":
          Cart.deleteAll(cartItem.id);
      }
      this.cart = Cart.cartFill();
      return this.cart;
    },
  },
  computed: {
    SUBTOTAL() {
      let total = 0;
      if (this.cart.length > 0) {
        this.cart.map((el) => (total += el.total));
      }
      return total.toFixed(2);
    },
  },
  mounted() {
    this.cart = Cart.cartFill();
  },
};
</script>

<style scoped>
.cart__table {
  width: 80%;
  margin: 0 auto;
  border-spacing: 0;
}
.table__footer {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 1em auto;
  align-items: center;
}
.body__row > td,
th {
  padding: 0.5em;
  vertical-align: middle;
}
.body__row:nth-child(odd) {
  background: #bababa8c;
}
.body__row-name {
  display: flex;
  align-items: center;
  width: fit-content;
}
.cart__button-changeQty {
  background: transparent;
  border: 0;
  font-size: 1.4em;
  padding: 0.1em;
  margin: 0 0.2em;
  cursor: pointer;
  color: #303330;
}
@media screen and (max-width: 768px) {
  .cart__table {
    width: 100%;
    border-spacing: 0;
  }
  .table-collapse {
    display: none;
  }

  .body__row > td {
    padding: 0.15em;
  }
  .cart__button-changeQty {
    background: transparent;
    border: 0;
    font-size: 1.4em;
    cursor: pointer;
    color: #303330;
  }
}
</style>