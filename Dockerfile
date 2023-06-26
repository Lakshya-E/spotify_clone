# FROM node:18-alpine3.17

# WORKDIR /app

# ADD ./build .

# RUN npm install -g serve

# ENTRYPOINT ["serve","-d","build","-p","80"]




FROM node
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
VOLUME /app
EXPOSE 3000
CMD ["npm", "start"]