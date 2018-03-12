FROM heroku/heroku:16
FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/

Run npm install
# Run node --version

# Bundle app source
COPY . /usr/src/app

# EXPOSE 8000
CMD [ "npm", "start" ]
