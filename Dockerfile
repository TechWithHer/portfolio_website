#Base image 0S
FROM node:25-alpine3.22

#Working Directory
WORKDIR /app

#COPY
COPY . .

#RUN
RUN apk add --no-cache python3 make g++
RUN npm install 
RUN npm run build

#EXPOSE 
EXPOSE 3000

#CMD
CMD ["npm","run","dev"]



