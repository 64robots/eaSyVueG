# easyvueg.v-circle

> VCircle is a module from easyvueg.v-circle

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-circle"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-circle
```

Then import the component:

```js
import VCircle from 'easyvueg.v-circle'
```

And either globally register it for use in all components:

```js
Vue.component(VCircle, 'easyvueg.v-circle')
```

or locally register it for use in an individual component:

```js
export default {
components: { VCircle }
}
```

## Usage

```html
<VCircle />
```
