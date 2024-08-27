//create an object that returns sample products 
import bcrypt from 'bcrypt';

const saltRounds = 10;

const data = {
    users:[
        {
            name: 'Titilayo',
            email: 'abinatitilayo2@gmail.com',
            password: bcrypt.hashSync('123456', saltRounds),
            isAdmin: true

        },
        {
            name: 'John',
            email: 'abinatitilayo1@yahoo.com',
            password: bcrypt.hashSync('123456', saltRounds),
            isAdmin: false,
        }
    ],
    products: [
        {
            // _id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            // _id: '2',
            name: 'Nike Slim dress',
            slug: 'nike-slim-dress',
            category: 'Dress',
            image: '/images/p6.jpg',
            price: 150,
            countInStock: 0,
            brand:'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality shirt', 
        },
        {
            // _id: '3',
            name: 'Adidas trouser',
            slug: 'adidas-slim-trouser',
            category: 'trouser',
            image: '/images/p7.jpg',
            price: 220,
            countInStock: 30,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 30,
            description: 'high quality shirt',
        },
        {
            // _id: '4',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p9.jpg',
            price: 270,
            countInStock: 13,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 24,
            description: 'high quality shirt',
        }
    ],
};

export default data;