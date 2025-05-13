# Pickford & Lace: Vintage Apparel Marketplace

![Pickford & Lace Logo](https://private-user-images.githubusercontent.com/185113154/441101937-189a1d25-5dd9-4bbc-8ebf-e639fafd3f52.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2MDE0ODgsIm5iZiI6MTc0NjYwMTE4OCwicGF0aCI6Ii8xODUxMTMxNTQvNDQxMTAxOTM3LTE4OWExZDI1LTVkZDktNGJiYy04ZWJmLWU2MzlmYWZkM2Y1Mi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwN1QwNjU5NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMGYxZTRlZjNkYmQ2YWFlYzI2Y2U0YjczNzdmYWUwMDAyOWY4NWU5ZDA1ZGQ4NGY2NTc3YmYzZTRlYjgyM2U0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.f-1CGPxwNG2DUZeQpvCO3q_nPbUHoXhhgjskaiS-GLg) <!-- Consider adding a project logo -->

> **Pickford & Lace is a vintage clothing e-commerce platform inspired by the golden age of Hollywood  
> and named after the iconic Mary Pickford. The application offers a curated collection of vintage apparel  
> that bridges the gap between rags and riches - from delicate lace pieces and frilly feminine garments  
> to rugged menswear including vintage tees, motorcycle gear, boots, and distressed workwear.**

![License](https://img.shields.io/badge/License-MIT%20%F0%9F%9A%80%20-%23FF5733?style=flat-square)
![Status](https://img.shields.io/badge/Status-In%20Progress-%23C70039?style=flat-square)
![Deploy](https://img.shields.io/badge/Deployed-Render%20%F0%9F%9A%A8-%232D76C9?style=flat-square)
![Built With](https://img.shields.io/badge/Built%20With-React%20%7C%20Node%20%7C%20MongoDB-%236F42C1?style=flat-square)
![GraphQL](https://img.shields.io/badge/GraphQL-%F0%9F%9A%88%20-%23444444?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-%F0%9F%93%98%20-%234DB33D?style=flat-square)
![Stripe](https://img.shields.io/badge/Stripe-%F0%9F%8F%9D%20-%233D69B0?style=flat-square)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

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

Pickford & Lace Vintage Apparel Marketplace Pickford & Lace is a vintage clothing e-commerce platform inspired by the golden age of Hollywood and named after the iconic Mary Pickford. The application offers a curated collection of vintage apparel that bridges the gap between rags and riches - from delicate lace pieces and frilly feminine garments to rugged menswear including vintage tees, motorcycle gear, boots, and distressed workwear.

## Live Demo

The application is deployed and available at: [Pickford & Lace on Render](https://pickford-and-lace.onrender.com)
)

![Application Screenshot](https://res.cloudinary.com/dswrez3vz/image/upload/IMG_0638_qzuidd.jpg)

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **User Authentication**: Secure account creation and login system
- **Curated Collections**: Themed vintage collections spanning elegant to rugged aesthetics
- **Advanced Filtering**: Browse by era, style, gender, size, and condition
- **Shopping Cart**: Add, remove, and modify items before checkout
- **Secure Checkout**: Integrated with Stripe for safe payment processing
- **Order History**: Track past purchases and delivery status
- **Wishlist System**: Save favorite items for future consideration
- **Style Stories**: Background information on each piece's era and cultural significance
- **User Reviews**: Leave feedback on purchased items
- **Admin Dashboard**: Manage inventory, orders, and user accounts

## Screenshots

![Home Page](https://private-user-images.githubusercontent.com/185113154/441098211-5d8f3646-75f9-498a-b0fe-df18c7fbda98.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2MDA4NDcsIm5iZiI6MTc0NjYwMDU0NywicGF0aCI6Ii8xODUxMTMxNTQvNDQxMDk4MjExLTVkOGYzNjQ2LTc1ZjktNDk4YS1iMGZlLWRmMThjN2ZiZGE5OC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwN1QwNjQ5MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNDc2Y2ZiNjljYWRlNWQ2MzU3YWY2NDdiZjdjZmRiZjcxMDUwODFiMTI5OWMxNzNlODg4MjJiYjBiNTVkOTQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.fP-bhsBipn4GwJQ4uv6IIrX1ll57Targrp-i3euRqIE))
*The main landing page showcasing the range from delicate lace to rugged vintage workwear*

![Product Detail](https://private-user-images.githubusercontent.com/185113154/441098181-f6f8d91f-ed5e-413c-bc79-b33778719136.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2MDA4NDcsIm5iZiI6MTc0NjYwMDU0NywicGF0aCI6Ii8xODUxMTMxNTQvNDQxMDk4MTgxLWY2ZjhkOTFmLWVkNWUtNDEzYy1iYzc5LWIzMzc3ODcxOTEzNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwN1QwNjQ5MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zM2I5NmZlZjhjYzIyNzg2MDZiYTY0YjY5YzAyYzY1YzQ4NGM1M2FiMWRmYmY2ZmU5MTEwM2JjZjRlMWE2ZTVhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.R39w5NZVbeAM00jz6Bv9yQpqqWWmO94oh78P96QWKFQ))
*Detailed product view with multiple images, sizing information, and condition details*

![Shopping Cart](https://private-user-images.githubusercontent.com/185113154/441098231-4d993e9b-71da-43bb-a5f1-f968cafc8833.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY2MDA4NDcsIm5iZiI6MTc0NjYwMDU0NywicGF0aCI6Ii8xODUxMTMxNTQvNDQxMDk4MjMxLTRkOTkzZTliLTcxZGEtNDNiYi1hNWYxLWY5NjhjYWZjODgzMy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwN1QwNjQ5MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNzk3M2Q1NWUxOGIzMDQ0ZmZkZWYwYjY0MTQyNjI4YjRkNzdlZWY0NDI5NDIzZDIxNmY3NjFmODUxMTgxODc5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RWSDy1OBCVaPXnWYM1DI3ggtYADcj1aOaCHCPD2gwXA))
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

### Development

To run the application in development mode:

1. Start the server with nodemon watching for changes:
   ```bash
   cd server
   npm run watch
   ```

2. In a separate terminal, start the client:
   ```bash
   cd client
   npm run start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser

> **Note:** Upon deployment to Render, these commands will be handled by the deployment configuration and you won't need to run them manually.

## Usage

### Customer Experience

1. Explore curated collections of vintage apparel ranging from elegant to rugged
2. Filter products by era, style, gender, size, or price
3. View detailed product information, measurements, and condition notes
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

Pickford & Lace offers a diverse range of vintage clothing and accessories:

- **Golden Age Glamour**: Elegant pieces inspired by Mary Pickford's era and early Hollywood
- **Feminine Vintage**: Delicate lace garments, frilly dresses, and ornate blouses from various decades
- **Menswear Classics**: Well-crafted suits, jackets, and formal attire from different periods
- **Vintage Tees**: Authentic t-shirts from bands, events, and cultural moments
- **Motorcycle Culture**: Leather jackets, boots, and accessories with character and patina
- **Workwear Heritage**: Distressed denim, canvas work jackets, and utility clothing with history
- **Decades**: Spanning 1920s through 1990s with authentic period pieces
- **Accessories**: Jewelry, hats, bags, belts, and other vintage accents
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

The development of Pickford & Lace followed an iterative approach:

1. **Planning Phase**: Requirements gathering, brand identity development, and system design
2. **Backend Development**: Setting up MongoDB, Apollo Server, and GraphQL schema
3. **Frontend Implementation**: Building React components and Apollo Client integration
4. **E-commerce Features**: Implementing product browsing, cart, and checkout
5. **Content Development**: Creating product listings and collection narratives
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
- **AI Assistance**: Utilized Claude 3.7 and Cody for frontend development which is a mess right now
- **Technologies**: MongoDB, Express, React, Node.js, Apollo, GraphQL, Stripe
- **Special Thanks**: [Your instructor/advisor] for guidance throughout the development process

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Timothy McGrath - [your.email@example.com]

Project Link: [https://github.com/treeewzrd/PICKFORD-LACE](https://github.com/treeewzrd/PICKFORD-LACE)
