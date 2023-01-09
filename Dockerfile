FROM node:lts-alpine 

WORKDIR /api

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


EXPOSE 3000



CMD [ "npm", "start" ]