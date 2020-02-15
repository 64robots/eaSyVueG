# easyvueg.v-polygon

> VPolygon is a module from easyvueg.v-polygon

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-polygon"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-polygon
```

Then import the component:

```js
import VPolygon from 'easyvueg.v-polygon'
```

And either globally register it for use in all components:

```js
Vue.component(VPolygon, 'easyvueg.v-polygon')
```

or locally register it for use in an individual component:

```js
export default {
components: { VPolygon }
}
```

## Usage

```html
<VPolygon />
```
