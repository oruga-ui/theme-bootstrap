<script setup lang="ts">
const paths = import.meta.glob("./components/*.vue") as any;
const components = Object.keys(paths)
  .map((c: string) => c.replace(".vue", ""))
  .map((c: string) => c.replace("./components/", ""))
  .map((c: string) => `/${c}`)
  .map((c: string) => {
    const name = c.split("/")[1];
    return {
      name,
      link: c,
    };
  });
</script>

<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/" class="py-4 ps-0 text-center">
        <img
          class="image__oruga"
          src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/master/public/logo.svg"
          alt="Logo Oruga Theme Bootstrap" />
        <b class="fs-5 text-white">Oruga Bootstrap Theme</b>
      </router-link>
      <hr />
      <router-link v-for="item in components" :key="item.name" :to="item.link">
        {{ item.name }}
      </router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  width: 100%;
  main {
    flex-grow: 1;
    margin: 25px;

    > section {
      padding: 1rem 0;

      h3 {
        font-size: 1.75rem;
      }

      .buttons > * {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
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
