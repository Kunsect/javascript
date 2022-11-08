module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  // uniapp 相关函数
  globals: {
    uni: 'readonly',
    getCurrentPages: 'readonly'
  },
  plugins: [
    'vue'
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    radix: 'off',
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'windows'],
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-useless-return': 'off',
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx']
      }
    },
    'import/core-modules': ['vue', 'vuex']
  }
}
