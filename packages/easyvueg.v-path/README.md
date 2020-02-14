# easyvueg.v-path

> VPath is a module from easyvueg.v-path

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-path"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-path
```

Then import the component:

```js
import VPath from 'easyvueg.v-path'
```

And either globally register it for use in all components:

```js
Vue.component(VPath, 'easyvueg.v-path')
```

or locally register it for use in an individual component:

```js
export default {
components: { VPath }
}
```

## Usage

```html
<VPath />
```
