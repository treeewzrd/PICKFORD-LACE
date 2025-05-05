const { gql } = require('apollo-server-express');

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    era: String!
    category: String!
    size: String
    condition: String
    images: [String!]
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    addProduct(
      name: String!
      description: String!
      price: Float!
      era: String!
      category: String!
      size: String
      condition: String
      images: [String!]
    ): Product
  }
`;

module.exports = productSchema;
