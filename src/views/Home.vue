<template>
  <div id="main">
    <div class="content">
      <img
        class="image__oruga"
        src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/master/public/logo.svg"
        alt="Logo Oruga Theme Bootstrap" />
      <h1>Oruga Bootstrap Theme Demo</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
.content {
  width: auto;
  margin: 0 auto;
  transform: translateY(70%);
}
.content h1 {
  margin-top: 0.5em;
}
.image__oruga {
  height: 128px;
  display: flex;
  margin: 0 auto;
}
</style>
