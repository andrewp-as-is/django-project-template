all:
	make webpack

webpack:
	webpack --config webpack.config.prod.js
