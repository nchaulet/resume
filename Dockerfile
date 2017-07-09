FROM node:8

VOLUME ["/app"]
WORKDIR /app

CMD npm install && npm run build
