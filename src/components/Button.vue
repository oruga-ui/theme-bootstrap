<template>
  <section>
    <div class="buttons">
      <o-button variant="primary">Primary</o-button>
      <o-button variant="success">Success</o-button>
      <o-button variant="danger">Danger</o-button>
      <o-button variant="warning">Warning</o-button>
      <o-button variant="info">Info</o-button>
    </div>

    <div class="buttons">
      <o-button>Normal</o-button>
      <o-button disabled>Disabled</o-button>
      <o-button rounded>Rounded</o-button>
    </div>

    <div class="buttons">
      <o-button variant="primary" outlined>Outlined</o-button>
      <o-button variant="primary" inverted>Inverted</o-button>
    </div>

    <div class="buttons">
      <o-button variant="primary" size="small" icon-left="plus">Add</o-button>
      <o-button variant="primary" icon-left="plus">Add</o-button>
      <o-button variant="primary" size="medium" icon-left="plus">Add</o-button>
      <o-button variant="primary" size="large" icon-left="plus">Add</o-button>
    </div>

    <div class="buttons">
      <o-button variant="danger" icon-left="trash">Delete</o-button>
      <o-button variant="danger" icon-right="trash">Delete</o-button>
      <o-button variant="danger" icon-right="trash"/>
    </div>
    <div class="buttons">
      <o-button variant="primary" expanded>Expanded</o-button>
    </div>
  </section>
</template>
<style>
  section {
    margin:25px;
  }
</style>