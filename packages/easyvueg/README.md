# easyvueg

> undefined is a module from easyvueg

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/easyvueg"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install easyvueg
```

Then import the component:

```js
import Easyvueg from 'easyvueg'
```

And either globally register it for use in all components:

```js
Vue.component(Easyvueg, 'easyvueg')
```

or locally register it for use in an individual component:

```js
export default {
components: { Easyvueg }
}
```

## Usage

```html
<undefined />
```
