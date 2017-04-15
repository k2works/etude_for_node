FROM node:7.9.0
ADD . /code
WORKDIR /code
RUN npm install
