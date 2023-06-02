FROM node:latest

WORKDIR /usr/src/nodejs

COPY package*.json /usr/src/nodejs/

#development
RUN npm install
#RUN npm ci --only=production

COPY . /usr/src/nodejs/
#COPY . .

EXPOSE 8080

CMD ["node", "server.js"]



