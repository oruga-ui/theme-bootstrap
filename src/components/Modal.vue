<template>
  <section>
    <div class="buttons">
      <o-button
        size="medium"
        variant="primary"
        @click="isImageModalActive = true"
      >
        Open modal
      </o-button>
      <o-button
        size="medium"
        variant="primary"
        @click="isCardModalActive = true"
      >
        Open modal (clip scroll)
      </o-button>
    </div>

    <o-modal v-model:active="isImageModalActive" content-class="modal-content">
      <p style="text-align: center">
        <img
          style="background-color: white;"
          src="https://avatars2.githubusercontent.com/u/66300512?s=200&v=4"
        />
      </p>
    </o-modal>

    <o-modal v-model:active="isCardModalActive" :width="640" scroll="clip">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" @click="isCardModalActive = true"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="isCardModalActive = false" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
    </o-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      email:'',
      password:''
    };
  },
});
</script>