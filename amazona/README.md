MERN AMAZONA

Introduction
Install Tools 
Create Git Repository 
Listing Products Method 
    1. Create product Array
    2. Add product Image
    3. Render Products
    4. Style Products
Add Routing
    npm i react-router-dom
    create route for home screen
    create router for product screen
Create Node.js Server
    1. run npm init in root folder
    2. update package.json set type: module
    3. Add .js to imports
    4. npm install express
    5. create server .js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / return backend is ready
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start.

    To fetch Product from Backend
        1. set proxy in package.json
        2. nmm install axios
        3. use state hook
        4. use effect hook
        5. use reducer hook
    Manage State By Reducer Hook
        1. define reducer
        2. update fetch reducer
        3. get stat from usReducer
    Add React Bootstrap
        1. npm install react-bootstrap bootstrap
        2. update App.js
    Create Product Details Screen
        1. fetch product from backend
        2. create 3 columns from image, info and action 
Create Product Details Screen
    1. fetch product from backend
    2. create 3 column for image, info and action

Create Loading and Message Component
    1. create loading component 
    2. use spinner component 
    3. create message component 
    4. create utils.js to define getError function

Implement Add To Cart
    1. Create React Context
    2. Define reducer
    3. Create store provider
    4. implement add to cart button click handler 

Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend 

Create Cart Screen

    1. create 2 columns 
    2. display items list
    3. create action column

Complete Cart Screen

    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout 

Create Signin Screen
    1. create Signin Screen
    2. Add email and password
    3. Add signin button

Connect to MongoDB Database
    1. create atlas mongodb database //using cloud database on atlas
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database

Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed model
    4. use route in server.js
    5. seed sample product


Seed Sample Users

    1. create user model
    2. seed sample users
    3. create user routes

Create Signin Backend API
    1. Create signin api
    2. npm install jsonwebtoken
    3. define generateToken

Complete  Signin Screen
    1. handle submit and local action
    2. save token in store and local storage
    3. show user name in header

Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar

Create Sign up Screen
    1. create input forms
    2. handle submit
    3. create backend api

Implement Select Payment Method Screen
    1. create input forms
    2. handle submit 

Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api

Implement Place Order Action
    1. handle place order action
    2. create order create api

Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns

Pay Order By Paypal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PaypalScriptProvider in index.js
    5. use usePayPalScriptReducer in Oder Screen
    6. implement loadPaypalScript funtion
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend 

Display Order History
    1. create order screen
    2. create order screen
    3. use api in the frontend

Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info

Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. Connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables 
    7. Commit and push

