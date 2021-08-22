import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import replace from '@rollup/plugin-replace';
import external from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

const EXTERNALS = ['react', 'react-dom', 'prop-types'];

const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
];

const GLOBALS = {
  react: 'React',
	'react-dom': 'ReactDOM'
}

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return;
  }

  console.error(warning);
};

const env = process.env.NODE_ENV;

const commonPlugins = () => [
	sass({ insert: true }),
  typescript({ objectHashIgnoreUnknownHack: false }),
  external({
    includeDependencies: true,
  }),
  babel({
    babelrc: false,
    presets: [
			[
				'@babel/preset-env', { 
				modules: false,
				"useBuiltIns": "usage",
				"corejs": "3.16.2",
				"targets": {
          "browsers": "> 0.25%, not op_mini all, not dead, IE 10-11",
        }
			}
		], 
			'@babel/preset-react', 
			'@babel/preset-typescript'
		],
		babelHelpers: 'bundled',
    extensions: EXTENSIONS,
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
  replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify(env) }),
  nodeResolve({
    extensions: EXTENSIONS,
    preferBuiltins: false,
  })
];

export default {
	onwarn: discardWarning,
  input: 'src/index.tsx',
	output: {
		esModule: true,
		file: pkg.main,
		format: 'cjs', //umd
		sourcemap: true,
		strict: false,
		name: 'react-typing2',
		exports: 'auto',
		globals: GLOBALS
	},
	plugins: [...commonPlugins(), env === 'production' && terser()],
  external: EXTERNALS
}