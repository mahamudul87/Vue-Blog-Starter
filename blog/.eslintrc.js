module.exports = {
  root: true,
  parser: 'babel-eslint',
  "extends": [
    "prettier"
  ],
  parserOptions: {
    "ecmaVersion": 2016,
    sourceType: 'module'
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "curly": ["error", "all"],
    "max-len": ["error", {
      "code": 80,
      "ignoreUrls": true
    }],
    "no-confusing-arrow": "error",
    "no-tabs": "error",
    "quotes": ["error", "backtick"],
    "space-in-parens": 2,
    "space-before-function-paren": 0,
    "prettier/prettier": ["error", {
      "semi": false,
      "singleQuote": true
    }]
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    "prettier"
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },

}
