#FROM node:14.17-alpine as build
#WORKDIR /app
#
#RUN npm install -g @angular/cli@12.1.4
#
#COPY ./package.json .
#RUN yarn install
#COPY . .
#RUN ng build

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ../dist/shreyu-angular /usr/share/nginx/html

EXPOSE 4200