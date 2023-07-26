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
      <o-button variant="primary" outlined>Outlined</o-button>
      <o-button variant="secondary" outlined>Outlined</o-button>
      <o-button variant="success" outlined>Outlined</o-button>
      <o-button variant="danger" outlined>Outlined</o-button>
      <o-button variant="warning" outlined>Outlined</o-button>
      <o-button variant="info" outlined>Outlined</o-button>
      <o-button variant="dark" outlined>Outlined</o-button>
      <o-button variant="light" outlined>Outlined</o-button>
    </div>
  </section>

  <section>
    <h3>Inverted</h3>

    <div class="buttons">
      <o-button variant="primary" inverted>Inverted</o-button>
      <o-button variant="secondary" inverted>Inverted</o-button>
      <o-button variant="success" inverted>Inverted</o-button>
      <o-button variant="danger" inverted>Inverted</o-button>
      <o-button variant="warning" inverted>Inverted</o-button>
      <o-button variant="info" inverted>Inverted</o-button>
      <o-button variant="dark" inverted>Inverted</o-button>
      <o-button variant="light" outlined>Inverted</o-button>
    </div>
  </section>

  <section>
    <h3>Variant Subtle</h3>

    <div class="buttons">
      <o-button variant="primary-subtle">Subtle</o-button>
      <o-button variant="secondary-subtle">Subtle</o-button>
      <o-button variant="success-subtle">Subtle</o-button>
      <o-button variant="danger-subtle">Subtle</o-button>
      <o-button variant="warning-subtle">Subtle</o-button>
      <o-button variant="info-subtle">Subtle</o-button>
      <o-button variant="dark-subtle">Subtle</o-button>
      <o-button variant="light-subtle">Subtle</o-button>
    </div>
  </section>

  <section>
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

  <section>
    <h3>Expanded</h3>

    <div class="buttons">
      <o-button label="Expanded" variant="primary" expanded />
    </div>
  </section>
</template>
