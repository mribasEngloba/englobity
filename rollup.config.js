import pkg from './package.json';
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

const umdGlobals = pkg.peerDependencies || {};

module.exports = [
	{
		input: './src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'umd',
			name: 'englobTechMaterial',
			globals: umdGlobals,
			sourcemap: 'inline',
			exports: 'named',
		},
		external: Object.keys(umdGlobals),
		plugins: [
			nodeResolve(),
			commonjs({ include: '**/node_modules/**' }),
			babel({ exclude: '**/node_modules/**' }),
			uglify(),
		],
	},
];
