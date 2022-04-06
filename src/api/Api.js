import brands from '../brands.json'
import products from '../products.json'

const API = {
    getBrands() {
        return brands
    },
    getProducts() {
        return products
    },
    validCardImage(src) {
        let source;
        try {
            source = require("@/assets" + src);
        } catch (error) {
            source = require("@/assets/blank.jpg");
        }
        return source;
    }
}

export default API