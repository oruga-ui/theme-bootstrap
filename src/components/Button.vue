<template>
  <section>
    <h2>Button Demo</h2>
    <hr />
  </section>

  <section class="mt-3">
    <h3>Base</h3>
    <div class="buttons">
      <o-button variant="primary">Primary</o-button>
      <o-button variant="success">Success</o-button>
      <o-button variant="danger">Danger</o-button>
      <o-button variant="warning">Warning</o-button>
      <o-button variant="info">Info</o-button>
      <o-button variant="dark">Dark</o-button>
    </div>
  </section>

  <section class="mt-3">
    <h3>States</h3>
    <div class="buttons">
      <o-button>Normal</o-button>
      <o-button disabled>Disabled</o-button>
      <o-button rounded variant="light">Rounded</o-button>
    </div>
  </section>

  <section class="mt-3">
    <h3>Outlined</h3>
    <div class="buttons">
      <o-button variant="primary" outlined>Outlined</o-button>
      <o-button variant="success" outlined>Outlined</o-button>
      <o-button variant="danger" outlined>Outlined</o-button>
      <o-button variant="warning" outlined>Outlined</o-button>
      <o-button variant="info" outlined>Outlined</o-button>
      <o-button variant="dark" outlined>Outlined</o-button>
    </div>
  </section>

  <section class="mt-3">
    <h3>Inverted</h3>
    <div class="buttons">
      <o-button variant="primary" inverted>Inverted</o-button>
      <o-button variant="success" inverted>Inverted</o-button>
      <o-button variant="danger" inverted>Inverted</o-button>
      <o-button variant="warning" inverted>Inverted</o-button>
      <o-button variant="info" inverted>Inverted</o-button>
      <o-button variant="dark" inverted>Inverted</o-button>
    </div>
  </section>

  <section class="mt-3">
    <h3>Icons</h3>
    <div class="buttons">
      <o-button variant="primary" size="small" icon-left="plus">Add</o-button>
      <o-button variant="primary" icon-left="plus">Add</o-button>
      <o-button variant="primary" size="medium" icon-left="plus">Add</o-button>
      <o-button variant="primary" size="large" icon-left="plus">Add</o-button>
    </div>

    <div class="buttons">
      <o-button variant="danger" icon-left="trash">Delete</o-button>
      <o-button variant="danger" icon-right="trash">Delete</o-button>
      <o-button variant="danger" icon-right="trash" />
    </div>
  </section>

  <section class="mt-3">
    <h3>Expanded</h3>
    <div class="buttons">
      <o-button variant="primary" expanded>Expanded</o-button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.buttons button {
  margin-bottom: 0.5rem;
}
</style>
