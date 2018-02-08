// 'use strict'
// const merge = require('webpack-merge')
// const prodEnv = require('./prod.env')
//
// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"'
// })

// 开发环境

'use strict'

module.exports = {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.1.211:81"',
  // BASE_API: '"http://192.168.1.19:8089"'
}
