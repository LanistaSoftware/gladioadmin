<template>
    <footer>
        <section><h3>Lanista Software</h3></section>
        <section><img src="/hashtag.png" alt="Footer Icon"></section>
    </footer>
</template>
<script>
export default {
  name: 'footer'
}
</script>
<style lang="less" scoped>
footer{
    padding: 1rem;
    display: grid;
    grid-template-columns: 50% 50%;

    section:last-child{
        width: 100%;
        display:grid;
        place-items: end;
        
        img{
            height: 100%;
            width: auto;
        }
    }
}
</style>