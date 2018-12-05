install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

startEven:
	npx babel-node -- src/bin/brain-even.js

startCalc:
	npx babel-node -- src/bin/brain-calc.js

build:
	npm run build

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
