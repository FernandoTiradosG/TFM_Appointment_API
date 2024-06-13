FROM node:20.7.0
WORKDIR /usr/src/app

COPY . .
RUN npm install

USER 1000
EXPOSE 3000
CMD ["node", "src/index.js"]
