<template>
  <div class="productDetails">
    <h2>{{ product.name }}</h2>
    <p>{{ formattedPrice }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      product:
        {
          name: 'Headphones MDR-XB650BT sony',
          price: 99.99,
          available: true      
        }
    };
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(this.product.price);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productDetails {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: auto;
}
</style>
