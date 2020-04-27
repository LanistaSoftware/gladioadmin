<template>
    <header id="header">
        <div class="logo">
            <a href="http://www.lanista.com.tr">
                <img src="../../assets/logo.png" alt="Lanista Software">
            </a>
        </div>
        <div class="heading">
            <h3>Gladio Blog Admin Panel & Control Systems</h3>
        </div>
    </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>
.logo{
    place-items: center;
    padding: 1rem;
    img{
        width: 90%;

    }
}
.heading{
justify-self:end;
align-self:center;
padding: 1rem;
    
}
</style>