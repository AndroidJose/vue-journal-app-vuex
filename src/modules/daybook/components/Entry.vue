<template>
    <div class="entry-container mb-3 pointer p-2"
         @click="$router.push({name: 'entry', params: { id: 10 }})">
        <!-- Titulo de la entrada -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">22 </span>
            <span class="mx-1 fs-5">Enero </span>
            <span class="mx-2 fw-light">2022, sábado</span>
        </div>
        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et consequuntur ipsa distinctio non? Expedita exercitationem ipsa dolorum, eum aliquid tempora, ducimus, cum corrupti a facilis recusandae vel alias? Dolorum?</div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    &:hover {
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>