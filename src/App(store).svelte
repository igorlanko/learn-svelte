<script>
	import ProductItem from "./ProductItem.svelte"

	function addToCartHandler(event) {
		alert('Added to cart')
	}

	function deleteFromCartHandler() {
		alert('Deleted from the cart')
	}
</script>

<ProductItem
	productTitle="A book"
	on:add-to-cart={addToCartHandler}
	on:delete-from-cart={deleteFromCartHandler}
/>
