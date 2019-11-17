module.exports = {
  resolve: {
    alias: {
      // Alias for using source of BootstrapVue
      'bootstrap-vue$': 'bootstrap-vue/src/index.js'
    }
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  use: ['vue-style-loader', 'css-loader']
}