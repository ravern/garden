FROM node:12-alpine

WORKDIR /opt/app

ENV PORT=80

RUN echo 'crond' > /boot.sh

COPY package.json ./
COPY yarn.lock ./
COPY .npmrc ./

RUN yarn install --production

COPY dist ./dist

CMD sh /boot.sh && yarn prod
