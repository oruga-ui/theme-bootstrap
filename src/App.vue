<script setup lang="ts">
import components from "@/components";
</script>

<template>
    <div id="app">
        <aside id="nav">
            <router-link to="/" class="py-4 ps-0 text-center">
                <img
                    class="image__oruga"
                    src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/master/public/logo.svg"
                    alt="Logo Oruga Theme Bootstrap" />
                <b>Oruga Bootstrap Theme</b>
            </router-link>

            <hr />

            <router-link
                v-for="component in components"
                :key="component"
                :to="{ name: component }">
                {{ component }}
            </router-link>
        </aside>

        <main class="main">
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
        width: 100%;
        height: 100vh;
        padding: 2rem;
        padding-bottom: 6rem;
        padding-left: calc(var(--vp-sidebar-width) + 2rem);

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
        position: fixed;
        left: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: var(--vp-sidebar-width);
        padding: 20px;
        padding-top: 0px;
        overflow-y: scroll;
        background-color: var(--vp-sidebar-bg-color);

        .theme-label {
            font-size: 1.25rem;
            text-align: center;
            padding: 1rem 0;
        }

        hr {
            width: 100%;
            margin-top: 0;
        }

        a {
            font-weight: 500;
            color: var(--vp-c-text-1);
            text-decoration: none;
            padding: 5px;
            font-size: 1rem;

            &.router-link-exact-active {
                color: rgb(181, 122, 255);
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
    #app {
        #nav {
            display: none;
        }
    }
}
</style>
