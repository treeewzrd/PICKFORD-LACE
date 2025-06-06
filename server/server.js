const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Add this line:
  persistedQueries: false,
  // other options...
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Serve up static assets ONLY in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Wildcard route to serve the React app's index.html ONLY in production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// If we're in development, only handle API routes and let React dev server handle frontend
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('API server running. Use GraphQL at /graphql');
  });
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
