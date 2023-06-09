const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');          
/**
 * @description Root Route
 * @method      
 */

route.get('/', services.homeRoutes);


route.get('/', (req, res) =>{
    res.send('Crud Application');

});

//API

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;