module.exports = {
  plugins: [
    process.env.NODE_ENV === 'development' && 'react-refresh/babel', // https://github.com/pmmmwh/react-refresh-webpack-plugin#usage
    ['@babel/plugin-proposal-decorators', { legacy: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy
    ['@babel/plugin-proposal-class-properties', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties#loose
    ['@babel/plugin-transform-runtime', { corejs: { version: 3, proposals: true } }], // https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs
    '@babel/plugin-syntax-dynamic-import', // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
    '@babel/plugin-proposal-export-namespace-from', // https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from
    '@babel/plugin-proposal-optional-chaining', // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
    '@babel/plugin-transform-async-to-generator', // https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator
    '@babel/plugin-transform-regenerator', // https://babeljs.io/docs/en/babel-plugin-transform-regenerator
    '@babel/plugin-transform-modules-commonjs', // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    ['babel-plugin-import', { libraryName: 'antd', style: true }], // https://github.com/ant-design/babel-plugin-import#babel-plugin-import
  ].filter(Boolean),
  presets: [
    '@babel/preset-typescript', // https://babeljs.io/docs/en/babel-preset-typescript
    '@babel/preset-react', // https://babeljs.io/docs/en/babel-preset-react
    ['@babel/preset-env', { useBuiltIns: 'usage', loose: true, corejs: { version: 3, proposals: true } }], // https://babeljs.io/docs/en/babel-preset-env/
    ['babel-preset-react-app', { flow: false, typescript: true }], // https://github.com/facebook/create-react-app#readme
  ],
};
