# Pickford & Lace

**Full-stack e-commerce application for an independently operated vintage apparel business.**

Pickford & Lace is a storefront I'm developing for my part-time vintage clothing business. The project connects a React shopping interface to a Node.js/Express GraphQL API, MongoDB-backed catalog and account data, and a Stripe-hosted credit-card checkout flow. This repository is both a working development project and the foundation for the store's online sales platform.

**Status:** In development. A deployment configuration and a [Render demo](https://pickford-and-lace.onrender.com) are available, but the presence of a deployment does not imply every business workflow is production-ready.

## Implemented in the repository

- React storefront with product browsing, category/search queries, and cart functionality
- Account registration/login using JWT and bcrypt password hashing
- Node.js/Express backend exposing GraphQL queries and mutations through Apollo
- MongoDB/Mongoose models for users, products, categories, and orders
- Authenticated Stripe Checkout session creation, with server-side product lookup and pricing
- Checkout page that redirects to Stripe's hosted payment flow
- User order queries and order creation mutations
- Render deployment configuration

Payment processing is handled through **Stripe Checkout**; the application does not need to collect or store raw credit-card numbers. The checkout flow is implemented in source, but live payment processing, fulfillment, and production readiness have not been independently verified here.

## Stack

| Layer | Tools |
| --- | --- |
| Frontend | React, JavaScript, React Router, React Bootstrap |
| API / backend | Node.js, Express, GraphQL, Apollo Server / Client |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Payments | Stripe Checkout |
| Deployment | Render |

The earlier project documentation also references Cloudinary for product imagery; integration details should be confirmed against the currently deployed build before calling that production-ready.

## Local development

**Requirements:** Node.js/npm, a MongoDB connection, and Stripe test keys for checkout testing.

```bash
git clone https://github.com/treeewzrd/PICKFORD-LACE.git
cd PICKFORD-LACE
npm install
cd server && npm install
cd ../client && npm install
```

Configure environment variables in the appropriate server/client environment files, then run the API and React development server in separate terminals:

```bash
# Terminal 1: from server/
npm run watch

# Terminal 2: from client/
npm start
```

Typical settings include:

- Server: `MONGODB_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `CLIENT_URL`
- Client: `REACT_APP_STRIPE_PUBLISHABLE_KEY` and the API URL if needed

Use Stripe **test mode** when developing or evaluating checkout. Never commit real credentials.

## Next steps

- [ ] Verify the complete checkout-to-order lifecycle with Stripe test transactions
- [ ] Review inventory updates, order persistence, and error handling
- [ ] Add backend and checkout integration tests
- [ ] Audit authentication and permissions for write operations
- [ ] Validate responsive behavior, accessibility, and production configuration
- [ ] Prepare catalog data and operational workflows for the actual vintage store

## Project links

- [GitHub repository](https://github.com/treeewzrd/PICKFORD-LACE)
- [Render application](https://pickford-and-lace.onrender.com)

This is independently developed software for my vintage apparel business, not a commercially released marketplace product.
