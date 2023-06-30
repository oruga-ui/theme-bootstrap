<script setup lang="ts">
import { ref } from "vue";

const isSwitched = ref(false);
const isSwitchedCustom = ref("Yes");
const isRounded = ref(false);
const position = ref("right");
const size = ref("");
const variant = ref(null);
const passive = ref(null);
</script>

<template>
  <section>
    <h2>Switch Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-field>
      <o-switch>Default </o-switch>
    </o-field>
    <o-field>
      <o-switch v-model="isSwitched">
        {{ isSwitched }}
      </o-switch>
    </o-field>
    <o-field>
      <o-switch v-model="isSwitchedCustom" true-value="Yes" false-value="No">
        {{ isSwitchedCustom }}
      </o-switch>
    </o-field>
    <o-field>
      <o-switch disabled>Disabled</o-switch>
    </o-field>
  </section>

  <section class="py-3">
    <h3>Variant</h3>

    <o-field>
      <o-switch :value="true"> Default </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="primary"> Primary </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="secondary"> Secondary </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="info"> Info </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="success"> Success </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="danger"> Danger </o-switch>
    </o-field>
    <o-field>
      <o-switch :value="true" variant="warning"> Warning </o-switch>
    </o-field>
  </section>

  <section class="py-3">
    <h3>Size</h3>

    <o-field>
      <o-switch size="small">Small</o-switch>
    </o-field>
    <o-field>
      <o-switch>Default</o-switch>
    </o-field>
    <o-field>
      <o-switch size="medium">Medium</o-switch>
    </o-field>
    <o-field>
      <o-switch size="large">Large</o-switch>
    </o-field>
  </section>

  <section class="py-3">
    <h3>Style variants</h3>

    <o-field grouped>
      <o-switch v-model="isRounded">Rounded</o-switch>
      <o-switch v-model="position" true-value="left" false-value="right">
        Label on left
      </o-switch>
    </o-field>

    <o-field label="Variant">
      <o-select v-model="variant" expanded placeholder="Variant">
        <option value="null">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </o-select>
    </o-field>
    <o-field label="Passive Variant">
      <o-select v-model="passive" expanded placeholder="Passive Variant">
        <option value="null">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </o-select>
    </o-field>
    <o-field label="Size">
      <o-select v-model="size" expanded>
        <option value="">Default</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </o-select>
    </o-field>

    <o-switch
      :rounded="isRounded"
      :position="position"
      :size="size"
      :variant="variant"
      :passive-variant="passive">
      Sample
    </o-switch>
  </section>
</template>
