#Base image 0S
FROM node:25-alpine3.22

#Working Directory
WORKDIR /app

#COPY
COPY . .

#RUN 
RUN npm install 
RUN npm run build

#EXPOSE 
EXPOSE 3000

#CMD
CMD ["npm","run","dev"]



