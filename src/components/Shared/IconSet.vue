<template>
<div class="icon-container">
    <ul class="icon-list">
        <li class="icon-list-item">
            <router-link to="/" tag="a" class="link primary" exact-active-class="link danger">
                <i class="fas fa-home"></i>
            </router-link>
        </li>
        <li class="icon-list-item">
            <router-link to="/settings" tag="a" class="link primary" exact-active-class="link danger">
                <i class="fas fa-cogs"></i>
            </router-link>
        </li>
        <li class="icon-list-item">
            <router-link to="/login" tag="a" class="link success" exact-active-class="link danger">
                <i class="fas fa-sign-out-alt"></i>
            </router-link>
        </li>
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