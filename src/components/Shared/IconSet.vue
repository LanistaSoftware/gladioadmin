<template>
<div class="icon-container">
    <ul class="icon-list">
        <li class="icon-list-item"><button class="btn btn-sm btn-danger"><i class="fas fa-info"></i></button></li>
        <li class="icon-list-item"><button class="btn btn-sm btn-danger"><i class="fas fa-info"></i></button></li>
        <li class="icon-list-item"><button class="btn btn-sm btn-danger"><i class="fas fa-info"></i></button></li>
        <li class="icon-list-item"><button class="btn btn-sm btn-danger"><i class="fas fa-info"></i></button></li>
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
    align-content: end;

    .icon-list {


        .icon-list-item {

            float: left;
        }
    }
}

</style>