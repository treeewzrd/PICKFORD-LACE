require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*', (req, res) => {
    if (req.path === '/graphql' || req.path === '/health') {
      return res.status(404).end();
    }

    const indexPath = path.join(__dirname, '../client/build/index.html');

    if (process.env.NODE_ENV === 'production') {
      return res.sendFile(indexPath);
    }

    return res.send('API server running. Use GraphQL at /graphql');
  });

  app.listen(PORT, HOST, () => {
    console.log(`API server running on http://${HOST}:${PORT}`);
    console.log(`GraphQL endpoint: /graphql`);
  });

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
  });
};

startApolloServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
