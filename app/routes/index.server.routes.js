var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'products' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/contact', function(req, res, next) {
  // For now, just log the submitted data to the console
  console.log(req.body);

  // Redirect back to the home page after form submission
  res.redirect('/home');
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});

// Handle the POST request from the contact form
router.post('/submitContactForm', function(req, res, next) {
  console.log(req.body); // This logs the form data to your server console.

  // In real-world scenarios, you'd likely send this data to an email, 
  // save it to a database, etc. But for now, just log to console.

  res.redirect('/home'); // Redirects user back to the Home Page.
});

module.exports = router;
