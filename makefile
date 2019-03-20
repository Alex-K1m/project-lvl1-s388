install:
	npm install

run:
	npx babel-node -- src/bin/brain-games.js

test:
	npm test

build:
	npm run build

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
