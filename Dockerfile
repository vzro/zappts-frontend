FROM node:14.15.4-alpine

WORKDIR /app

ENV PATH app/node_modules/.bin:$PATH

COPY . /

RUN npm install

CMD [ "npm", "start" ]
