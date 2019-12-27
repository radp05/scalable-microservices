module.exports = {
	LOCAL: true,
	APP_NAME: "Camunda Rest API",
	API_BASE: "/api/v1/camunda-rest",
	PORT: "5000",
	MONGO: {
		"hostname": "localhost",
		"port": "27017",
		"username": "",
		"password": "",
		"dbName": "camunda_db",
		"replicaSet": null
	},
	CAMUNDA_BASE_URL: 'http://localhost:8051/engine-rest'
}