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
const teleport = ref(false);
</script>

<template>
  <section>
    <h2>Dropdown Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <div class="dropdown-example">
      <o-dropdown>
        <template #trigger>
          <o-button
            variant="primary"
            class="dropdown-toggle"
            label="Click me!" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :triggers="['hover']">
        <template #trigger>
          <o-button variant="info" class="dropdown-toggle" label="Hover me!" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown disabled>
        <template #trigger>
          <o-button class="dropdown-toggle" label="Disabled" disabled />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown>
        <template #trigger="{ active }">
          <span role="button">
            Custom
            <o-icon
              variant="success"
              :icon="active ? 'caret-up' : 'caret-down'" />
          </span>
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :triggers="['contextmenu']">
        <template #trigger>
          <o-button label="Right click" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>
  </section>

  <section>
    <h3>Inline</h3>

    <div class="dropdown-example">
      <o-dropdown inline>
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

  <section>
    <h3>Scrollable</h3>

    <div>
      <o-field>
        <o-switch v-model="isScrollable">Scrollable</o-switch>
      </o-field>
    </div>

    <o-dropdown
      v-model="currentMenu"
      :scrollable="isScrollable"
      :max-height="maxHeight">
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

  <section>
    <h3>Multiple</h3>

    <p><b>selected</b>: {{ selectedOptions }}</p>
    <o-dropdown v-model="selectedOptions" multiple>
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

  <section>
    <h3>Positioning & Expanded</h3>

    <o-field>
      <o-switch v-model="teleport" label="teleport" />
    </o-field>

    <div class="dropdown-example expanded">
      <o-dropdown position="auto" expanded :teleport="teleport">
        <template #trigger>
          <o-button variant="primary" label="Position Auto" expanded />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <hr />

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="right">
        <template #trigger>
          <o-button label="Append to right" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="left">
        <template #trigger>
          <o-button label="Append to left" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="top">
        <template #trigger>
          <o-button label="Append to top" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="bottom">
        <template #trigger>
          <o-button label="Append to bottom" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <hr />

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="top-right">
        <template #trigger>
          <o-button label="Append to top-right" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="top-left">
        <template #trigger>
          <o-button label="Append to top-left" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="bottom-right">
        <template #trigger>
          <o-button label="Append to bottom-right" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
      </o-dropdown>
    </div>

    <div class="dropdown-example">
      <o-dropdown :teleport="teleport" position="bottom-left">
        <template #trigger>
          <o-button label="Append to bottom-left" />
        </template>

        <o-dropdown-item label="Action" />
        <o-dropdown-item label="Another action" />
        <o-dropdown-item label="Something else" />
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
