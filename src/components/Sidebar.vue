<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);
const isOverlay = ref(true);
const isFullheight = ref(true);
const isFullwidth = ref(false);
const isReduced = ref(false);
const expandOnHover = ref(false);
const teleport = ref(false);
const position = ref("left");
const inline = ref(false);

const toggleSidebar = () => {
  isActive.value = !isActive.value;
};

const inline_expandOnHover = ref(false);
const inline_mobile = ref("reduced");
const inline_reduce = ref(false);
</script>

<template>
  <section>
    <h2>Sidebar Demoo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field grouped>
      <o-switch v-model="isOverlay" label="Overlay" />
      <o-switch v-model="isFullheight" label="Fullheight" />
      <o-switch v-model="isFullwidth" label="Fullwidth" />
      <o-switch v-model="isReduced" label="Reduce" />
      <o-switch v-model="expandOnHover" label="Expand on hover" />
      <o-switch v-model="teleport" label="On body" />
      <o-switch v-model="inline" label="Inline" />
    </o-field>

    <o-field label="Position">
      <o-select v-model="position">
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </o-select>
    </o-field>

    <o-button label="Show Sidebar" @click="toggleSidebar()" />

    <o-sidebar
      v-model:active="isActive"
      variant="primary"
      :fullheight="isFullheight"
      :fullwidth="isFullwidth"
      :overlay="isOverlay"
      :position="position"
      :reduce="isReduced"
      :expand-on-hover="expandOnHover"
      :teleport="teleport"
      :inline="inline"
      mobile="fullwidth"
      @close="toggleSidebar()">
      <a class="btn-close" aria-label="Close" @click="toggleSidebar()" />
      <img
        width="80"
        src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        alt="Lightweight UI components for Vue.js" />
      <h3>Example</h3>
    </o-sidebar>
  </section>

  <section>
    <h3>Inline</h3>

    <div class="sidebar-inline">
      <div class="sidebar-layout">
        <o-sidebar
          inline
          :mobile="inline_mobile"
          :expand-on-hover="inline_expandOnHover"
          :reduce="inline_reduce"
          active>
          <img
            width="128"
            src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
            alt="Lightweight UI components for Vue.js" />
          <section style="padding: 1em">
            <h5>Example 1</h5>
            <h5>Example 2</h5>
            <h5>Example 3</h5>
            <h5>Example 4</h5>
            <h5>Example 5</h5>
          </section>
        </o-sidebar>
      </div>

      <div class="sidebar-layout">
        <o-field>
          <o-switch v-model="inline_reduce" label="Reduced" />
        </o-field>
        <o-field>
          <o-switch v-model="inline_expandOnHover" label="Expand on hover" />
        </o-field>
        <br />
        <o-field label="Mobile Layout">
          <o-select v-model="inline_mobile">
            <option :value="null"></option>
            <option value="reduced">Reduced</option>
            <option value="hidden">Hidden</option>
            <option value="fullwidth">Fullwidth</option>
          </o-select>
        </o-field>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sidebar-inline {
  display: flex;
  flex-direction: row;
  width: 100%;

  .sidebar-layout {
    padding: 1rem;
    flex-basis: 50%;
  }
}
</style>
