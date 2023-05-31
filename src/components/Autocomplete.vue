<template>
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a JS framework">
      <o-autocomplete
        v-model="name"
        keep-first
        rounded
        :data="filteredDataArray"
        placeholder="e.g. jQuery"
        icon="search"
        clearable
        @select="select">
        <template #empty>No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      data: [
        "Angular 1",
        "Angular 2",
        "Angular 4",
        "Angular 5",
        "Angular 6",
        "Angular 7",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js",
      ],
      name: "",
      selected: null,
    };
  },
  computed: {
    filteredDataArray(): string[] {
      return this.data.filter((option: any) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    select(option: any) {
      this.selected = option;
    },
  },
});
</script>
