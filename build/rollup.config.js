import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import VuePlugin from 'rollup-plugin-vue';

export default {
  input: 'index.js',
  output: {
    file: './dist/vue-flex.min.js',
    format: 'es'
  },
  plugins: [
    // eslint(),
    resolve(),
    VuePlugin(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    terser()
  ]
};