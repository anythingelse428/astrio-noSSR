<template>
  <aside class="filter">
    <div class="brands">
      <p
        @click="selectBrand(0)"
        class="brand"
        :class="{
          brandActive: selectedBrand === 0,
        }"
      >
        All Brands
      </p>
      <p
        class="brand"
        :class="{
          brandActive: brand.id === selectedBrand,
        }"
        @click="selectBrand(brand.id)"
        v-for="brand in brandList"
        :key="brand.id"
      >
        {{ brand.title }}
      </p>
    </div>
  </aside>
</template>

<script>
import API from "../api/Api.js";
export default {
  data() {
    return {
      selectedBrand: 0,
      brandList: [],
    };
  },

  methods: {
    selectBrand(brandNum) {
      this.selectedBrand = brandNum;
      this.$emit("changeBrand", this.selectedBrand);
    },
  },
  mounted() {
    this.brandList = API.getBrands();
  },
};
</script>

<style scoped>
.filter {
  padding: 0.5em;
  height: 100%;
  text-align: center;
  float: right;
  border-right: 2px solid #d3d3d3ee;
}
.brandActive {
  text-decoration: underline;
  font-weight: bolder;
}
.brands{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.brand {
  cursor: pointer;
  font-size: 1.2em;
  margin: 0.5em auto;
  color: #535353;
}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .filter {
    width: 25%;
  }
}
@media screen and (max-width: 481px) {
  .filter {
    width: 100%;
    border: none;
  }
  .brands {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .brand {
    cursor: pointer;
    font-size: 1.2em;
    width: max-content;
    margin: 0.1em 0.4em;
  }
}
@media screen and (max-width: 320px) and (min-width: 481px) {
  .brands {
    justify-content: center;
  }
  .brand {
    width: 34%;
  }
}
</style>