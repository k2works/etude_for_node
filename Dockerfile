FROM node:7.9.0
ADD . /container
WORKDIR /container
RUN yarn
RUN npm run build
