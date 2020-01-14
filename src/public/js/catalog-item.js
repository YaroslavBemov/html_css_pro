export default {
    template: `
    <article class="product">
        <a href="#">
            <img class="product__img" :src="image" alt="photo product">
        </a>
        <div class="product__content">
            <a class="product__name">{{ item.product_name }}</a>
            <p class="product__price">{{ item.price }} $</p>
        </div>
        <a href="#" class="product__add"><button class="buy-btn" @click="$root.$refs.cart.addProduct (item)">Add to Cart</button></a>
    </article>
    `,
    props: {
        image: {
            type: String,
            default: () => 'https://placehold.it/200x150'
        },
        item: {
            type: Object,
            default: () => ({})
        }
    }
}