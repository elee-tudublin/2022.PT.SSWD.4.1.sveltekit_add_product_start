<script>
	import {
		products,
		categories,
		getAllProducts,
		getProductsByCat
	} from '../stores/productsStore.js';
</script>

<!-- Main Content - Products etc. -->
<div class="container">
	<div class="row">
		<!-- Page Header -->
		<h2 class="mt-5">Products List</h2>
	</div>
	<div class="row">
		<div class="col-sm-2">
			<!-- Page Body Left Column (menu) -->
			<div id="categoryList" class="list-group">
				<!-- placeholders - replace with real category links -->
				<button
					on:click={() => getAllProducts()}
					class="category-link list-group-item list-group-item-action"
				>
					All Products
				</button>
				{#each $categories as cat}
					<button
						on:click={() => getProductsByCat(cat.id)}
						class="category-link list-group-item list-group-item-action"
					>
						{cat.category_name}
					</button>
				{/each}
			</div>
		</div>
		<!-- End category col -->
		<div class="col-sm-10">
			<!-- Page Body Right Side (Content goes here) -->
			<div id="products">
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>description</th>
							<th>stock</th>
							<th>price</th>
						</tr>
					</thead>
					<tbody id="productRows">
						<!-- Product Rows to be inserted here -->
						{#each $products as product}
							<tr>
								<td>{product.id}</td>
								<td>{product.product_name}</td>
								<td>{product.product_description}</td>
								<td>{product.product_stock}</td>
								<td class="price">&euro;{Number(product.product_price).toFixed(2)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<!-- Add product button goes here -->
			
		</div>
		<!-- End Product col -->
	</div>
	<!-- End Row -->
</div>
<!-- End Main Content-->
