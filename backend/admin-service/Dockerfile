# From Base Image
FROM node:lts-alpine

# Labels
LABEL Repository="saibabanadh/sample-service" Creater="Sai Baba Nadh Konda" email="saibabanadh@gmail.com"

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
