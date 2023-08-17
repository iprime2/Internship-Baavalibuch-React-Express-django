FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080  MONGO_URI=mongodb+srv://kalwarsushil2:sushil69@nodeexpressproject.chjptls.mongodb.net/internship?retryWrites=true&w=majority

EXPOSE 8080

CMD [ "npm", "start" ]