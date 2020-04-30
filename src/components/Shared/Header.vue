<template>
    <header id="header">
        <div class="logo-lanista">
            <a href="http://www.lanista.com.tr">
                <img src="../../assets/logo.png" alt="Lanista Software">
            </a>
        </div>

        <div class="heading">
            <h4>Web Application Control Panel & Managament System</h4>
        </div>
        <div class="logo-helmet">
            <img src="../../assets/helmet.png" alt="Gladio Admin">
            <h4 class="dark"> Gladio Panel <small class="danger"><sup>®</sup></small></h4>
        </div>

    </header>
</template>

<script>

export default {
  name: 'Header',
  components:{
  }
}
</script>

<style lang="less" scoped>
.logo-lanista{
    align-self: center;
    padding: 1rem;
    img{
        width: 70%;
        
    }
}
.heading{
justify-self:end;
align-self:center;
    
}


.logo-helmet{
    padding: 1rem;
    text-align: right;
        img{

        width:17%;
        height:auto;
        margin-right: 40px;
    }
    h4{
        margin:0;
        margin-top: 0.3rem;
    }
    sup{
    font-weight: 200;
    font-family: "Arial";
}
}
</style>