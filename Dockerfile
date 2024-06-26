FROM node:20.11.1-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 3000

CMD ["npm", "run", "serve"]