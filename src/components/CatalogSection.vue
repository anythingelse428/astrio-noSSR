<template>
  <div class="catalog">
    <brand-filter @changeBrand="selectedBrand"></brand-filter>
    <div class="catalog__cards" v-if="FILTRED_CATALOG.length">
      <product-card
        v-for="item in FILTRED_CATALOG"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :price="item.regular_price"
        :type="item.type"
        :brand_id="item.brand"
        :image="item.image"
      ></product-card>
    </div>
    <div class="catalog__cards-error" v-else>Ничего не найдено :(</div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import BrandFilter from "./BrandFilter.vue";
import API from "../api/Api.js";
export default {
  components: { ProductCard, BrandFilter },
  data() {
    return {
      products: [],
      brandNumber: 0,
    };
  },
  methods: {
    selectedBrand(data) {
      this.brandNumber = data;
    },
  },
  computed: {
    FILTRED_CATALOG() {
      let brand = this.brandNumber;
      if (this.products.length > 0 && this.brandNumber) {
        return this.products.filter(function (el) {
          return el.brand == brand;
        });
      }
      return this.products;
    },
  },

  mounted() {
    this.products = API.getProducts();
  },
};
</script>

<style scoped>
.catalog {
  display: flex;
  width: 100%;
  justify-content: center;
}
.catalog__cards-error,
.catalog__cards {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .catalog__cards {
    width: 75%;
  }
}
@media screen and (max-width: 481px) {
  .catalog__cards {
    width: 90%;
  }
  .catalog {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>