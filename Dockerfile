FROM node:alpine

EXPOSE 8000



WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build
WORKDIR /app
WORKDIR /app/dist


ENTRYPOINT [ "node", "main.js" ]