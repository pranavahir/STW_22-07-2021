const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const keys = require('./config/keys')
const graphqlSchema = require('./api/graphql/Schemas/index.js')
const graphqlResolver = require('./api/graphql/Resolvers/index.js')

mongoose.connect(keys.mongoURI,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:true},(error) => {
    if(error) throw error
    console.log("MongoDB Connected")
})
const server = new ApolloServer({typeDefs:graphqlSchema,resolvers:graphqlResolver})
server.listen().then(({url}) => {
    console.log(`Server is running on ${url}`)
})