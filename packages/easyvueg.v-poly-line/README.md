# easyvueg.v-poly-line

> VPolyLine is a module from easyvueg.v-poly-line

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-poly-line"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-poly-line
```

Then import the component:

```js
import VPolyLine from 'easyvueg.v-poly-line'
```

And either globally register it for use in all components:

```js
Vue.component(VPolyLine, 'easyvueg.v-poly-line')
```

or locally register it for use in an individual component:

```js
export default {
components: { VPolyLine }
}
```

## Usage

```html
<VPolyLine />
```
