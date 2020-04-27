<template>
    <nav class="sidenav">
        <ul  class="navigation-list">
            <router-link to='/users' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-users "></i></span> <a class="nav-link active" href="#">Kullanıcılar</a>
            </router-link>
            <router-link to='/blogs' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-book-open "></i></span> <a class="nav-link" href="#">Makaleler </a>
            </router-link>
            <router-link to='/sliders' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-photo-video "></i></span><a class="nav-link" href="#">Slaytlar </a>
            </router-link>
            <router-link to='/videos' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-video "></i></span> <a class="nav-link" href="#">Videolar</a>
            </router-link>
            <router-link to='/reference' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-asterisk "></i> </span><a class="nav-link" href="#">Referanslar </a>
            </router-link>
            <router-link to='/products' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-boxes "></i></span> <a class="nav-link" href="#">Ürünler </a>
            </router-link>
            <router-link to='/sectors' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-bezier-curve "></i></span> <a class="nav-link" href="#">Sektörler </a>
            </router-link>
            <router-link to='/aboutus' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-address-card "></i></span> <a class="nav-link" href="#">Hakkımızda </a>
            </router-link>
            <router-link to='/employe' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-users "></i></span> <a class="nav-link" href="#">Ekibimiz </a>
            </router-link>
            <router-link to='/contact' tag='li' class="navigation-item" active-class="act">
                <span class="nav-icon"><i class="fas fa-cogs "></i></span><a class="nav-link" href="#">Ayarlar <br></a>
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {   
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

.act {

    a,
    i {
        color: @redcolor;

    }
}

</style>