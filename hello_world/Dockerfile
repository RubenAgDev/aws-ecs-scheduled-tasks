FROM node:7.10.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# Bundle app source
ARG NPM_TOKEN  
COPY . /usr/src/app
RUN npm install --production
RUN rm -f /usr/src/app/.npmrc

CMD [ "npm", "start" ]
