FROM node:0.12

VOLUME ["/app"]
WORKDIR /app

CMD npm install && npm run build

