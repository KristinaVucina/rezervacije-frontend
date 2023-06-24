<template>
  <div>
    <Card>
      <template #title> Simple Card </template>
      <template #content>
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="3"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <div
              class="border-1 surface-border border-round m-2 text-center py-5 px-3"
            >
              <div class="mb-3">
                <img
                  :src="
                    'https://primefaces.org/cdn/primevue/images/product/' +
                    slotProps.data.image
                  "
                  :alt="slotProps.data.name"
                  class="w-6 shadow-2"
                />
              </div>
              <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                />
                <div class="mt-5">
                  <Button icon="pi pi-search" rounded class="mr-2" />
                  <Button icon="pi pi-star-fill" rounded severity="success"
                  class="mr-2"/>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </template>
    </Card>
  </div>
</template>

<script setup>

const products = ref([
    {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
])
</script>