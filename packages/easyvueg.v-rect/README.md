# easyvueg.v-rect

> VRect is a module from easyvueg.v-rect

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-rect"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-rect
```

Then import the component:

```js
import VRect from 'easyvueg.v-rect'
```

And either globally register it for use in all components:

```js
Vue.component(VRect, 'easyvueg.v-rect')
```

or locally register it for use in an individual component:

```js
export default {
components: { VRect }
}
```

## Usage

```html
<VRect />
```
