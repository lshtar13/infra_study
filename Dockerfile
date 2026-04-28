FROM node:22-alpine

COPY ./server.js /apps/server.js

ENTRYPOINT ["node", "/apps/server.js"]
