import express from 'express';
import data from './data.js';

const app = express();  //creating express app (object)

app.get('/api/products/slug/:slug', (req, res) => {        //app object has method has get with two parameters URL(/api/products' and second parameter, function that respond to this api) second parameter is the function that respond to this api when users go to this api we need to return products to the frontend to the user the function accept two parameter (req, res)
    res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }      //sending back data .The frontend// copy file data.js to backend and select data not from frontend but backend 
});     

const port  = process.env.PORT || 5000;          //define port we are going to respond from the backend. process.env.PORT free port but if it does not work we use the default port 5000
app.listen(port, () => {            //app.listen the sever starts and will be ready for responding to the products 
    console.log(`server at http://localhost:${port}`);
})      