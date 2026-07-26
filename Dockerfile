#Base image 0S
FROM node:25-alpine3.22 AS builder

#Working Directory
WORKDIR /app

#COPY
COPY package*.json ./
RUN npm ci

COPY . .

#RUN
RUN apk add --no-cache python3 make g++
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app ./
#EXPOSE 
EXPOSE 3000

#CMD
CMD ["npm","start"]


