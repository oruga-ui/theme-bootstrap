<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const isOverlay = ref(true);
const isFullheight = ref(true);
const isFullwidth = ref(false);
const isReduced = ref(false);
const position = ref();
const expandOnHover = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <section>
    <h2>Sidebar Demoo</h2>
    <hr />
  </section>

  <section class="mt-4">
    <o-sidebar
      v-model:open="isOpen"
      variant="primary"
      :fullheight="isFullheight"
      :fullwidth="isFullwidth"
      :overlay="isOverlay"
      :position="position"
      :reduce="isReduced"
      :expand-on-hover="expandOnHover"
      mobile="fullwidth"
      @close="toggleSidebar()">
      <o-button class="btn-close" aria-label="Close" @click="toggleSidebar()" />
      <img
        width="80"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js" />
      <h3>Example</h3>
    </o-sidebar>

    <o-field grouped group-multiline>
      <o-switch v-model="isOverlay">Overlay</o-switch>
      <o-switch v-model="isFullheight">Fullheight</o-switch>
      <o-switch v-model="isFullwidth">Fullwidth</o-switch>
      <o-switch v-model="isReduced">Reduce</o-switch>
      <o-field>
        <o-switch v-model="expandOnHover">Expand on hover</o-switch>
      </o-field>

      <o-field label="Position">
        <o-select v-model="position">
          <option value="">default</option>
          <option value="top">top</option>
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
        </o-select>
      </o-field>
    </o-field>

    <o-button @click="toggleSidebar()">Show</o-button>
  </section>
</template>
