FROM node:14
WORKDIR /frontend
# COPY frontend/package.json /frontend 
# COPY frontend/yarn.lock /frontend
COPY frontend/ .
RUN npm install -g create-react-app
RUN npm install 
# CMD npm start
EXPOSE 3001