<script setup lang="ts">
import { ref } from "vue";

const checkbox = ref(false);
const checkboxCustom = ref("Yes");
const checkboxGroup = ref(["Flint"]);
</script>

<template>
  <section>
    <h2>Checkbox Demo</h2>
    <hr />
  </section>

  <section class="my-4">
    <h3>Base</h3>
    <o-field>
      <o-checkbox v-model="checkbox">
        {{ checkbox }}
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox v-model="checkboxCustom" true-value="Yes" false-value="No">
        {{ checkboxCustom }}
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :indeterminate="true"> Indeterminate </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox disabled>Disabled</o-checkbox>
    </o-field>
  </section>

  <section class="my-4">
    <h3>Variant</h3>

    <o-field>
      <o-checkbox :value="true"> Default </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="primary"> Primary </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="info"> Info </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="success"> Success </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="danger"> Danger </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox :value="true" variant="warning"> Warning </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox disabled> Disabled </o-checkbox>
    </o-field>
  </section>

  <section class="my-4">
    <h3>Indeterminate</h3>

    <o-field>
      <o-checkbox indeterminate> Default Indeterminate </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="primary" indeterminate>
        Primary Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="info" indeterminate> Info Indeterminate </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="success" indeterminate>
        Success Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="danger" indeterminate>
        Danger Indeterminate
      </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox variant="warning" indeterminate>
        Warning Indeterminate
      </o-checkbox>
    </o-field>
  </section>

  <section class="my-4">
    <h3>Size</h3>
    <o-field>
      <o-checkbox size="small"> Small </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox> Default </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox size="medium"> Medium </o-checkbox>
    </o-field>
    <o-field>
      <o-checkbox size="large"> Large </o-checkbox>
    </o-field>
  </section>

  <section class="my-4">
    <h3>Array</h3>
    <o-field>
      <o-checkbox
        v-model="checkboxGroup"
        native-value="Silver"
        class="form-check-inline">
        Silver
      </o-checkbox>
      <o-checkbox
        v-model="checkboxGroup"
        native-value="Flint"
        class="form-check-inline">
        Flint
      </o-checkbox>
      <o-checkbox
        v-model="checkboxGroup"
        native-value="Vane"
        class="form-check-inline">
        Vane
      </o-checkbox>
      <o-checkbox
        v-model="checkboxGroup"
        native-value="Billy"
        class="form-check-inline"
        disabled>
        Billy
      </o-checkbox>
    </o-field>
    <p class="content">
      <b>Selection:</b>
      {{ checkboxGroup }}
    </p>
  </section>
</template>
