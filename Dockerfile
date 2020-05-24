FROM node:current-alpine

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . .

RUN yarn build

CMD [ "yarn", "prod" ]
