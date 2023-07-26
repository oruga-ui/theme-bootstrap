<script setup lang="ts">
import { useProgrammatic } from "@oruga-ui/oruga-next";

function simple() {
  const { oruga } = useProgrammatic();
  oruga.notification.open("Something happened");
}
function success() {
  const { oruga } = useProgrammatic();
  oruga.notification.open({
    message: "Something happened correctly!",
    variant: "success",
    closable: true,
  });
}
function toast() {
  const { oruga } = useProgrammatic();
  oruga.notification.open({
    message: "Something happened correctly!",
    rootClass: "toast",
    position: "top",
  });
}
function danger() {
  const { oruga } = useProgrammatic();

  oruga.notification.open({
    message: `Something's not good, also I'm on <b>bottom</b>`,
    position: "bottom-right",
    variant: "danger",
    closable: true,
    indefinite: true,
    ariaLive: "assertive",
    ariaAtomic: true,
    ariaCloseLabel: "Close",
    onClose: () => {
      const { oruga } = useProgrammatic();
      oruga.notification.open("Custom notification closed!");
    },
  });
}
</script>

<template>
  <section>
    <h2>Notification Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <o-notification closable aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
  </section>

  <section>
    <h3>Variants</h3>
    <o-notification
      closable
      variant="primary"
      aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="secondary"
      aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="info"
      aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="success"
      aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="warning"
      aria-close-label="Close notification"
      role="alert">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="danger"
      aria-close-label="Close notification"
      role="alert">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="light"
      aria-close-label="Close notification"
      role="alert">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
    <o-notification
      closable
      variant="dark"
      aria-close-label="Close notification"
      role="alert">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
  </section>

  <section>
    <h3>Use types</h3>
    <o-notification
      closable
      type="info"
      variant="info"
      aria-close-label="Close notification">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </o-notification>
  </section>

  <section>
    <h3>Add custom buttons</h3>

    <o-notification
      v-slot="{ closeNotification }"
      aria-close-label="Close notification">
      <div class="d-inline-flex">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit
          sapien laoreet elit
        </span>
        <o-button
          label="Cancel"
          variant="primary"
          size="small"
          @click="closeNotification" />
      </div>
    </o-notification>
  </section>

  <section>
    <h3>Programmatically opening</h3>

    <div class="buttons">
      <o-button
        label="Launch notification (default)"
        size="medium"
        @click="simple" />
      <o-button
        label="Launch notification (custom)"
        variant="success"
        size="medium"
        @click="success" />
      <o-button label="Launch toast" size="medium" @click="toast" />
      <o-button
        label="Launch notification (custom)"
        variant="danger"
        size="medium"
        @click="danger" />
    </div>
  </section>
</template>
