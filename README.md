<p align="center">
    <img width="240" src="https://raw.githubusercontent.com/oruga-ui/theme-bootstrap/master/public/logo.svg" />
</p>

<p align="center">
  <i><a href="https://bootstrap.io" target="_blank">Bootstrap</a> theme for <a href="https://oruga.io" target="_blank">Oruga</a></i>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bootstrap"><img src="https://img.shields.io/npm/v/@oruga-ui/theme-bootstrap.svg?logo=npm" /><a>
    <a href="https://www.npmjs.com/package/@oruga-ui/theme-bootstrap"><img src="https://img.shields.io/npm/dt/@oruga-ui/theme-bootstrap.svg" /></a>
    <a href="https://discord.gg/RuKuBYN"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord" /></a>
    <a href="https://ko-fi.com/orugaui"><img src="https://img.shields.io/badge/donate-support%20us-00AA00.svg?logo=ko-fi" /></a>
</p>

### Install

```sh
npm install @oruga-ui/theme-bootstrap
```

or

```sh
yarn add @oruga-ui/theme-bootstrap
```

### Configure

```js
import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

createApp(App)
    .use(Oruga, bootstrapConfig)
    .mount('#app')
```
Please note, the package also works for `@oruga-ui/oruga` (Vue 2) and you can use it without importing the full Oruga bundle.

### Customization (SASS/SCSS)

<!-- Using the following sample code you don't need `import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'` but you have to add a custom sass/scss file to customize bootstrap and theme variables.

```scss
@import "~bootstrap/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Lists and maps
$custom-colors: null !default;
$custom-shades: null !default;

// Setup $colors to use as bootstrap classes (e.g. 'is-twitter')
$colors: mergeColorMaps(
    (
        "white": (
            $white,
            $black,
        ),
        "black": (
            $black,
            $white,
        ),
        "light": (
            $light,
            $light-invert,
        ),
        "dark": (
            $dark,
            $dark-invert,
        ),
        "primary": (
            $primary,
            $primary-invert,
            $primary-light,
            $primary-dark,
        ),
        "link": (
            $link,
            $link-invert,
            $link-light,
            $link-dark,
        ),
        "info": (
            $info,
            $info-invert,
            $info-light,
            $info-dark,
        ),
        "success": (
            $success,
            $success-invert,
            $success-light,
            $success-dark,
        ),
        "warning": (
            $warning,
            $warning-invert,
            $warning-light,
            $warning-dark,
        ),
        "danger": (
            $danger,
            $danger-invert,
            $danger-light,
            $danger-dark,
        ),
    ),
    $custom-colors
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bootstrap/bootstrap";
@import '~@oruga-ui/theme-bootstrap/dist/scss/bootstrap';
``` -->

### Override default config

In case you want to replace the default style of a component you can override or add new classes changing ``bootstrapConfig``; more details about components customization on https://oruga.io/documentation/#customization

```js
import { createApp } from 'vue'

import Oruga from '@oruga-ui/oruga-next'
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

const custombootstrapConfig = {
    ...bootstrapConfig,
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    }
}

createApp(App)
    .use(Oruga, custombootstrapConfig)
    .mount('#app')
```


## Buefy users

### Components

| Buefy       | Oruga      | Note 
| ----------- | ---------- | ----------------
| Taginput    | Inputitems |
| Toast       | N.A.       | You can customize Notification with `noticeClass` and/or passing a component using programmatic way
| Snackbar    | N.A.       | You can customize Notification with `noticeClass` and/or passing a component using programmatic way

At the moment you won't find Carousel, Dialog, Navbar, Menu but we'll add them soon in Oruga core code.

### Props

| Buefy           | Oruga      | Component      | Note 
| --------------- | ---------- | -------------- | --------------------
| type            | variant    |     -          | Removed prefix `is-`
| size            | size       |     -          | Removed prefix `is-`
| loading         | N.A.       |     -          | Not supported
| label-position  | N.A.       | Field          | Not suppported but you can easily add `is-floating-label` or `is-floating-in-label` class to ``root-class`` prop
| size            | N.A.       | Tooltip        | You can use `multiline-class` or `content-class`
| custom          | N.A.       | Dropdown Item  | You can use ``tag`` prop
| has-modal-card  | N.A.       | Modal          | You have to add `content-class="modal-content"` when you don't use modal-card classes as content


## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<a href="https://github.com/oruga-ui/theme-bootstrap">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-bootstrap"
  />
</a>

[Complete list](CONTRIBUTORS.md).

## License

Code released under [MIT](https://github.com/oruga-ui/theme-bootstrap/blob/master/LICENSE) license.
