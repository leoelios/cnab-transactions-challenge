# Generate production artifact
FROM node:alpine

WORKDIR /srv/app
COPY . .

RUN npm i && npm run build

# Serve production artifact
FROM nginx:latest

RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY nginx-config /etc/nginx

WORKDIR /var/www/enviai.shop/html
COPY --from=0 /srv/app/dist .