<template>
  <div id="main">
    <div id="nav">
      <router-link to="/" class="py-4 ps-0 text-center">
        <img
          class="image__oruga"
          src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/master/public/logo.svg"
          alt="Logo Oruga Theme Bootstrap" />
        <b class="fs-5 text-white">Oruga Bootstrap Theme</b>
      </router-link>
      <router-link to="/autocomplete">Autocomplete</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/carousel">Carousel</router-link>
      <router-link to="/checkbox">Checkbox</router-link>
      <router-link to="/collapse">Collapse</router-link>
      <router-link to="/datepicker">Datepicker</router-link>
      <router-link to="/dropdown">Dropdown</router-link>
      <router-link to="/field">Field</router-link>
      <router-link to="/icon">Icon</router-link>
      <router-link to="/input">Input</router-link>
      <router-link to="/loading">Loading</router-link>
      <router-link to="/modal">Modal</router-link>
      <router-link to="/notification">Notification</router-link>
      <router-link to="/pagination">Pagination</router-link>
      <router-link to="/radio">Radio</router-link>
      <router-link to="/select">Select</router-link>
      <router-link to="/sidebar">Sidebar</router-link>
      <router-link to="/skeleton">Skeleton</router-link>
      <router-link to="/slider">Slider</router-link>
      <router-link to="/steps">Steps</router-link>
      <router-link to="/switch">Switch</router-link>
      <router-link to="/table">Table</router-link>
      <router-link to="/tabs">Tabs</router-link>
      <router-link to="/taginput">Taginput</router-link>
      <router-link to="/timepicker">Timepicker</router-link>
      <router-link to="/tooltip">Tooltip</router-link>
      <router-link to="/upload">Upload</router-link>
    </div>

    <section class="section">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
#main {
  display: flex;
  .section {
    flex-grow: 1;
    margin: 25px;
  }
  #nav {
    display: flex;
    flex-direction: column;
    background-color: #7952b3;
    height: auto;
    min-height: 100vh;
    width: 15%;

    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      padding: 1px 0 1px 10px;

      &.router-link-exact-active {
        background-color: rgb(181, 122, 255);
        color: white /*#2c3e50 /*#42b983*/;
      }
    }
  }
}

.image__oruga {
  height: 64px;
  display: flex;
  margin: 0 auto;
}

@media (max-width: 576px) {
  #main {
    #nav {
      display: none;
    }
  }
}
</style>
