<script setup lang="ts">
import { ref } from "vue";

const isImageModalActive = ref(false);
const isCardModalActive = ref(false);
const isFullScreenModalActive = ref(false);

const tags = ref([]);
const value = ref(20);
</script>

<template>
  <section>
    <h2>Modal Demo</h2>
    <hr />
  </section>

  <section class="mt-3">
    <h3>Base</h3>
    <div class="buttons">
      <o-button
        size="medium"
        variant="primary"
        label="Open Image Modal"
        @click="isImageModalActive = true" />

      <o-button
        size="medium"
        variant="primary"
        label="Open Card Modal"
        @click="isCardModalActive = true" />

      <o-button
        size="medium"
        variant="primary"
        label="Open FullScreen Modal"
        @click="isFullScreenModalActive = true" />
    </div>

    <!-- image modal -->
    <o-modal v-model:active="isImageModalActive">
      <p style="text-align: center">
        <img
          style="background-color: white"
          src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4" />
      </p>
    </o-modal>

    <!-- card modal -->
    <o-modal v-model:active="isCardModalActive" :width="720" scroll="clip">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Log in to continue using the service</h5>
          <o-icon
            clickable
            native-type="button"
            icon="times"
            @click="isCardModalActive = false" />
        </div>
        <div class="modal-body">
          <o-field label="Email">
            <o-input
              icon="at"
              :has-counter="true"
              maxlength="10"
              placeholder="Enter Your Email" />
          </o-field>
          <o-field label="Password">
            <o-input
              icon="lock"
              :has-counter="true"
              maxlength="10"
              placeholder="Enter Your Password" />
          </o-field>
          <o-field label="Enter some items">
            <o-inputitems
              v-model="tags"
              variant="primary"
              field="user.first_name"
              icon="tag"
              placeholder="Add an item"
              keep-first />
          </o-field>
          <o-field label="Dark & Medium">
            <o-slider
              v-model="value"
              :rounded="true"
              size="medium"
              variant="dark"
              tooltip-variant="dark" />
          </o-field>
          <o-field>
            <o-checkbox variant="info"> Remember me </o-checkbox>
          </o-field>
        </div>
        <div class="modal-footer">
          <o-button
            outlined
            variant="danger"
            label="Close"
            @click="isCardModalActive = false" />
          <o-button outlined variant="primary" label="Log in" />
        </div>
      </div>
    </o-modal>

    <!-- fullscreen modal -->
    <o-modal
      v-model:active="isFullScreenModalActive"
      :width="720"
      scroll="clip"
      :can-cancel="['escape', 'button']"
      full-screen>
      <div class="modal-content h-100">
        <div class="modal-header">
          <h5 class="modal-title">Log in to continue using the service</h5>
          <o-icon
            clickable
            native-type="button"
            icon="times"
            @click="isFullScreenModalActive = false" />
        </div>
        <div class="modal-body">
          <o-field label="Email">
            <o-input
              icon="at"
              :has-counter="true"
              maxlength="10"
              placeholder="Enter Your Email" />
          </o-field>
          <o-field label="Password">
            <o-input
              icon="lock"
              :has-counter="true"
              maxlength="10"
              placeholder="Enter Your Password" />
          </o-field>
          <o-field label="Enter some items">
            <o-inputitems
              v-model="tags"
              variant="primary"
              field="user.first_name"
              icon="tag"
              placeholder="Add an item"
              keep-first />
          </o-field>
          <o-field label="Dark & Medium">
            <o-slider
              v-model="value"
              :rounded="true"
              size="medium"
              variant="dark"
              tooltip-variant="dark" />
          </o-field>
          <o-field>
            <o-checkbox variant="info"> Remember me </o-checkbox>
          </o-field>
        </div>
        <div class="modal-footer">
          <o-button
            outlined
            variant="danger"
            label="Close"
            @click="isFullScreenModalActive = false" />
          <o-button outlined variant="primary" label="Log in" />
        </div>
      </div>
    </o-modal>
  </section>
</template>
