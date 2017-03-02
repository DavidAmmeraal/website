const path = require('path');

const srcPath = path.join(__dirname, 'src');
const rootPath = srcPath;

module.exports = {
  root: rootPath,
  alias: {
    assets: 'assets',
    sections: 'app/sections',
    theme: 'app/theme',
    constants: 'app/constants',
    modules: 'app/modules'
  },
  extensions: ['', '.js', '.jsx', '.css']
}
