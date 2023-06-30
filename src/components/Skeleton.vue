<script setup lang="ts">
import { ref } from "vue";

const animated = ref(true);
</script>

<template>
  <section>
    <h2>Skeleton Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-field grouped group-multiline>
      <o-switch v-model="animated">Animated</o-switch>
    </o-field>
    20%
    <o-skeleton width="20%" :animated="animated" />
    40%
    <o-skeleton width="40%" :animated="animated" />
    80%
    <o-skeleton width="80%" :animated="animated" />
    Count 2
    <o-skeleton :animated="animated" :count="2" />
  </section>

  <section class="py-3">
    <h3>Circle</h3>

    <o-skeleton :animated="animated" circle width="64px" height="64px" />
  </section>

  <section class="py-3">
    <h3>Sizes</h3>
    Small
    <o-skeleton :animated="animated" size="small" />
    Default
    <o-skeleton :animated="animated" />
    Medium
    <o-skeleton :animated="animated" size="medium" />
    Large
    <o-skeleton :animated="animated" size="large" />
  </section>

  <section class="py-3">
    <h3>Position</h3>

    Left
    <o-skeleton width="30%" position="left" :animated="animated" />
    Center
    <o-skeleton width="30%" position="centered" :animated="animated" />
    Right
    <o-skeleton width="30%" position="right" :animated="animated" />
  </section>
</template>
