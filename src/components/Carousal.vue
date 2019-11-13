<template>
  <div class="image-carousel w-100">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="auto"
      img-height="auto"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="fluid image-class"
        v-for="(image,index) in images"
        :img-src="image.url"
        v-bind:key="index"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      images: [
        {
          url: require("../assets/images/1.jpg")
        },
        {
          url: require("../assets/images/2.jpg")
        },
        {
          url: require("../assets/images/3.png")
        }
      ]
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
<style>
.image-carousel {
  position: relative;
  overflow: hidden;
}
.image-class {
  height: 92.5vh;
}
</style>