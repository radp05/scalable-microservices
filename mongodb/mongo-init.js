db.auth('root', 'Root123');
db = db.getSiblingDB('admin');

db.createUser({
	"user": "admin", "pwd":"Admin123", 
	"roles": [  
		{ "role": "userAdminAnyDatabase", "db": "admin" },
		{ "role": "dbAdminAnyDatabase", "db": "admin" },
		{ "role": "readWriteAnyDatabase", "db":"admin" },
		{ "role": "clusterAdmin",  "db": "admin" }
	]
});

db.createUser({
	"user" : "appuser", "pwd": "App123",
	"roles": [
		{ "role": "userAdminAnyDatabase", "db": "admin" },
		{ "role": "dbAdminAnyDatabase", "db": "admin" },
		{ "role": "readWriteAnyDatabase", "db":"admin" }
	]
});

// Seeding

// Add new Resource
// {
// 	"_id" : ObjectId("5e1300067887ed0b689d2a87"),
// 	"status" : true,
// 	"resourceName" : "MS-ADMIN",
// 	"resourceId" : "ms-admin",
// 	"createdAt" : ISODate("2020-01-06T09:38:14.167Z"),
// 	"updatedAt" : ISODate("2020-01-06T09:38:14.167Z"),
// 	"__v" : 0
// 	}

// Add new Group
// {
// 	"_id" : ObjectId("5e13001e7887ed0b689d2a88"),
// 	"resourceIds" : [
// 	"ms-admin"
// 	],
// 	"status" : true,
// 	"groupName" : "MS-ADMIN",
// 	"groupId" : "514f1250-3068-11ea-9549-39f363f68e51",
// 	"createdAt" : ISODate("2020-01-06T09:38:38.710Z"),
// 	"updatedAt" : ISODate("2020-01-06T09:38:38.710Z"),
// 	"__v" : 0
// 	}

// Add new User 
// {
// 	"_id" : ObjectId("5e13003a7887ed0b689d2a8a"),
// 	"status" : true,
// 	"lastLogin" : null,
// 	"createdBy" : null,
// 	"updatedBy" : null,
// 	"password" : "$2a$10$WrVLhA.GMPOXZQ6WUNFY6O3JhxZj244QBoFFwz.gCnU83mjjg6wwa",
// 	"firstName" : "MS",
// 	"lastName" : "ADMIN",
// 	"email" : "INCEDO-MS-ADMIN@gmail.com",
// 	"role" : "MS-ADMIN",
// 	"groupId" : "517beeb0-3068-11ea-9549-39f363f68e51",
// 	"userName" : "MS-ADMIN",
// 	"userId" : "61b5ae10-3068-11ea-9549-39f363f68e51",
// 	"createdAt" : ISODate("2020-01-06T09:39:06.225Z"),
// 	"updatedAt" : ISODate("2020-01-06T09:39:06.225Z"),
// 	"__v" : 0
// 	}


