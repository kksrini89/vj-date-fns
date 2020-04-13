import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'main.js',
    output: {
      name: 'vanillaDateFns',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [commonjs()],
  },
  {
    input: 'main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
