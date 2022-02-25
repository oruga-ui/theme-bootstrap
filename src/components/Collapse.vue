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

      <article  
        v-for="(collapse, index) of collapses"
        :key="index">
        <o-collapse
          animation="slide"
          :open="isOpen1 == index"
          @update:open="isOpen1 = index"
        >
          <template v-slot:trigger="props">
            <div class="" role="button">
              <o-button variant="success">{{ collapse.title }}</o-button>
            </div>
          </template>
          <div class="card card-body">
            <div class="content">
              {{ collapse.text }}
            </div>
          </div>
        </o-collapse>
      </article>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isOpen: 1,
            isOpen1: 1,
            collapses: [
                {
                    title: "Open to read something intersting written for you!",
                    text: `
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla accumsan, metus ultrices eleifend gravida, 
                      nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                      Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    `,
                },
                {
                    title: "What the different between Oruga and Buefy?",
                    text: "Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br />",
                },
                {
                    title: "Nothing special, ignore it!",
                    text: "Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.",
                },
            ],
        }
    }
}
</script>

<style>
  article {
    margin: 1rem 0;
  }
</style>