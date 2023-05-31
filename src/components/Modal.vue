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
        Open modal
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
        <h5 class="modal-title">Log in to continue using the service</h5>
        <o-icon
          clickable
          native-type="button"
          icon="times"
          @click="isCardModalActive = false"/>
      </div>
      <div class="modal-body">
         <o-field label="Email">
         <o-input
            icon="at"
            :has-counter="true"
            maxlength="10"
            placeholder="Enter Your Email"
          ></o-input>
        </o-field>
        <o-field label="Password">
          <o-input
            icon="lock"
            :has-counter="true"
            maxlength="10"
            placeholder="Enter Your Password"
          ></o-input>
        </o-field>
        <o-field label="Enter some items">
          <o-inputitems
            v-model="tags"
            variant="primary"
            field="user.first_name"
            icon="tag"
            placeholder="Add an item"
            keep-first
          >
          </o-inputitems>
        </o-field>
        <o-field label="Dark & Medium">
          <o-slider :rounded="true" v-model="value" size="medium" variant="dark" tooltip-variant="dark"></o-slider>
        </o-field>
        <o-field>
          <o-checkbox variant="info"> Remember me </o-checkbox>
        </o-field>
      </div>
      <div class="modal-footer">
        <o-button outlined variant="danger" @click="isCardModalActive = false">Close</o-button>
        <o-button outlined variant="primary">Log in</o-button>
        <!-- <o-button outlined variant="success">Create one</o-button> -->
      </div>
    </div>
    </o-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      email:'',
      password:'',
      tags: [],
      value: 20
    };
  },
});
</script>
