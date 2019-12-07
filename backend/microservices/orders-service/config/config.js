module.exports = {
	LOCAL: process.env.LOCAL || true,
	APP : "Order App",
	PORT: "3002",
	MONGO : {
		"hostname":"localhost",
		"port":"27017",
		"username":"",
		"password":"",
		"dbName": "sample"
	},
	LogFilePath: "./var/logs/",
	LogStreamFilePath:"./var/streamlogs/"
}

