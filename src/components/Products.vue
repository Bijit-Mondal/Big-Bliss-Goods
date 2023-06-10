<template>
    <!--Buttons of grid and list-->
    <div class="buttons">
        <i class="fa fa-th-large" id="showdiv1" aria-hidden="true"></i> &nbsp; <i class="fa fa-th-list" id="showdiv2"
            aria-hidden="true"></i>
    </div>

    <div class="container">
        <!--Product Grid-->
        <div id="div1">
            <section class="section-grid">
                <div class="grid-prod">

                    <div v-for="product in productsData" :key="product.title" class="prod-grid">
                        <img :src="product.img" :alt="product.title">
                        <h3>{{ product.title }}</h3>
                        <p v-html="product.desc"></p>
                        <vs-button class="btn" color="primary" type="filled">
                            <span class="material-symbols-outlined">shopping_bag</span>Buy
                        </vs-button>
                    </div>



                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productsData: {
            type: Array, // Adjust the data type according to your JSON structure
            required: true
        }
    },
    mounted(){
        
    }
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}

h1 {
    text-align: center;
    margin-top: 30px;
    font-family: 'Source Serif Pro', serif;
}

.buttons {
    font-size: 22px;
    margin-top: 2%;
    margin-left: 4.2%;
}

.fa:hover {
    color: darkcyan;
}

.container {
    display: flex;
    flex-flow: column nowrap;
}

/*CSS Grid*/
.section-grid {
    display: flex;
    padding-left: 25px;
    padding-right: 25px;
}

.grid-prod {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
}

.prod-grid {
    flex: 1 1 25%;
    margin: 2%;
    padding: 12px;
    border: 2px solid #000;
}

.prod-grid img {
    width: 100%;
}

h3,
p {
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1px;
}

.btn {
    font-size: 22px;
    width: 200px;
    height: 40px;
    position: right;
    margin: 10px;
    letter-spacing: 1px;
    display: inline-block;
}

button {
    float: right;
}

/*CSS List*/
.section-list {
    display: flex;
    padding: 2% 4%;
}

table {
    width: 100%;
    margin: 10px 10px;
    border: 2px solid #000;
    border-collapse: collapse;
    border-spacing: 0;
}

table tr td {
    padding: 10px;
    border-top: 2px solid #000;
}

tr td img {
    width: 100%;
}

.btn-list {
    background: darkcyan;
    border: 1px solid darkcyan;
    border-radius: 6px;
    color: white;
    font-size: 22px;
    width: 200px;
    height: 40px;
    position: right;
    margin: 10px;
    margin-top: 10%;
    letter-spacing: 1px;
    display: inline-block;

}

.btn-list:hover {
    background: white;
    border: 2px solid darkcyan;

    color: darkcyan;

    margin: 10%;

}

button {
    float: right;
}

@media (min-width : 320px) and (max-width : 480px) {

    .section-list,
    .buttons {
        display: none;
    }
}</style>