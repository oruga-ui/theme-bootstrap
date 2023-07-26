<script setup lang="ts">
import { computed, ref } from "vue";

const thisMonth = new Date().getMonth();

const selected = ref(new Date());
const showWeekNumber = ref(false);
const locale = ref(); // Browser locale

const date = ref(new Date(2022, thisMonth, 1));
const dates = ref([]);
const date1 = ref<Date | null>(null);
const events = [
  new Date(2022, thisMonth, 2),
  new Date(2022, thisMonth, 6),
  {
    date: new Date(2022, thisMonth, 6),
    type: "info",
  },
  {
    date: new Date(2022, thisMonth, 8),
    type: "danger",
  },
  {
    date: new Date(2022, thisMonth, 10),
    type: "success",
  },
  {
    date: new Date(2022, thisMonth, 10),
    type: "link",
  },
  new Date(2022, thisMonth, 12),
  {
    date: new Date(2022, thisMonth, 12),
    type: "warning",
  },
  {
    date: new Date(2022, thisMonth, 16),
    type: "danger",
  },
  new Date(2022, thisMonth, 20),
  {
    date: new Date(2022, thisMonth, 29),
    type: "success",
  },
  {
    date: new Date(2022, thisMonth, 29),
    type: "warning",
  },
  {
    date: new Date(2022, thisMonth, 29),
    type: "info",
  },
];

const bars = ref(false);
const indicators = computed((): string => (bars.value ? "bars" : "dots"));
</script>

<template>
  <section>
    <h2>Datepicker Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-field>
      <o-field>
        <o-select v-model="locale" placeholder="Locale">
          <option :value="undefined"></option>
          <option value="de-DE">de-DE</option>
          <option value="en-CA">en-CA</option>
          <option value="en-GB">en-GB</option>
          <option value="en-US">en-US</option>
          <option value="es-ES">es-ES</option>
          <option value="es-MX">es-MX</option>
          <option value="fr-CA">fr-CA</option>
          <option value="fr-FR">fr-FR</option>
          <option value="it-IT">it-IT</option>
          <option value="ja-JP">ja-JP</option>
          <option value="pt-BR">pt-BR</option>
          <option value="ru-RU">ru-RU</option>
        </o-select>
      </o-field>
      <o-field>
        <o-switch v-model="showWeekNumber">Show week number</o-switch>
      </o-field>
    </o-field>

    <o-field label="Select a date">
      <o-datepicker
        v-model="selected"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon="calendar"
        :events="events"
        :indicators="indicators"
        trap-focus>
      </o-datepicker>
    </o-field>
    <o-field label="Select a date">
      <o-datepicker
        v-model="selected"
        :show-week-number="showWeekNumber"
        :locale="locale"
        placeholder="Click to select..."
        icon="calendar"
        trap-focus
        range>
      </o-datepicker>
    </o-field>

    <o-field label="Select a month">
      <o-datepicker
        v-model="dates"
        placeholder="Click to select..."
        icon="calendar"
        type="month"
        range>
      </o-datepicker>
    </o-field>
    <p><b>Selected:</b> {{ selected }}</p>
  </section>
</template>
