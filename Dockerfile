FROM node:16.14-alpine

RUN npm install -g npm@8.12.2

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN yarn add react-native-cli
RUN yarn install

COPY . .

EXPOSE 8081

CMD ["yarn", "start"]
