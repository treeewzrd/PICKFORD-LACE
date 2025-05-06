Pickford & Lace
Vintage Apparel Marketplace
Pickford & Lace is a vintage clothing e-commerce platform inspired by the golden age of Hollywood and named after the iconic Mary Pickford. The application offers a curated collection of vintage apparel that bridges the gap between rags and riches - from delicate lace pieces and frilly feminine garments to rugged menswear including vintage tees, motorcycle gear, boots, and distressed workwear.

Table of Contents
Description
Features
Technologies Used
Badges
Installation
Usage
API Endpoints
Deployment
Team
Future Development
Acknowledgements
Collaboration
License
Description
Pickford & Lace is a full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) and GraphQL. The platform offers a vintage-inspired shopping experience with a focus on unique, curated clothing items that tell a story.

The application features user authentication, product browsing, shopping cart functionality, and a secure checkout process. The vintage aesthetic is reflected in the design, with a nostalgic color palette and typography that evokes the glamour of old Hollywood while maintaining modern usability.

Features
User Authentication: Secure signup and login functionality
Product Browsing: Browse products by category with detailed product pages
Shopping Cart: Add, remove, and update quantities of items in your cart
Responsive Design: Fully responsive layout for all device sizes
Vintage-Inspired UI: Nostalgic design elements that complement the product offerings
Technologies Used
Frontend
React.js
Apollo Client
React Bootstrap
JWT for authentication
CSS Variables for theming
Backend
Node.js
Express.js
Apollo Server
GraphQL
MongoDB with Mongoose
JWT for authentication
Development & Deployment
Git for version control
npm for package management
Render for deployment
Badges
Installation
To run this application locally:

Clone the repository:
git clone https://github.com/treewzrd/PICKFORD---LACE.git
cd PICKFORD---LACE

Install dependencies for both client and server:
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

Create a .env file in the server directory with your MongoDB connection string and JWT secret:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the development servers:
# Start the server
cd server
npm run watch

# In a new terminal, start the client
cd client
npm start

Open your browser and navigate to http://localhost:3000
Usage
Browse Products: View all products or filter by category
Product Details: Click on a product to view detailed information
User Account: Create an account to save your information for faster checkout
Shopping Cart: Add items to your cart and proceed to checkout
Checkout: Complete your purchase with our secure checkout process
API Endpoints
The application uses GraphQL for all data operations. The main GraphQL endpoint is:

/graphql

Key queries and mutations include:

getProducts: Fetch all products or filter by category
getProduct: Fetch a single product by ID
getUser: Fetch the current user's information
login: Authenticate a user
addUser: Create a new user account
addOrder: Create a new order
updateProduct: Update product information
Deployment
The application is deployed on Render:

Live Application: https://pickford-lace.onrender.com
API Endpoint: https://pickford-lace-api.onrender.com/graphql
Team
Timothy McGrath - Full Stack Developer
Future Development
Enhanced Product Filtering: Add more advanced filtering options by size, era, condition, etc.
Wishlist Feature: Allow users to save items to a wishlist for future purchase
Social Sharing: Enable users to share favorite vintage finds on social media
Seller Profiles: Expand the platform to allow vintage sellers to create profiles and list items
Auction Functionality: Add the ability for rare vintage pieces to be sold via auction
Virtual Try-On: Implement AR features for virtual try-on experiences
Vintage Authentication: Add expert authentication for high-value vintage pieces
Acknowledgements
Various tutorial resources that provided guidance and inspiration
[To be updated with specific YouTube tutorials and resources used]
Collaboration
Interested in collaborating on Pickford & Lace? We welcome collaborators who share our passion for vintage fashion and web development. Please feel free to submit a Pull Request or reach out to discuss potential collaborations.

License
This project is licensed under the MIT License - see the LICENSE file for details.



