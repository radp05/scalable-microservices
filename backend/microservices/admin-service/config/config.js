module.exports = {
	APP_NAME: "Admin App",
	PORT: "3003",
	LOCAL: process.env.LOCAL,
	SALT_ROUND: 10,
	MONGO:{
		"hostname":"localhost",
		"dbName":"user_db",
		"port":"27017",
		"username":"",
		"password":""
	},
	WINSTON: {
		"datePattern": 'YYYY-MM-DD-HH',
		"maxSize": '5m',
		"maxFiles": '4d'
	},
	PRIVATE_KEY: "incedo-inc-pk",
	LogFilePath: "./logs/",
	LogStreamFilePath:"./logs/streamlogs/"
}