
FROM node:14-alpine AS build
 
WORKDIR /usr/app
 
COPY package*.json ./
 
RUN yarn install
 
COPY . . 
 
RUN echo 'REACT_APP_API ="VAR_URL_API"' > .env.production && \
    npm run build

FROM nginx:1.21.0-alpine

ENV URL_API="http://localhost/"

COPY --from=build /usr/app/build/ /usr/share/nginx/html/

# COPY entrypoint.sh /usr/local/bin/

RUN rm /etc/nginx/conf.d/*

COPY ./NGINX/conf.d/* /etc/nginx/conf.d/

EXPOSE 80

# ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;"]


## Documentação
# https://somatorio.org/pt-br/post/docker_react_multi_ambiente/