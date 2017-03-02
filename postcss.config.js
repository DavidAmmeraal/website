module.exports = (ctx) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-modules-values-replace')({
      resolve: {
        alias: {
          'theme': 'app/theme',
          'constants': 'app/constants'
        },
        modules: ['src', 'node_modules'],
        extensions: ['', '.css']
      }
    }),
    require('postcss-assets')({
      basePath: 'src'
    }),
    require('postcss-strip-units'),
    require('postcss-cssnext')({
      features: {
        calc: {
          mediaQueries: true,
          warnWhenCannotResolve: true
        }
      }
    }),
    require('postcss-color-function')
  ]
});
