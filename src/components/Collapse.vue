<template>
  <section>
     <o-collapse
        class="card"
        animation="slide"
        v-for="(collapse, index) of collapses"
        :key="index"
        :open="isOpen == index"
        @update:open="isOpen = index"
      >
        <template v-slot:trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">
              {{ collapse.title }}
            </p>
            <a class="card-header-icon">
              <o-icon :icon="props.open ? 'caret-up' : 'caret-down'"> </o-icon>
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="content">
            {{ collapse.text }}
          </div>
        </div>
      </o-collapse>
     <!--  <o-collapse :open="false" aria-id="contentIdForA11y1">
        <o-button variant="primary" slot="trigger" aria-controls="contentIdForA11y1">Click me!</o-button>
        <div class="notification">
          <h3>
            Subtitle
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br />
            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
        </div>
      </o-collapse> -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            isOpen: 0,
            collapses: [
                {
                    title: "Title 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />",
                },
                {
                    title: "Title 2",
                    text: "            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br />",
                },
                {
                    title: "Title 3",
                    text: "            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.",
                },
            ],
        }
    }
}
</script>

<style>
  section {
    margin: 25px;
  }
</style>