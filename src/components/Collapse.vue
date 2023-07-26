<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(1);
const isOpen1 = ref(1);
const collapses = ref([
  {
    title: "Open to read something intersting written for you!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br />
          Nulla accumsan, metus ultrices eleifend gravida,   <br />
          nulla nunc varius lectus, nec rutrum justo nibh eu lectus.  <br />
          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.`,
  },
  {
    title: "What the different between Oruga and Buefy?",
    text: "Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br />",
  },
  {
    title: "Nothing special, ignore it!",
    text: "Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.",
  },
]);
</script>

<template>
  <section>
    <h2>Collapse Demo</h2>
    <hr />
  </section>

  <section>
    <h2>Base</h2>

    <o-collapse :open="false" aria-id="contentIdForA11y1">
      <template #trigger>
        <o-button variant="primary" aria-controls="contentIdForA11y1">
          Click me!
        </o-button>
      </template>
      <div class="card card-body">
        <h3>Subtitle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
          lectus, nec rutrum justo nibh eu lectus. <br />
          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
          interdum mattis neque.
        </p>
      </div>
    </o-collapse>
  </section>

  <section>
    <h2>Accordion I</h2>

    <o-collapse
      v-for="(collapse, index) of collapses"
      :key="index"
      class="card"
      animation="slide"
      :open="isOpen == index"
      @update:open="isOpen = index">
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <o-icon :icon="props.open ? 'caret-up' : 'caret-down'" />
          </a>
        </div>
      </template>
      <div class="card-content p-2">
        <div class="content" v-html="collapse.text" />
      </div>
    </o-collapse>
  </section>

  <section>
    <h2>Accordion II</h2>

    <article v-for="(collapse, index) of collapses" :key="index">
      <o-collapse
        animation="slide"
        :open="isOpen1 == index"
        @update:open="isOpen1 = index">
        <template #trigger>
          <o-button variant="success" :label="collapse.title" />
        </template>
        <div class="card card-body">
          <div class="content" v-html="collapse.text" />
        </div>
      </o-collapse>
    </article>
  </section>
</template>

<style scoped lang="scss">
article {
  margin: 1rem 0;
}

.card {
  margin: 1rem 0;
}

.card-header-icon {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}
</style>
