# eaSyVueG

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
<script src="https://unpkg.com/easyvueg"></script>
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
<script src="https://unpkg.com/easyvueg/VPath"></script>
<script src="https://unpkg.com/easyvueg/VRect"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install easyvueg
```

Then register the library as a plugin to globally install all components:

```js
import easyvueg from 'easyvueg'

Vue.use(easyvueg)
```

Or, import components individually for local registration:

```js
import { VPath, VRect } from 'easyvueg'

export default {
  components: { VPath, VRect }
}
```

#### Individually packaged components

If you only want to use a small subset of components, only import individually packaged components to reduce the size of your application:

```js
import VPath from 'easyvueg.VPath'
import VRect from 'easyvueg.VRect'
```
