<template>
  <text ref="text" :x="position.x" :y="position.y" v-bind="$attrs">
    <slot />
  </text>
</template>
<script>
export default {
  name: 'VText',

  props: {
    position: {
      type: Object,
      required: true
    }
  }
}
</script>
