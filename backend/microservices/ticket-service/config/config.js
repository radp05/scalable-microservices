module.exports = {
	APP : "Tickets App",
	PORT : "3004",
	LOCAL: process.env.LOCAL,
	MONGO:{
		"hostname":"localhost",
		"dbName":"ticketsDB",
		"port":"27017",
		"username":"",
		"password":""
	},
	LogFilePath: "./logs/",
	LogStreamFilePath:"./logs/streamlogs/"
}