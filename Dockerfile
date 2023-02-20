FROM node:alpine

EXPOSE 8080

WORKDIR /app
COPY . .
RUN npm ci



ENTRYPOINT [ "npm", "run", "serve" ]