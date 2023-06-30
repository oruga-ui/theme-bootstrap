<script setup lang="ts">
import { ref } from "vue";

const isScrollable = ref(true);
const maxHeight = ref(200);
const currentMenu = ref({ icon: "users", text: "People" });
const menus = ref([
  { icon: "users", text: "People" },
  { icon: "box", text: "Orders" },
  { icon: "credit-card", text: "Payments" },
  { icon: "dolly", text: "Logistics" },
  { icon: "business-time", text: "Jobs" },
  { icon: "shopping-cart", text: "Cart" },
  { icon: "cog", text: "Configuration" },
]);
const selectedOptions = ref([]);
</script>

<template>
  <section>
    <h2>Dropdown Demo</h2>
    <hr />
  </section>

  <section class="mt-3">
    <h3>Base</h3>

    <div class="dropdown-example">
      <o-dropdown aria-role="list">
        <template #trigger>
          <o-button
            variant="primary"
            class="dropdown-toggle"
            label="Click me!" />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :triggers="['hover']" aria-role="list">
        <template #trigger>
          <o-button variant="info" class="dropdown-toggle" label="Hover me!" />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown disabled aria-role="list">
        <template #trigger>
          <o-button class="dropdown-toggle" label="Disabled" />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown aria-role="list">
        <template #trigger="{ active }">
          <span role="button">
            Custom
            <o-icon
              variant="success"
              :icon="active ? 'caret-up' : 'caret-down'" />
          </span>
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :triggers="['contextmenu']" aria-role="list">
        <template #trigger>
          <o-button label="Right click" />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>
  </section>

  <section class="mt-3">
    <h3>Inline</h3>

    <div class="dropdown-example">
      <o-dropdown inline aria-role="list">
        <template #trigger>
          <o-button label="Inline" />
        </template>

        <o-dropdown-item aria-role="listitem" value="1">
          Action
        </o-dropdown-item>
        <o-dropdown-item aria-role="listitem" value="2">
          Another action
        </o-dropdown-item>
        <o-dropdown-item aria-role="listitem" value="3">
          Something else
        </o-dropdown-item>
      </o-dropdown>
    </div>
  </section>

  <section class="mt-3">
    <h3>Scrollable</h3>

    <div>
      <o-field>
        <o-switch v-model="isScrollable">Scrollable</o-switch>
      </o-field>
    </div>

    <o-dropdown
      v-model="currentMenu"
      :scrollable="isScrollable"
      :max-height="maxHeight"
      aria-role="list">
      <template #trigger>
        <o-button variant="primary" type="button" class="dropdown-toggle">
          <o-icon :icon="currentMenu.icon" />
          <span>{{ currentMenu.text }}</span>
        </o-button>
      </template>

      <o-dropdown-item
        v-for="(menu, index) in menus"
        :key="index"
        :value="menu"
        aria-role="listitem">
        <div class="media">
          <o-icon class="media-left" :icon="menu.icon" />
          <div class="media-content">
            <span>{{ menu.text }}</span>
          </div>
        </div>
      </o-dropdown-item>
    </o-dropdown>
  </section>

  <section class="mt-3">
    <h3>Multiple</h3>

    <p class="content"><b>selected</b>: {{ selectedOptions }}</p>
    <o-dropdown v-model="selectedOptions" multiple aria-role="list">
      <template #trigger>
        <o-button variant="primary" type="button" class="dropdown-toggle">
          <span>Selected ({{ selectedOptions.length }})</span>
        </o-button>
      </template>

      <o-dropdown-item value="option1" aria-role="listitem">
        option 1
      </o-dropdown-item>

      <o-dropdown-item value="option2" aria-role="listitem">
        Option 2
      </o-dropdown-item>

      <o-dropdown-item value="option3" aria-role="listitem">
        Option 3
      </o-dropdown-item>
    </o-dropdown>
  </section>

  <section class="mt-3">
    <h3>Positioning & Expanded</h3>

    <div class="dropdown-example expanded">
      <o-dropdown position="top-right" aria-role="list" expanded>
        <template #trigger>
          <o-button
            class="dropdown-toggle"
            variant="primary"
            label="Position top right"
            expanded />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example expanded">
      <o-dropdown position="top-left" aria-role="list" expanded>
        <template #trigger>
          <o-button
            class="dropdown-toggle"
            variant="primary"
            label="Position top left"
            expanded />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example expanded">
      <o-dropdown position="bottom-left" aria-role="list" expanded>
        <template #trigger>
          <o-button
            class="dropdown-toggle"
            variant="primary"
            label="Position bottom left"
            expanded />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>

    <div class="dropdown-example expanded">
      <o-dropdown position="bottom-right" aria-role="list" expanded>
        <template #trigger>
          <o-button
            class="dropdown-toggle"
            variant="primary"
            label="Position bottom right"
            expanded />
        </template>

        <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
        <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
      </o-dropdown>
    </div>
  </section>
</template>

<style scoped lang="scss">
.dropdown-example {
  display: inline-flex;
  position: relative;
  vertical-align: top;

  &.expanded {
    display: block;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

.media {
  align-items: flex-start;
  display: flex;
  text-align: left;
  .media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .media-left {
    margin-right: 1rem;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
