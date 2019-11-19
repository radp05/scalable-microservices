module.exports = {
	APP: "admin App",
	PORT: "3003",
	LOCAL: true,
	SALT_ROUND: 10,
	MONGO: {
		"hostname": "localhost",
		"port": "27017",
		// "username": "",
		// "password": "",
		"dbName": "user_db"
	},
	WINSTON: {
		"datePattern": 'YYYY-MM-DD-HH',
		"maxSize": '5m',
		"maxFiles": '4d'
	},
	API_PREFIX: '/api/v1',
	PRIVATE_KEY: "incedo-inc-pk"
}