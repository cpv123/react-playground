# production build process
FROM node:8 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# production environment
FROM nginx:1.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]