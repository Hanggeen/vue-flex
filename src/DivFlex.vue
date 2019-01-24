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
    items: {
      type: String,
      default: 'stretch'
    },
    content: {
      type: String,
      default: 'stretch'
    }
  },
  data () {
    return {
      flexDirection: this.direction,
      flexWrap: this.wrap,
      justifyContent: this.justify,
      alignItems: this.items,
      alignContent: this.content
    }
  },
  computed: {
    flexClass: function () {
      return {
        display: 'flex',
        flexDirection: this.flexDirection,
        flexWrap: this.flexWrap,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        alignContent: this.alignContent
      }
    }
  },
  mounted () {
  }
}
</script>