<template>
    <div class="search-container">
        <div class="capsul">
        <input placeholder="Lütfen Aranacak Kelimeyi Yazın..">
        <button class="btn btn-sm btn-dark"><i class="fa fa-search"></i></button>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

.capsul {
    width: 100%;
    position: relative;
    border: thin solid #0d5d56;
    border-radius:0.2em;

    input {
        width: 90%;
        font-size: 0.7rem;
        padding: 0.2rem;
        border:none;
        outline: none;
        background-color: #FAFAFA;
    }

    .btn {
        width: 10%;
        height: 100%;
        display: inline-block;
        font-size: 0.9rem;
        padding: 0.2rem 0.1rem;
        border: none;
        border-radius: none;
    }
}

</style>