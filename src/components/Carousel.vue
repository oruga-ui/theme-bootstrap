<script setup lang="ts">
const carousels = [
  { text: "Slide 1", color: "#445e00" },
  { text: "Slide 2", color: "#006724" },
  { text: "Slide 3", color: "#b60000" },
  { text: "Slide 4", color: "#f4c300" },
  { text: "Slide 5", color: "#005c98" },
];
</script>

<template>
  <section>
    <h2>Carousel Demo</h2>
    <hr />
  </section>
  <section class="my-4">
    <h3>Base</h3>
    <o-carousel>
      <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section
          class="ex-slide"
          :style="{ 'background-color': carousel.color }">
          <h1>{{ carousel.text }}</h1>
        </section>
      </o-carousel-item>
    </o-carousel>
  </section>
</template>

<style scoped>
.ex-slide {
  padding: 9rem 4.5rem;
  color: #ffffff;
  text-align: center;
}
</style>
