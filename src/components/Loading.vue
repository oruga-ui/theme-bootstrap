<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);
const isFullPage = ref(true);
const isCustomLoading = ref(false);
const isCustomFullPage = ref(true);
</script>

<template>
  <section>
    <h2>Loading Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-field>
      <o-button
        size="medium"
        variant="primary"
        @click="() => (isLoading = true)">
        Launch loading
      </o-button>
    </o-field>
    <o-field>
      <o-switch v-model="isFullPage" disabled>
        Display loader over full page
      </o-switch>
    </o-field>
    <p style="position: relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
      <o-loading
        v-model:active="isLoading"
        :full-page="isFullPage"
        :can-cancel="true" />
    </p>
  </section>

  <section class="py-3">
    <h3>Base Custom Slot</h3>

    <o-field>
      <o-button
        size="medium"
        variant="primary"
        @click="() => (isCustomLoading = true)">
        Launch loading
      </o-button>
    </o-field>
    <o-field>
      <o-switch v-model="isCustomFullPage">
        Display loader over full page
      </o-switch>
    </o-field>
    <p style="position: relative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
      <o-loading
        v-model:active="isCustomLoading"
        :full-page="isCustomFullPage"
        :can-cancel="true">
        <o-icon pack="fas" icon="sync-alt" size="large" spin />
      </o-loading>
    </p>
  </section>
</template>
