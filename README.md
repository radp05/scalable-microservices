# Scalable-Microservices

This is a sample application to demonstrate the Scalable Microservices using MEAN stack.

- frontend
	- This is a directory for UI App
	- structure
		- portal (main app)
		- apps
			- app1(devices)
			- app2(orders)
		- Dockerfile (required)
	- portal is actual UI app
	- apps are packages or micro-ui-apps to add as cards inside the portal


- backend
	- This is a directory for Microservices
	- structure
		- microservices
			- common (keep all configurations for all microservices)
			- service1 (devices)
			- service2 (orders)
			- ...

	- sample microservice structure
		- sample-service (change this with your service name)
			- config/
				- config.js
			- controllers/
				- sample.controller.js
			- helpers/
				- sample.helper.js
			- models/
				- sample.model.js
			- routes/
				- routes.js
			- test/
				- sample.spec.js
			- app.js
			- package.json
			- package-lock.json
			- Dockerfile (require for each service)
			- README.md

- egateway
	- This is Express Gateway directory
	- Structure
		- config/
			- system.config.yml
			- gateway.config.yml
		- server.js
		- package.json
		- package-lock.json
		- README.md


- docker-compose.yml
	- This is to make containers up and running on docker


- .gitignore
	- Add files not required for build


- .dockerignore
	- Add files or directories not required to copy while creating container




