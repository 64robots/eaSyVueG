<template>
  <polygon ref="polygon" :points="draw" v-bind="$attrs" />
</template>
<script>
export default {
  name: 'VPolygon',

  props: {
    points: {
      type: Array,
      required: true
    }
  },

  computed: {
    draw() {
      return this.points
        .reduce((result, point) => {
          return `${result} ${point.x},${point.y}`
        }, '')
        .trim()
    }
  }
}
</script>
