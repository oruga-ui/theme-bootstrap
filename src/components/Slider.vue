<template>
   <section class="block">
    <o-field label="Simple & Small">
      <o-slider v-model="value" size="small"></o-slider>
    </o-field>

    <o-field label="Warning & Medium">
      <o-slider v-model="value" size="medium" variant="warning" tooltip-variant="warning"></o-slider>
    </o-field>

    <o-field label="Info & Large">
      <o-slider v-model="value" size="large" variant="info" tooltip-variant="info"></o-slider>
    </o-field>

    <o-field label="Disabled">
      <o-slider v-model="value" disabled></o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Tooltip type">
      <o-slider v-model="sliderValue"></o-slider>
    </o-field>

    <o-field label="success">
      <o-slider :tooltip="false" variant="success" tooltip-variant="success"></o-slider>
    </o-field>
    <o-field label="danger">
      <o-slider :tooltip="false" variant="danger" tooltip-variant="danger"></o-slider>
    </o-field>
    <o-field label="warning">
      <o-slider :tooltip="false" variant="warning" tooltip-variant="warning"></o-slider>
    </o-field>
    <o-field label="info">
      <o-slider :tooltip="false" variant="info" tooltip-variant="info"></o-slider>
    </o-field>

    <o-field label="Custom tooltip label">
      <o-slider :custom-formatter="val => val + '%'"></o-slider>
    </o-field>

    <o-field label="Rounded thumb">
      <o-slider rounded></o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Show ticks">
      <o-slider :min="1" :max="10" ticks></o-slider>
    </o-field>

    <o-field label="Custom tick and label">
      <o-slider size="medium" :min="0" :max="10">
        <template v-for="val in [3, 5, 8]" :key="val">
          <o-slider-tick :value="val" >{{ val }}</o-slider-tick>
        </template>
      </o-slider>
    </o-field>

    <o-field label="Fan">
      <o-slider :min="0" :max="3" aria-label="Fan" :tooltip="false">
        <o-slider-tick :value="0">Off</o-slider-tick>
        <o-slider-tick :value="1">Low</o-slider-tick>
        <o-slider-tick :value="2">High</o-slider-tick>
        <o-slider-tick :value="3">Auto</o-slider-tick>
      </o-slider>
    </o-field>
  </section>
  <section class="block">
    <o-field label="Range">
      <o-slider v-model="numbers" :min="1" :max="15" :step="0.5" ticks> </o-slider>
    </o-field>

    <o-field>
      <o-slider v-model="numbers2" variant="danger" :min="-2" :max="8" :step="2"> </o-slider>
    </o-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 5,
      sliderValue: 4,
      numbers: [2, 5],
      numbers2: [2, 6]
    }
  },
  computed: {
    sliderType() {
      if (this.sliderValue > 25 && this.sliderValue < 75) {
        return 'warning'
      } else if (this.sliderValue >= 75) {
        return 'success'
      }
      return 'danger'
    }
  }
}
</script>

<style>
  section {
    margin: 25px;
  }
</style>
