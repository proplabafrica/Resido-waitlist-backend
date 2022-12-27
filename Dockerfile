# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:10

# Create and change to the app directory.
WORKDIR /usr/src/app

# Set PORT & HOST For Google Cloud Run
ENV PORT 8080
ENV HOST 0.0.0.0

# Copy application dependency manifests to the container image.
# Copying this first prevents re-running yarn install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]
