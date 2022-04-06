import products from "../products.json";
import brands from "../brands.json";
import API from "./Api.js"
const Cart = {
    ...API,
    cart: JSON.parse(localStorage.getItem('id')) || [],
    cartPrety: [],
    init() {
        const cart = localStorage.getItem('id') || '[]'
        this.cart = JSON.parse(cart)
    },
    getCart() {
        return JSON.parse(localStorage.getItem('id'))
    },
    save() {
        const evt = new CustomEvent("save-cart")
        window.dispatchEvent(evt)
        const cart = JSON.stringify(this.cart)
        localStorage.setItem('id', cart)
    },
    add(id) {
        this.cart.push(Number(id));
        this.save()
    },
    removeOne(id) {
        let removeIdx = this.cart.indexOf(Number(id));
        if (removeIdx > -1) {
            this.cart.splice(removeIdx, 1)
        }
        this.save()
    },
    deleteAll(id) {
        let tempArr = this.cart.filter(el => { return el != id })
        this.cart = tempArr
        this.save()
    },
    getProductQty(product) {
        return this.cart.reduce(function (stack, id) {
            id = product
            return stack[id] ? stack[id]++ : stack[id] = 1, stack;
        }, {});
    },
    getTotalQty() {
        return this.cart.length
    },

    cartFill() {
        this.cartPrety = [];
        // Считаю сколько раз встречается одинаковый id в корзине
        let sortedIDs = Object(
            this.cart.reduce((acc, el) => {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
            }, {})
        );

        // Заполняю корзину данными о товаре и его количестве
        Object.keys(sortedIDs).forEach((el) => {
            if (el !== null) {
                this.cartPrety.push({
                    id: el,
                    title: products[el - 1].title,
                    brand: brands[products[el - 1].brand - 1].title,
                    price: products[el - 1].regular_price,
                    image: products[el - 1].image,
                    qty: sortedIDs[el],
                    total: sortedIDs[el] * products[el - 1].regular_price.value,
                });
            }
        });
        return this.cartPrety;
    }
}
Cart.init()
export default Cart