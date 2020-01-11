const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    rules: [{
      options: {
        modifyVars: {
          
        }
      }
    }
    ]
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};