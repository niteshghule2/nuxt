<template>
<div class="container">

    <slot name="header" />
    <div>
        <img src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" alt="">
</div>
        <slot name="redirectEl" />
</div>
</template>

<style scoped>
.container{
    text-align: center;
    margin-top: 5rem;
}
img{
 width: 10rem;
}
</style>