<template>
  <rect
    ref="rect"
    :width="dimensions.width"
    :height="dimensions.height"
    :x="position.x"
    :y="position.y"
    :rx="rounded.x"
    :ry="rounded.y"
    v-bind="$attrs"
  />
</template>
<script>
export default {
  name: 'VRect',

  props: {
    dimensions: {
      type: Object,
      required: true
    },
    position: {
      type: Object,
      required: true
    },
    rounded: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    }
  }
}
</script>
