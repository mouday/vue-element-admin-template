# make dev
.PHONY: dev
dev:
	npm run dev

# make re-deploy
.PHONY: re-deploy
re-deploy:
	git pull && \
	export PATH="/usr/local/node/v16.14.0/bin:$${PATH}" && \
	npm i --registry=https://registry.npmmirror.com && \
	npm run build:prod
