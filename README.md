# SVueG

> Human Friendly SVG components made with Vue.

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <v-path></v-path>
  <v-rect></v-rect>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/svueg"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <v-path></v-path>
  <v-rect></v-rect>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/hello-vue-components/VPath"></script>
<script src="https://unpkg.com/hello-vue-components/VRect"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install svueg
```

Then register the library as a plugin to globally install all components:

```js
import SVueG from 'svueg'

Vue.use(SVueG)
```

Or, import components individually for local registration:

```js
import { VPath, VRect } from 'svueg'

export default {
  components: { VPath, VRect }
}
```

#### Individually packaged components

If you only want to use a small subset of components, only import individually packaged components to reduce the size of your application:

```js
import VPath from 'svueg.VPath'
import VRect from 'svueg.VRect'
```
