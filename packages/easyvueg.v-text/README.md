# easyvueg.v-text

> VText is a module from easyvueg.v-text

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg.v-text"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg.v-text
```

Then import the component:

```js
import VText from 'easyvueg.v-text'
```

And either globally register it for use in all components:

```js
Vue.component(VText, 'easyvueg.v-text')
```

or locally register it for use in an individual component:

```js
export default {
components: { VText }
}
```

## Usage

```html
<VText />
```
