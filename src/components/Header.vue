<template>
    <div class="navbar">
        <vs-navbar type="flat" color="primary" text-color="#000" v-model="activeItem" class="nabarx">
            <div slot="title" class="navbar-title">
                <!-- <img style="padding-right: 20px; width: 100px;" src="/favicon.png"> -->
                <span class="menu-link">Big Bliss Goods</span>
            </div>
            <div slot="title" class="navbar-title-phone">
                <span class="menu-link">Big Bliss Goods</span>
            </div>
            <vs-navbar-item class="vs-navbar-item" index="0">
                <a href="#" class="menu-link">Home</a>
            </vs-navbar-item>
            <vs-navbar-item class="vs-navbar-item" index="1">
                <router-link to="/products" class="menu-link">Products</router-link>
            </vs-navbar-item>
            <vs-navbar-item class="vs-navbar-item" index="2">
                <a href="#" class="menu-link">Contact US</a>
            </vs-navbar-item>
            <vs-input class="vs-navbar-item vs-navbar-search" placeholder="Search Products" v-model="search" />
        </vs-navbar>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        activeItem: 0,
        search: ''
    })
}
</script>
  
<style scoped>
.navbar {
    padding-bottom: 0px;
}

.navbar-title {
    display: flex;
    align-items: left;
    justify-content: left;
    /* Center horizontally */
}

#app div header {
    /* border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px; */
}

@media (min-width: 801px) {
    /* .navbar-title img {
        align-items: left;
    } */

    .navbar-title-phone {
        display: none;
    }

    .navbar .vs-navbar-item {
        position: relative;
        right: 144px;
    }

    /* Image */
    .vs-con-items .navbar-title span{
        position: relative;
        right: 800px;
    }

    .menu-link {
        font-size: 20px;
    }

    .vs-navbar-search input[type=text] .vs-navbar-search {
        font-size: 17px;
        font-family: 'Comfortaa', display;
        transform: translatex(0px) translatey(0px);
        /* border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-top-left-radius: 18px;
        border-bottom-right-radius: 18px; */
        text-align: right;
    }
}

@media (max-width:800px) {

    /* Con items */
    .navbar .vs-navbar-item {
        position: relative;
        left: 36px;
    }
    .navbar-title{
        display: none;
    }
    .navbar .nabarx {
        min-height: 69px;
    }

    .navbar-title-phone {
        position: relative;
        left: 45px;
        display: block;
        font-size: larger;
        font-family: 'Kavivanar';
    }

    /* Input */
    .vs-navbar-search input[type=text] .vs-navbar-search {
        padding-left: 317px;
    }

    /* Image */
    .vs-con-items .navbar-title img {
        display: none;
    }

}
</style>
  