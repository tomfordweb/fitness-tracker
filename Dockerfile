FROM node:lts-buster as builder

ENV NEXT_PUBLIC_API_URL=$api_url

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package* ./ 
RUN npm install

COPY ./ ./

RUN npm run build

