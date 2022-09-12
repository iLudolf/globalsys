
FROM node:14-alpine AS build
 
WORKDIR /usr/app
 
COPY package*.json ./
  
COPY . . 

RUN npm install

RUN npm run dev 
    
EXPOSE 3001

## Documentação
# https://somatorio.org/pt-br/post/docker_react_multi_ambiente/