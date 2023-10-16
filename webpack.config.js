const path = require('path');

module.exports = {
  entry: {
	'Login' : './javascript/Login.js',
	'Signup' : './javascript/Signup.js',
	'Homepage' : './javascript/Homepage.js',
	'Suppliers' : './javascript/Suppliers.js',
	'Orders' : './javascript/Orders.js',
	'Products' : './javascript/Products.js',
	'OrderSummary' : './javascript/OrderSummary.js',
	'Settings' : './javascript/Settings.js',
	'MyProfile' : './javascript/MyProfile.js',
	'Profile' : './javascript/Profile.js',
	'OrderSum' : './javascript/OrderSum.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};