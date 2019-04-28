const express = require('express');
const graphqlHTTP = require ('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema
var schema = buildSchema(`
	type Query {
		shops(location:String): [Shop]
	}
	type Shop {
		id: ID
		name: String
		location: String
	}
`);

class Shop {
	constructor(id, name, location) {
		this.id = id;
		this.name = name;
		this.location = location;
	}
};

const db = [
	new Shop(1, 'test', 'testlocation'),
	new Shop(2, 'test2', 'testlocation2'),
];

// The root provides a resolver function for each API endpoint
var rootValue = {
	shops: ({ location }) => {
		if (location) {
			return db.filter(item => item.location.includes(location));
		} else {
			return db;
		}
	}
};

const app = express();

app.use('/graphql', graphqlHTTP({
	schema,
	rootValue,
	graphiql: true,
	pretty: true,
}));

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));