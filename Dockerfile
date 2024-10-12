FROM node:lts-alpine3.20 AS builder
RUN corepack enable
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
RUN yarn
RUN yarn run init
RUN npm run build

FROM node:lts-alpine3.20
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node --from=builder /home/node/app/build /home/node/app/build
COPY --chown=node:node --from=builder /home/node/app/package*.json /home/node/app/
USER node
RUN npm ci --omit dev
EXPOSE 8080
CMD ["node", "build"]