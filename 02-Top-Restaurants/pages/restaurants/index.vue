<script setup >
</script>
<template>
<div>
      <Html :lang="dynamic > 50 ? 'en-US' : 'en-IN'">
<Head>
    <Title>
        Top 50 Restaurant in the World
    </Title>
    <Meta name="description" content="My page is cool"/>
    <Link rel="preload" href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" as="script"/>
</Head>
</Html>
      <NuxtLayout name="custom">
             <div class="container">
                  <RestaurantTable/>
            </div>
      </NuxtLayout>
</div>
</template>