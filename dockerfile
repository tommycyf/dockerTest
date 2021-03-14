FROM node:12-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node","lib" ]