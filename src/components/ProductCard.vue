<template>
    <div class="center">
    <div class="container">

        <article>
            <picture>
                <source media="(min-width: 640px)" srcset="/assets/image-product-desktop.jpg">
                <img src="/assets/image-product-mobile.jpg" alt="">
            </picture>
        </article>

        <article>
            <h3>P E R F U M E</h3>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
                A floral, solar and voluptuous interpertation composed by Olivier Polge, Perfumer-Creator for the House of
                CHANEL.
            </p>
            <!-- <ul>
                <li class="price">$149.99</li>
                <li>$169.99</li>
            </ul> -->
            <button class="btn">
                <img src="/assets/icon-cart.svg">
                Sent Enquiry
            </button>
        </article>

    </div>
</div>
</template>
<script setup>

</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat|Fraunces);
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap');

img {
    max-width: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
}

.center {
    font-size: 14px;
    font-family: "Fraunces", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 1px);
    margin: 0 1.5rem;
}

.price {
    color: var(--dark-cyan);
}

h1 {
    color: var(--very-dark-blue);
    font-size: 2rem;
    padding: 0.5rem 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

.container {
    max-width: 500px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
}

.container article:first-child img {
    border-radius: 0.625rem 0.625rem 0 0;
}

.container article:last-child {
    background-color: white;
    padding: 1.5rem;
    margin-top: -1rem;
    border-radius: 0 0 0.625rem 0.625rem;
}

.container ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 0;
}

.container ul li:first-child {
    font-size: 1.5rem;
    font-weight: 700;
}

.container ul li:last-child {
    text-decoration: line-through;
    padding-left: 1rem;
    color: var(--dark-grayish-blue)
}

h3 {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--dark-grayish-blue);
    padding-top: 1rem;
}

p {
    color: var(--dark-grayish-blue);
    padding: 0.5rem 0;
}

h3,
p,
.btn {
    font-family: "Montserrat", sans-serif;
}

.btn {
    background-color: var(--dark-cyan);
    color: white;
    font-weight: 700;
    padding: 1rem;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
}

.btn:hover {
    background-color: hsl(159, 33%, 30%);
}

.btn img {
    margin-right: 0.5rem;
}

@media (min-width: 640px) {
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .container article:first-child img {
        width: 100%;
        height: 100%;
        border-radius: 0.625rem 0 0 0.625rem;
    }

    .container article:last-child {
        border-radius: 0 0.625rem 0.625rem 0;
        margin-top: 0;
        width: 120%;
    }

    h3 {
        padding-top: 0;
    }
}</style>