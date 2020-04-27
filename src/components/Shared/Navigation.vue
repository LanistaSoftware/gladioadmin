<template>
    <nav class="sidenav">
        <ul class="navigation-list">
            <li v-for="nav in navs" :key="nav.id" :class="nav.tagClass">
                <router-link :to="nav.to" tag="a" :class="nav.linkClass" :active-class="nav.activeClass" exact>
                    <span class="nav-icon">
                        <i :class="nav.iconClass"></i>
                    </span>
                    {{nav.linkLabel}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default { 
    props:[
        "navs"
    ]  
}
</script>
<style lang="less" scoped>
@nbfcolor: #303030;
@bgcolor: #ffffff;
@incolor: #B5B5B5;
@redcolor: #e33;
@pagebgcolor: #E5E5E5;
@sidebgcolor: #FAFAFA;
@headingfont: 'Kanit', sans-serif;
@contentfont: 'Exo', sans-serif;
@btntextcolor: #eee;

.sidenav {
    padding: 1rem 4rem 1rem 1rem;
}

.navigation-item {
    padding-bottom: 0.8rem;
    border-bottom: 0.2px solid #f2f2f2;
    transition: 0.6s;
    cursor: pointer;

    .nav-link {
        margin-right: 1rem;
        color: @nbfcolor;
        transition: 0.6s;

    }

    .nav-icon i {
        color: @nbfcolor;
        padding-top: 0.8rem;
        padding-right: 0.5rem;
        transition: 0.3s;
    }
}

.navigation-item:hover {
    color: @redcolor;
    border-color: @redcolor;

    .nav-link,
    .nav-icon i {
        color: @redcolor;
    }

}


</style>