<template>
  <section>
    <o-tooltip label="Tooltip right"  position="right">
      <o-button> Right </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip top" variant="dark">
      <o-button> Top (default) </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip bottom" variant="dark" position="bottom">
      <o-button> Bottom </o-button>
    </o-tooltip>

    <o-tooltip label="Tooltip left" variant="dark" position="left">
      <o-button> Left </o-button>
    </o-tooltip>

    <o-tooltip label="delayed by 1000ms" variant="dark" :delay="1000">
      <o-button variant="warning"> Delayed </o-button>
    </o-tooltip>
  </section>
  <hr />
  <section>
    <o-tooltip variant="info" label="Tooltip multiline, probably because it's too long for a casual tooltip" multiline>
      <o-button>
        Multiline (default)
      </o-button>
    </o-tooltip>

    <o-tooltip variant="info" label="It's not brief, but it's also not long" multiline>
      <o-button>
        Multiline (small)
      </o-button>
    </o-tooltip>

    <o-tooltip
        variant="info"
        label="Tooltip large multiline, because it's too long to be on a medium size. Did I tell you it's really long? Yes, it is — I assure you!"
        position="bottom"
        multiline
    >
      <o-button>
        Multiline (large)
      </o-button>
    </o-tooltip>
  </section>
  <hr />
  <section>
    <o-tooltip variant="light" position="bottom" multiline>
      <o-button>Html Content</o-button>
      <template v-slot:content> <b>Lorem ipsum dolor sit amet</b>, consectetur warning elit. <i>Fusce id fermentum quam</i>. </template>
    </o-tooltip>

    <o-tooltip variant="light" :triggers="['click']" :auto-close="['outside', 'escape']">
      <template v-slot:content>
        <o-icon icon="heart" variant="dark"></o-icon>
        <o-icon icon="thumbs-up" variant="dark"></o-icon>
        <o-icon icon="thumbs-down" variant="dark"></o-icon>
        <o-icon icon="smile-beam"></o-icon>
      </template>
      <o-button>Action</o-button>
    </o-tooltip>
  </section>
  <hr />
  <section>
    <o-field>
      <o-switch @click="active = !active">
        Toggle
      </o-switch>
    </o-field>
    <o-tooltip variant="danger" label="I'm never closing" :active="active" always position="bottom">
      <o-button>
        Always
      </o-button>
    </o-tooltip>

    <o-tooltip variant="danger" label="Tooltip right" position="right" :active="active">
      <o-button>
        Right
      </o-button>
    </o-tooltip>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeTab: 0,
      active: true
    };
  },
});
</script>

<style scoped>
span.b-tooltip {
  margin-right: 10px;
}
</style>
