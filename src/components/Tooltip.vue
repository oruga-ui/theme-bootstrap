<script setup lang="ts">
import { ref } from "vue";

const active = ref(true);
</script>

<template>
  <section>
    <h2>Tooltip Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-tooltip label="Tooltip right" position="right">
      <o-button label="Right" />
    </o-tooltip>

    <o-tooltip label="Tooltip top" variant="dark">
      <o-button label="Top (default)" />
    </o-tooltip>

    <o-tooltip label="Tooltip bottom" variant="dark" position="bottom">
      <o-button label="Bottom" />
    </o-tooltip>

    <o-tooltip label="Tooltip left" variant="dark" position="left">
      <o-button label="Left" />
    </o-tooltip>

    <o-tooltip label="delayed by 1000ms" variant="dark" :delay="1000">
      <o-button variant="warning" label="Delayed" />
    </o-tooltip>
  </section>

  <section class="py-3">
    <h3>Colors</h3>

    <o-tooltip label="Default">
      <o-button label="Default" />
    </o-tooltip>

    <o-tooltip label="Primary" variant="primary">
      <o-button label="Primary" />
    </o-tooltip>

    <o-tooltip label="Secondary" variant="secondary">
      <o-button label="Secondary" />
    </o-tooltip>

    <o-tooltip label="Success" variant="success">
      <o-button label="Success" />
    </o-tooltip>

    <o-tooltip label="Danger" variant="danger">
      <o-button label="Danger" />
    </o-tooltip>

    <o-tooltip label="Warning" variant="warning">
      <o-button label="Warning" />
    </o-tooltip>

    <o-tooltip label="Info" variant="info">
      <o-button label="Info" />
    </o-tooltip>

    <o-tooltip label="Dark" variant="dark">
      <o-button label="Dark" />
    </o-tooltip>

    <o-tooltip label="Body" variant="body">
      <o-button label="Body" />
    </o-tooltip>
  </section>

  <section class="py-3">
    <h3>Multiline</h3>

    <o-tooltip
      variant="info"
      label="Tooltip multiline, probably because it's too long for a casual tooltip"
      multiline>
      <o-button label="Multiline (default)" />
    </o-tooltip>

    <o-tooltip
      variant="info"
      label="It's not brief, but it's also not long"
      multiline>
      <o-button label="Multiline (small)" />
    </o-tooltip>

    <o-tooltip
      variant="info"
      label="Tooltip large multiline, because it's too long to be on a medium size. Did I tell you it's really long? Yes, it is — I assure you!"
      position="bottom"
      multiline>
      <o-button label="Multiline (large)" />
    </o-tooltip>
  </section>

  <section class="py-3">
    <h3>Slot</h3>

    <o-tooltip variant="light" position="bottom" multiline>
      <o-button>Html Content</o-button>
      <template #content>
        <b>Lorem ipsum dolor sit amet</b>, consectetur warning elit.
        <i>Fusce id fermentum quam</i>.
      </template>
    </o-tooltip>

    <o-tooltip
      variant="light"
      :triggers="['click']"
      :auto-close="['outside', 'escape']">
      <template #content>
        <o-icon icon="heart" variant="dark"></o-icon>
        <o-icon icon="thumbs-up" variant="dark"></o-icon>
        <o-icon icon="thumbs-down" variant="dark"></o-icon>
        <o-icon icon="smile-beam"></o-icon>
      </template>
      <o-button label="Action" />
    </o-tooltip>
  </section>

  <section class="py-3">
    <h3>Toggle</h3>

    <o-field>
      <o-switch v-model="active"> Toggle Always </o-switch>
    </o-field>
    <o-tooltip
      variant="danger"
      label="I'm never closing"
      :active="active"
      always
      position="bottom">
      <o-button label="Always" />
    </o-tooltip>

    <o-tooltip
      variant="danger"
      label="Tooltip right"
      position="right"
      :active="active">
      <o-button label="Right" />
    </o-tooltip>
  </section>
</template>

<style scoped>
.tooltip-wrapper {
  margin-right: 10px;
}
</style>
