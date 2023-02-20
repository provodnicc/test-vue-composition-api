FROM node:alpine

EXPOSE 8080

WORKDIR /app
COPY . .
RUN npm ci

RUN npm run serve

