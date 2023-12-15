<template>
  <section>
    <h2>Button Demo</h2>
    <hr />
  </section>

  <section>
    <h3>Base</h3>

    <div class="buttons">
      <o-button label="Primary" variant="primary" />
      <o-button label="Secondary" variant="secondary" />
      <o-button label="Success" variant="success" />
      <o-button label="Info" variant="info" />
      <o-button label="Warning" variant="warning" />
      <o-button label="Danger" variant="danger" />
      <o-button label="Dark" variant="dark" />
      <o-button label="Light" variant="light" />
    </div>
  </section>

  <section>
    <h3>States</h3>

    <div class="buttons">
      <o-button label="Normal" />
      <o-button label="Disabled" disabled />
      <o-button label="Rounded" rounded />
    </div>
  </section>

  <section>
    <h3>Outlined</h3>

    <div class="buttons">
      <o-button variant="primary" outlined label="Outlined" />
      <o-button variant="secondary" outlined label="Outlined" />
      <o-button variant="success" outlined label="Outlined" />
      <o-button variant="danger" outlined label="Outlined" />
      <o-button variant="warning" outlined label="Outlined" />
      <o-button variant="info" outlined label="Outlined" />
      <o-button variant="dark" outlined label="Outlined" />
      <o-button variant="light" outlined label="Outlined" />
    </div>
  </section>

  <section>
    <h3>Inverted</h3>

    <div class="buttons">
      <o-button variant="primary" inverted label="Inverted" />
      <o-button variant="secondary" inverted label="Inverted" />
      <o-button variant="success" inverted label="Inverted" />
      <o-button variant="danger" inverted label="Inverted" />
      <o-button variant="warning" inverted label="Inverted" />
      <o-button variant="info" inverted label="Inverted" />
      <o-button variant="dark" inverted label="Inverted" />
      <o-button variant="light" outlined label="Inverted" />
    </div>
  </section>

  <section>
    <h3>Variant Subtle</h3>

    <div class="buttons">
      <o-button variant="primary-subtle" label="Subtle" />
      <o-button variant="secondary-subtle" label="Subtle" />
      <o-button variant="success-subtle" label="Subtle" />
      <o-button variant="danger-subtle" label="Subtle" />
      <o-button variant="warning-subtle" label="Subtle" />
      <o-button variant="info-subtle" label="Subtle" />
      <o-button variant="dark-subtle" label="Subtle" />
      <o-button variant="light-subtle" label="Subtle" />
    </div>
  </section>

  <section>
    <h3>Icons</h3>

    <div class="buttons">
      <o-button variant="primary" size="small" icon-left="plus" label="Add" />
      <o-button variant="primary" icon-left="plus" label="Add" />
      <o-button variant="primary" size="medium" icon-left="plus" label="Add" />
      <o-button variant="primary" size="large" icon-left="plus" label="Add" />
    </div>

    <div class="buttons">
      <o-button variant="danger" icon-left="trash" label="Delete" />
      <o-button variant="danger" icon-right="trash" label="Delete" />
      <o-button variant="danger" icon-right="trash" />
    </div>
  </section>

  <section>
    <h3>Expanded</h3>

    <div class="buttons">
      <o-button label="Expanded" variant="primary" expanded />
    </div>
  </section>
</template>
