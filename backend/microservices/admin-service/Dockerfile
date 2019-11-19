# From Base Image
FROM node:lts-alpine

# Labels
<<<<<<< HEAD
LABEL Repository="radhika/devices" Creater="Radhika" email="radhika@gmail.com"
=======
LABEL Repository="saibabanadh/sample-service" Creater="Sai Baba Nadh Konda" email="saibabanadh@gmail.com"
>>>>>>> 71d50c4c621abb099ebe3755f0bebf59c232a853

# Work Directory
WORKDIR /home/app

# Copy Code
COPY . .

# Run Commands
RUN npm install --prod

# Expose Ports which are required for this service
EXPOSE 3001

# Entrypoint
ENTRYPOINT [ "npm" ]

# Commands to start
CMD [ "start" ]
