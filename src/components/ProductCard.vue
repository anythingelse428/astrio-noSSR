<template>
  <div class="productCard">
    <div class="productCard__img ratio ratio-1x1">
      <img :src="CARD_IMAGE" class="" alt="" />
    </div>
    <div class="productCard__footer">
      <div class="info productCard__information">
        <div class="info__name">{{ title }}</div>
        <div class="info__brand" v-if="brandList[brand_id - 1]">
          {{
            brandList[brand_id - 1].title
              ? brandList[brand_id - 1].title
              : "Loading"
          }}
        </div>
        <div class="info__price">{{ price.currency }}{{ price.value }}</div>
      </div>
      <cart-add-button :id="id"></cart-add-button>
    </div>
  </div>
</template>

<script>
import API from "../api/Api";
import CartAddButton from "../components/CartAddButton.vue";
export default {
  components: { CartAddButton },
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
      required: true,
      default: function () {
        return { currency: "USD", value: 0 };
      },
    },
    image: {
      type: String,
      required: false,
    },
    brand_id: { type: Number, required: true },
  },
  data() {
    return {
      brandList: [],
    };
  },
  computed: {
    CARD_IMAGE() {
      return API.validCardImage(this.image);
    },
  },
  mounted() {
    this.brandList = API.getBrands();
  },
};
</script>

<style scoped>
.productCard {
  width: 30%;
  display: flex;
  margin: 0.5em 0.3em;
  flex-direction: row;
  flex-wrap: wrap;
}

.productCard__footer {
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.info {
  width: 70%;
  text-align: left;
}

@media screen and (max-width: 780px) {
  .productCard {
    width: 44%;
    margin: 0.5em;
  }
}
@media screen and (max-width: 650px) {
  .productCard {
    width: 90%;
    margin: 1em 0;
  }
}
@media screen and (max-width: 650px) {
  .productCard__footer {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>