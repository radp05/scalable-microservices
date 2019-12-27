module.exports = {
	LOCAL: process.env.LOCAL,
	APP : "Authentication App",
	PORT: "4000",
	MONGO : {
		"hostname":"localhost",
		"port":"27017",
		"username":"",
		"password":"",
		"dbName": "sample"
	},
	LogFilePath: "./logs/",
	LogStreamFilePath:"./logs/streamlogs/"
}

