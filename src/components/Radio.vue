<script setup lang="ts">
import { ref } from "vue";

const radio = ref("Jack");
const variant = ref("success");
const variantInvert = ref("success");
const size = ref("small");
</script>

<template>
  <section>
    <h2>Radio Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-field>
      <o-radio v-model="radio" name="name" native-value="Flint">
        Flint
      </o-radio>
      <o-radio v-model="radio" name="name" native-value="Silver">
        Silver
      </o-radio>
      <o-radio v-model="radio" name="name" native-value="Jack"> Jack </o-radio>
      <o-radio v-model="radio" name="name" native-value="Vane" disabled>
        Vane
      </o-radio>
    </o-field>
    <p><b>Selection:</b> {{ radio }}</p>
  </section>

  <section class="py-3">
    <h3>Variant</h3>

    <o-field>
      <o-radio v-model="variant" native-value="default"> Default </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="primary" variant="primary">
        Primary
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="secondary" variant="secondary">
        Secondary
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="info" variant="info">
        Info
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="success" variant="success">
        Success
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="danger" variant="danger">
        Danger
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="variant" native-value="warning" variant="warning">
        Warning
      </o-radio>
    </o-field>
    <p><b>Selection:</b> {{ variant }}</p>
  </section>

  <section class="py-3">
    <h3>Variant Inverted</h3>

    <o-field>
      <o-radio v-model="variantInvert" native-value="default">
        Default
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="primary"
        variant="primary-inverted">
        Primary
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="secondary"
        variant="secondary-inverted">
        Secondary
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="inverted"
        variant="info-inverted">
        Info
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="success"
        variant="success-inverted">
        Success
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="danger"
        variant="danger-inverted">
        Danger
      </o-radio>
    </o-field>
    <o-field>
      <o-radio
        v-model="variantInvert"
        native-value="warning"
        variant="warning-inverted">
        Warning
      </o-radio>
    </o-field>
    <p><b>Selection:</b> {{ variantInvert }}</p>
  </section>

  <section class="py-3">
    <h3>Size</h3>

    <o-field>
      <o-radio v-model="size" native-value="small" size="small">
        Small
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="size" native-value="default"> Default </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="size" native-value="medium" size="medium">
        Medium
      </o-radio>
    </o-field>
    <o-field>
      <o-radio v-model="size" native-value="large" size="large">
        Large
      </o-radio>
    </o-field>
    <p><b>Selection:</b> {{ size }}</p>
  </section>
</template>
