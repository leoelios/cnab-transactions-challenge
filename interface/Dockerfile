# Generate production artifact
FROM node:alpine

WORKDIR /srv/app
COPY . .

RUN npm i && npm run build

# Serve production artifact
FROM node:alpine

RUN npm i -g serve
RUN apk add xsel

WORKDIR /srv/app
COPY --from=0 /srv/app/dist .

ENTRYPOINT ["serve", "-n", "-p", "80"]
