module.exports = {
	LOCAL: process.env.LOCAL,
	APP_NAME: "Notification Service",
	PORT: "3333",
	ZOOKEEPER_URL: 'http://localhost:2181',
	MONGO: {
		"hostname": "localhost",
		"port": "27017",
		"username": "",
		"password": "",
		"dbName": "notification_db",
		"replicaSet": null
	},
	LogFilePath: "./logs/",
	LogStreamFilePath:"./logs/streamlogs/"
}