FROM node:20-bullseye-slim

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 3000

# PROD
CMD npm run start
# DEV
#CMD npm run dev
