<template>
  <circle
    v-if="isCircle"
    ref="circle"
    :cx="position.x"
    :cy="position.y"
    :r="radius"
    v-bind="$attrs"
  />
  <ellipse
    v-else
    ref="ellipse"
    :cx="position.x"
    :cy="position.y"
    :rx="radius.x"
    :ry="radius.y"
    v-bind="$attrs"
  />
</template>
<script>
export default {
  name: 'VCircle',

  props: {
    position: {
      type: Object,
      required: true
    },
    radius: {
      type: [Object, Number],
      required: true
    }
  },

  computed: {
    isCircle() {
      return typeof this.radius === 'number'
    }
  }
}
</script>
