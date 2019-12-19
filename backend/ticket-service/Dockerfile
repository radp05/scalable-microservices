# From Base Image
FROM node:lts-alpine

# Labels
LABEL Repository="msrinivasachar/tickets" Creater="msrinivasachar" email="msrinivasachar@incedoinc.com"

# Work Directory
WORKDIR /home/app

# Copy Code
COPY . .

# Run Commands
RUN npm install --prod

# Expose Ports which are required for this service
EXPOSE 3004

# Entrypoint
ENTRYPOINT [ "npm" ]

# Commands to start
CMD [ "start" ]