<template>
  <section>
    <o-sidebar
      v-model:open="isOpen"
      variant="primary"
      :fullheight="isFullheight"
      :fullwidth="isFullwidth"
      :overlay="isOverlay"
      :right="isRight"
      :reduce="isReduced"
      @close="toggleSidebar()">
      <o-button
        v-if="isFullwidth"
        icon-left="times"
        label="Close"
        @click="toggleSidebar()" />
      <img
        width="80"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js" />
      <h3>Example</h3>
    </o-sidebar>
    <div class="block">
      <o-field grouped group-multiline>
        <o-switch v-model="isOverlay">Overlay</o-switch>
        <o-switch v-model="isFullheight">Fullheight</o-switch>
        <o-switch v-model="isFullwidth">Fullwidth</o-switch>
        <o-switch v-model="isRight">Right</o-switch>
        <o-switch v-model="isReduced">Reduce</o-switch>
      </o-field>
    </div>

    <o-button @click="toggleSidebar()">Show</o-button>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);
    const isOverlay = ref(true);
    const isFullheight = ref(true);
    const isFullwidth = ref(false);
    const isRight = ref(false);
    const isReduced = ref(false);

    const toggleSidebar = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      toggleSidebar,
      isOpen,
      isOverlay,
      isFullheight,
      isFullwidth,
      isRight,
      isReduced,
    };
  },
};
</script>
