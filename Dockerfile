FROM node:alpine

EXPOSE 1000



WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build
WORKDIR /app
WORKDIR /app/dist


ENTRYPOINT [ "node", "main.js" ]