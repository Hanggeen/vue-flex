<template>
  <div v-bind:style="flexClass" class="flexitem">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    fixed: {
      type: String
    },
    expand: {
      type: String
    },
    order: {
      type: String,
      default: '0'
    },
    grow: {
      type: String,
      default: '0'
    },
    shrink: {
      type: String,
      default: '0'
    },
    basis: {
      type: String,
      default: 'auto'
    },
    alignSelf: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      flexOrder: this.order,
      flexGrow: this.grow,
      flexShrink: this.shrink,
      flexBasis: this.basis,
      flexAlignSelf: this.alignSelf
    }
  },
  computed: {
    flexClass: function () {
      if (this.fixed !== undefined) {
        this.flexGrow = 0;
        this.flexShrink = 0;
      }
      if (this.expand !== undefined) {
        this.flexGrow = 1;
        this.flexShrink = 1;
      }
      return {
        order: this.flexOrder,
        flexGrow: this.flexGrow,
        flexShrink: this.flexShrink,
        flexBasis: this.flexBasis,
        alignSelf: this.flexAlignSelf
      }
    }
  }
}
</script>
