FROM node:latest
WORKDIR /nodeapp/

# Copying all the folders and file inside nodeapp workdirectory directory created above
COPY . /nodeapp/
COPY package-lock.json /nodeapp/
COPY package.json /nodeapp/
RUN npm install

# Declaring env variables
ENV MONGO_URI = mongodb://localhost:27017/myDatabase \
    PORT = 3000

# Declaring port
EXPOSE 3000

CMD ["npm","run","start"]