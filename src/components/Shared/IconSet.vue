<template>
<div class="icon-container">
    <ul class="icon-list">
        <li class="icon-list-item"><button class="btn btn-primary"><i class="fas fa-home"></i></button></li>
        <li class="icon-list-item"><button class="btn btn-primary"><i class="fas fa-cogs"></i></button></li>
        <li class="icon-list-item"><button class="btn btn-danger"><i class="fas fa-sign-out-alt"></i></button></li>
    </ul>
</div>

</template>
<script>
export default {
    name:"IconSet"
}
</script>
<style lang="less" scoped>
.icon-container {
    display: grid;
    grid-template-columns: fit-content(80%) auto;
    place-content:end;


    .icon-list {
        margin-bottom: 0;
        .icon-list-item {
            display: inline-block;
            padding-bottom: 0.3rem;
            padding-right: 0.5rem;
        
        }
    }
}

</style>