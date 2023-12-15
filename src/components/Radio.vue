<script setup lang="ts">
import { ref } from "vue";

const radio = ref("Jack");
const variant = ref("success");
const variantInvert = ref("success");
const variantSubtle = ref("success");
const size = ref("small");
</script>

<template>
  <section>
    <h2>Radio Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field>
      <o-radio v-model="radio" name="name" native-value="Flint" label="Flint" />
      <o-radio
        v-model="radio"
        name="name"
        native-value="Silver"
        label="Silver" />
      <o-radio v-model="radio" name="name" native-value="Jack" label="Jack" />
      <o-radio
        v-model="radio"
        name="name"
        native-value="Vane"
        disabled
        label="Vane" />
    </o-field>

    <p><b>Selection:</b> {{ radio }}</p>
  </section>

  <section>
    <h3>Variant</h3>

    <o-field>
      <o-radio v-model="variant" native-value="default" label="Default" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="primary"
        variant="primary"
        label="Primary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="secondary"
        variant="secondary"
        label="Secondary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="info"
        variant="info"
        label="Info" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="success"
        variant="success"
        label="Success" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="warning"
        variant="warning"
        label="Warning" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variant"
        native-value="danger"
        variant="danger"
        label="Danger" />
    </o-field>

    <p><b>Selection:</b> {{ variant }}</p>
  </section>

  <section>
    <h3>Variant Inverted</h3>

    <o-field>
      <o-radio v-model="variantInvert" native-value="default" label="Default" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="primary"
        variant="primary-inverted"
        label="Primary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="secondary"
        variant="secondary-inverted"
        label="Secondary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="inverted"
        variant="info-inverted"
        label="Info" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="success"
        variant="success-inverted"
        label="Success" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="warning"
        variant="warning-inverted"
        label="Warning" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="danger"
        variant="danger-inverted"
        label="Danger" />
    </o-field>

    <p><b>Selection:</b> {{ variantInvert }}</p>
  </section>

  <section>
    <h3>Variant Subtle</h3>

    <o-field>
      <o-radio v-model="variantSubtle" native-value="default" label="Default" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="primary"
        variant="primary-subtle"
        label="Primary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="secondary"
        variant="secondary-subtle"
        label="Secondary" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="inverted"
        variant="info-subtle"
        label="Info" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="success"
        variant="success-subtle"
        label="Success" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="warning"
        variant="warning-subtle"
        label="Warning" />
    </o-field>
    <o-field>
      <o-radio
        v-model="variantSubtle"
        native-value="danger"
        variant="danger-subtle"
        label="Danger" />
    </o-field>

    <p><b>Selection:</b> {{ variantSubtle }}</p>
  </section>

  <section>
    <h3>Size</h3>

    <o-field>
      <o-radio v-model="size" native-value="small" size="small" label="Small" />
    </o-field>
    <o-field>
      <o-radio v-model="size" native-value="default" label="Default" />
    </o-field>
    <o-field>
      <o-radio
        v-model="size"
        native-value="medium"
        size="medium"
        label="Medium" />
    </o-field>
    <o-field>
      <o-radio v-model="size" native-value="large" size="large" label="Large" />
    </o-field>

    <p><b>Selection:</b> {{ size }}</p>
  </section>
</template>
