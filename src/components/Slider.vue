<template>
  <section class="block">
    <o-field label="Simple & Small & Default Variant">
      <o-slider v-model="value" :rounded="true" size="small"></o-slider>
    </o-field>

    <o-field label="Warning & Medium">
      <o-slider
        v-model="value"
        :rounded="true"
        size="medium"
        variant="warning"
        tooltip-variant="warning"></o-slider>
    </o-field>

    <o-field label="Info & Large">
      <o-slider
        v-model="value"
        :rounded="true"
        size="large"
        variant="info"
        tooltip-variant="info"></o-slider>
    </o-field>

    <o-field label="Disabled & Default Variant">
      <o-slider v-model="value" :rounded="true" disabled></o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Tooltip type & Default Variant">
      <o-slider v-model="sliderValue" :rounded="true"></o-slider>
    </o-field>

    <o-field label="success">
      <o-slider
        :rounded="true"
        :tooltip="false"
        variant="success"
        tooltip-variant="success"></o-slider>
    </o-field>
    <o-field label="danger">
      <o-slider
        :rounded="true"
        :tooltip="false"
        variant="danger"
        tooltip-variant="danger"></o-slider>
    </o-field>
    <o-field label="warning">
      <o-slider
        :rounded="true"
        :tooltip="false"
        variant="warning"
        tooltip-variant="warning"></o-slider>
    </o-field>
    <o-field label="info">
      <o-slider
        :rounded="true"
        :tooltip="false"
        variant="info"
        tooltip-variant="info"></o-slider>
    </o-field>

    <o-field label="Custom tooltip label & Default Variant">
      <o-slider
        :rounded="true"
        :custom-formatter="(val: any) => val + '%'"></o-slider>
    </o-field>

    <o-field label="Squared thumb">
      <o-slider></o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Show ticks">
      <o-slider :rounded="true" :min="1" :max="10" ticks></o-slider>
    </o-field>

    <o-field label="Custom tick and label">
      <o-slider :rounded="true" size="medium" :min="0" :max="10">
        <template v-for="val in [3, 5, 8]" :key="val">
          <o-slider-tick :value="val">{{ val }}</o-slider-tick>
        </template>
      </o-slider>
    </o-field>

    <o-field label="Fan">
      <o-slider
        :rounded="true"
        :min="0"
        :max="3"
        aria-label="Fan"
        :tooltip="false">
        <o-slider-tick :value="0">Off</o-slider-tick>
        <o-slider-tick :value="1">Low</o-slider-tick>
        <o-slider-tick :value="2">High</o-slider-tick>
        <o-slider-tick :value="3">Auto</o-slider-tick>
      </o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Range">
      <o-slider
        v-model="numbers"
        :rounded="true"
        :min="1"
        :max="15"
        :step="0.5"
        ticks>
      </o-slider>
    </o-field>

    <o-field>
      <o-slider
        v-model="numbers2"
        :rounded="true"
        variant="danger"
        :min="-2"
        :max="8"
        :step="2">
      </o-slider>
    </o-field>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: 5,
      sliderValue: 4,
      numbers: [2, 5],
      numbers2: [2, 6],
    };
  },
  computed: {
    sliderType() {
      if (this.sliderValue > 25 && this.sliderValue < 75) {
        return "warning";
      } else if (this.sliderValue >= 75) {
        return "success";
      }
      return "danger";
    },
  },
};
</script>
