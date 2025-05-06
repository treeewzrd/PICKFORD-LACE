import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      description
      price
      image
      quantity
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  mutation getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
