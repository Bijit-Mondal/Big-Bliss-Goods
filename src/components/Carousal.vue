<template>
    <div class="carousel">
        <div class="carousel-slide rounded-image" :style="slideStyle">
            <div class="image-overlay"></div>
            <img :src="currentImage.src" :alt="currentImage.alt" class="carousel-image">
        </div>
        <div class="carousel-navigation">
            <button class="carousel-prev" @click="prevImage">
                <span class="material-symbols-outlined">
                    arrow_back_ios_new
                </span>
            </button>
            <button class="carousel-next" @click="nextImage">
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageArray: [
                {
                    id: 1,
                    src: "/carousel/1.jpg",
                    alt: "Image 1"
                },
                {
                    id: 2,
                    src: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGh8fHx8fHwxNjg0NTc0NTA3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
                    alt: "Image 2"
                },
                {
                    id: 3,
                    src: "https://images.unsplash.com/photo-1520467795206-62e33627e6ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2ODQ1NzQzOTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
                    alt: "Image 3"
                }
            ],
            currentIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.imageArray[this.currentIndex];
        },
        slideStyle() {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`
            };
        }
    },
    methods: {
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.imageArray.length) % this.imageArray.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.imageArray.length;
        }
    }
};
</script>

<style scoped>
.carousel {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
}

@media (max-width:800px) {
    .carousel {
        height: 300px;
    }
}

.carousel-slide {
    position: relative;
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-navigation {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}

.carousel-prev,
.carousel-next {
    margin: 0 10px;
    padding: 5px 10px;
    background-color:#DDFFBB;
    opacity: 0.19;
    border-radius: 40%;
}

.rounded-image {
    border-radius: 2%;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2%;
    overflow: hidden;
    filter: blur(20px);
    z-index: 1;
}

.rounded-image img {
    display: block;
    width: 100%;
}
</style>
