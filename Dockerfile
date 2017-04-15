FROM node:7.9.0
ADD . /container
WORKDIR /container
RUN npm install
