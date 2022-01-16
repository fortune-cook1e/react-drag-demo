const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const REACT_MODULE =
	/[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-config|react-router-dom|react-router-redux|redux|@reduxjs\/toolkit)[\\/]/

module.exports = merge(common, {
	mode: 'production',
	devtool: false,

	optimization: {
		minimize: true,
		// Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
		// instead of having their own. This also helps with long-term caching, since the chunks will only
		// change when actual code changes, not the webpack runtime.
		splitChunks: {
			chunks: 'all',
			minChunks: 3,
			cacheGroups: {
				react: {
					test: REACT_MODULE,
					name: 'react',
					minChunks: 1,
					priority: 10,
					enforce: true,
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: 'runtime'
		}
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
})
