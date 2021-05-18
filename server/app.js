const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database

mongoose.connect('mongodb+srv://navnit:test@cluster0.flxcq.mongodb.net/gql-navnit?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('now listening for request on port 4000');

});