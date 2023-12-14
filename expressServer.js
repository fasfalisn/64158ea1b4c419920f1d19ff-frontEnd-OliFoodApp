const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/Login', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/Login/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Login.html')));
			this.app.get('/Signup', (req, res) => res.sendFile(path.join(__dirname,'html','Signup.html')));
			this.app.get('/Signup/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Signup.html')));
			this.app.get('/Customers', (req, res) => res.sendFile(path.join(__dirname,'html','Customers.html')));
			this.app.get('/Customers/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Customers.html')));
			this.app.get('/ConnectCustomers', (req, res) => res.sendFile(path.join(__dirname,'html','ConnectCustomers.html')));
			this.app.get('/ConnectCustomers/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ConnectCustomers.html')));
			this.app.get('/Homepage', (req, res) => res.sendFile(path.join(__dirname,'html','Homepage.html')));
			this.app.get('/Homepage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Homepage.html')));
			this.app.get('/Suppliers', (req, res) => res.sendFile(path.join(__dirname,'html','Suppliers.html')));
			this.app.get('/Suppliers/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Suppliers.html')));
			this.app.get('/Orders', (req, res) => res.sendFile(path.join(__dirname,'html','Orders.html')));
			this.app.get('/Orders/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Orders.html')));
			this.app.get('/Products', (req, res) => res.sendFile(path.join(__dirname,'html','Products.html')));
			this.app.get('/Products/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Products.html')));
			this.app.get('/OrderSummary', (req, res) => res.sendFile(path.join(__dirname,'html','OrderSummary.html')));
			this.app.get('/OrderSummary/:id', (req, res) => res.sendFile(path.join(__dirname,'html','OrderSummary.html')));
			this.app.get('/Settings', (req, res) => res.sendFile(path.join(__dirname,'html','Settings.html')));
			this.app.get('/Settings/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Settings.html')));
			this.app.get('/MyProfile', (req, res) => res.sendFile(path.join(__dirname,'html','MyProfile.html')));
			this.app.get('/MyProfile/:id', (req, res) => res.sendFile(path.join(__dirname,'html','MyProfile.html')));
			this.app.get('/Profile', (req, res) => res.sendFile(path.join(__dirname,'html','Profile.html')));
			this.app.get('/Profile/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Profile.html')));
			this.app.get('/MyProducts', (req, res) => res.sendFile(path.join(__dirname,'html','MyProducts.html')));
			this.app.get('/MyProducts/:id', (req, res) => res.sendFile(path.join(__dirname,'html','MyProducts.html')));
			this.app.get('/NewProduct', (req, res) => res.sendFile(path.join(__dirname,'html','NewProduct.html')));
			this.app.get('/NewProduct/:id', (req, res) => res.sendFile(path.join(__dirname,'html','NewProduct.html')));
			this.app.get('/EditProduct', (req, res) => res.sendFile(path.join(__dirname,'html','EditProduct.html')));
			this.app.get('/EditProduct/:id', (req, res) => res.sendFile(path.join(__dirname,'html','EditProduct.html')));
			this.app.get('/EditOrder', (req, res) => res.sendFile(path.join(__dirname,'html','EditOrder.html')));
			this.app.get('/EditOrder/:id', (req, res) => res.sendFile(path.join(__dirname,'html','EditOrder.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;