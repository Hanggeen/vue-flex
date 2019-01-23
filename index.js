import DivFlexComponent from './src/DivFlex.vue'
import DivItemComponent from './src/DivItem.vue'

const VueFlex = {
  install: function (Vue) {
    Vue.component('div-flex', DivFlexComponent)
    Vue.component('div-item', DivItemComponent)
  }
}

export default VueFlex