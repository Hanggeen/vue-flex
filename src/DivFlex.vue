<template>
  <div v-bind:style="flexClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    wrap: {
      type: String,
      default: 'nowrap'
    },
    justify: {
      type: String,
      default: 'flex-start'
    },
    alignItems: {
      type: String,
      default: 'stretch'
    },
    alignContent: {
      type: String,
      default: 'stretch'
    }
  },
  computed: {
    flexClass: function () {
      return {
        display: 'flex',
        flexDirection: this.direction,
        flexWrap: this.wrap,
        justifyContent: this.justify,
        alignItems: this.alignItems,
        alignContent: this.alignContent
      }
    }
  },
  mounted () {
  }
}
</script>