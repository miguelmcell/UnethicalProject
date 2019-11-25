# base image
#FROM node:latest

# set working directory
#WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json .

#RUN npm install react-scripts@3.0.1 -g --silent

# start app
#CMD ["npm", "start"]

FROM nginx:1.17
COPY nginx.conf /etc/nginx/nginx.conf
COPY build/ /usr/share/nginx/html
