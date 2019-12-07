module.exports = {
	APP : "Devices App",
	PORT : "3001",
	LOCAL: process.env.LOCAL || true,
	MONGO:{
		"hostname":"localhost",
		"dbName":"devicesDB",
		"port":"27017",
		"username":"",
		"password":""
	},
	LogFilePath: "./var/logs/",
	LogStreamFilePath:"./var/streamlogs/"
}