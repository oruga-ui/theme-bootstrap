<template>
  <section>
    <h2>Icon Demo</h2>
    <hr />
  </section>

  <section class="py-3">
    <h3>Base</h3>

    <o-field>
      <o-icon pack="fas" icon="user" size="small" />
      <o-icon pack="fas" icon="home" size="small" />
      <o-icon pack="fas" icon="tachometer-alt" size="small" />
    </o-field>

    <o-field>
      <o-icon pack="fas" icon="user" />
      <o-icon pack="fas" icon="home" />
      <o-icon pack="fas" icon="tachometer-alt" />
    </o-field>

    <o-field>
      <o-icon pack="fas" icon="user" size="medium" />
      <o-icon pack="fas" icon="home" size="medium" />
      <o-icon pack="fas" icon="tachometer-alt" size="medium" />
    </o-field>

    <o-field>
      <o-icon pack="fas" icon="user" size="large" variant="success" clickable />
      <o-icon pack="fas" icon="home" size="large" variant="info" clickable />
      <o-icon
        pack="fas"
        icon="tachometer-alt"
        size="large"
        variant="primary"
        clickable />
    </o-field>
  </section>

  <section class="py-3">
    <h3>Buttons</h3>

    <o-button variant="success">
      <o-icon pack="fas" icon="check" />
      <span>Finish</span>
    </o-button>

    <o-button variant="warning">
      <o-icon pack="fas" icon="check" />
      <span>Finish</span>
    </o-button>

    <o-button variant="warning">
      <o-icon pack="fas" icon="sync-alt" spin />
      <span>Refresh</span>
    </o-button>
  </section>
</template>
