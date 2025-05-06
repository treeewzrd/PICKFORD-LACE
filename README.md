# PICKFORD-LACE: Vintage Clothing E-Commerce Platform

![PICKFORD-LACE Logo](path/to/logo.png) <!-- Consider adding a project logo -->

> **Western Outlaw meets Mid-Century Modern.  
> A journey through vintage - from leather-clad rebels  
> to Vegas showgirls, punk rock edges to designer elegance.**

## Table of Contents
- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Product Categories](#product-categories)
- [Technical Architecture](#technical-architecture)
- [Development Process](#development-process)
- [Future Development](#future-development)
- [Credits & Acknowledgments](#credits--acknowledgments)
- [License](#license)
- [Contact](#contact)

## Overview

PICKFORD-LACE is a distinctive e-commerce platform specializing in curated vintage clothing that blends rebellious Western aesthetics with Mid-Century Modern sophistication. The platform offers a carefully selected collection spanning multiple eras and styles—from rugged leather pieces that evoke the spirit of outlaws to elegant showgirl-inspired ensembles and from edgy punk rock statements to refined designer classics. This unique cross-era approach creates a shopping experience that celebrates the boldness and craftsmanship of vintage fashion across all devices.

## Live Demo

The application is deployed and available at: [PICKFORD-LACE on Render](https://pickford-lace.onrender.com)

![Application Screenshot](path/to/screenshot.png)

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **User Authentication**: Secure account creation and login system
- **Curated Collections**: Themed vintage collections with unique aesthetic narratives
- **Advanced Filtering**: Browse by era, style, influence (Western, Mid-Century, etc.), size, and condition
- **Shopping Cart**: Add, remove, and modify items before checkout
- **Secure Checkout**: Integrated with Stripe for safe payment processing
- **Order History**: Track past purchases and delivery status
- **Wishlist System**: Save favorite items for future consideration
- **Style Stories**: Background information on each piece's era and cultural significance
- **User Reviews**: Leave feedback on purchased items
- **Admin Dashboard**: Manage inventory, orders, and user accounts

## Screenshots

![Home Page](path/to/home-screenshot.png)
*The main landing page showcasing the Western-meets-Mid-Century aesthetic*

![Product Detail](path/to/product-screenshot.png)
*Detailed product view with multiple images, styling suggestions, and historical context*

![Shopping Cart](path/to/cart-screenshot.png)
*User shopping cart with checkout options*

## Technologies Used

### Frontend
- **React.js**: Component-based UI development
- **Apollo Client**: State management and GraphQL integration
- **CSS/SCSS**: Custom styling and responsive design
- **JWT Authentication**: Secure user sessions

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express**: Web application framework
- **Apollo Server**: GraphQL implementation
- **MongoDB**: NoSQL database for product and user data
- **Mongoose**: MongoDB object modeling

### Additional Technologies
- **Stripe API**: Secure payment processing
- **GraphQL**: Efficient data querying
- **JWT**: Authentication and authorization
- **Bcrypt**: Password hashing and security
- **Cloudinary**: Image hosting and optimization

## Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn
- MongoDB account
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/treeewzrd/PICKFORD-LACE.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PICKFORD-LACE
   ```

3. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

5. Create a .env file in the server directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

6. Start the development server:
   ```bash
   npm run develop
   ```

## Usage

### Customer Experience

1. Explore curated collections that blend Western ruggedness with Mid-Century elegance
2. Filter products by era, aesthetic influence, size, or price
3. View detailed product information, historical context, and styling suggestions
4. Add items to cart or wishlist
5. Create an account or checkout as guest
6. Complete purchase using secure Stripe payment
7. Track order status and view order history

### Admin Features

1. Add, edit, or remove product listings
2. Manage inventory and stock levels
3. Create themed collections and style stories
4. Process orders and update shipping status
5. View sales analytics and customer data
6. Respond to customer reviews and inquiries

## Product Categories

PICKFORD-LACE offers a distinctive range of vintage clothing and accessories that blend multiple aesthetics:

- **Western Frontier**: Leather jackets, boots, denim, and rugged accessories with outlaw spirit
- **Mid-Century Modern**: Clean lines, atomic patterns, and space-age influences from the 1950s-60s
- **Showgirl Glamour**: Sequined, beaded, and feathered pieces inspired by Vegas entertainment
- **Punk & DIY**: Edgy, statement pieces with attitude and cultural significance
- **Designer Archive**: Curated high-end vintage from renowned fashion houses
- **Decades**: Spanning 1940s through 1990s with authentic period pieces
- **Condition Grades**: Mint, Excellent, Good, Fair (all clearly described with detailed photos)

## Technical Architecture

### Database Schema
The MongoDB database is structured with the following main collections:
- Users
- Products
- Categories
- Collections
- Orders
- Reviews
- Wishlists
- StyleStories

### API Structure
The GraphQL API provides resolvers for:
- User authentication and profile management
- Product querying with advanced filtering
- Collection curation and display
- Order processing and history
- Review submission and retrieval
- Shopping cart and wishlist management

## Development Process

The development of PICKFORD-LACE followed an iterative approach:

1. **Planning Phase**: Requirements gathering, brand identity development, and system design
2. **Backend Development**: Setting up MongoDB, Apollo Server, and GraphQL schema
3. **Frontend Implementation**: Building React components and Apollo Client integration
4. **E-commerce Features**: Implementing product browsing, cart, and checkout
5. **Content Development**: Creating style stories and collection narratives
6. **Payment Processing**: Integrating Stripe for secure transactions
7. **Testing & Refinement**: User testing and performance optimization
8. **Deployment**: Deploying to Render with CI/CD pipeline

## Future Development

- Mobile application (iOS/Android)
- AR feature to "try on" vintage items
- Virtual styling sessions with fashion experts
- Subscription box service for curated vintage selections
- Vintage authentication certificates
- Community marketplace for peer-to-peer vintage trading
- Enhanced search with visual similarity matching

## Credits & Acknowledgments

- **Developer**: Timothy McGrath - Full-stack development (frontend, backend, database design, deployment)
- **AI Assistance**: Utilized Claude 3.7 and Cody for frontend development guidance and code optimization
- **Backend Tutorial**: Based on the YouTube tutorial series [insert YouTube channel/creator name and link]
- **Technologies**: MongoDB, Express, React, Node.js, Apollo, GraphQL, Stripe
- **Special Thanks**: [Your instructor/advisor] for guidance throughout the development process

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Timothy McGrath - [.email@example.com]

Project Link: [https://github.com/treeewzrd/PICKFORD-LACE](https://github.com/treeewzrd/PICKFORD-LACE)

License
This project is licensed under the MIT License - see the LICENSE file for details.



