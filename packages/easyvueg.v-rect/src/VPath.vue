<template>
  <path ref="path" :d="d" v-bind="$attrs" />
</template>
<script>
export default {
  name: 'VPath',

  props: {
    draw: {
      type: Array,
      required: true
    }
  },

  computed: {
    d() {
      const dString = this.draw.reduce((result, path) => {
        const [type] = Object.keys(path)
        return `${result} ${this.pattern[type]}${path[type].x} ${path[type].y}`
      }, '')

      return `${dString.trimStart()} Z`
    },

    pattern() {
      return {
        moveTo: 'M',
        lineTo: 'L'
      }
    }
  }
}
</script>
