

const express = require ("express");
const router = express.Router();


const arrPosts = require('../data/data'); 

  // Index 
router.get('/', function(req, res) { 

  });
  
  // Show
  router.get('/:id', function(req, res) { 
   
  });
  
  // Store 
  router.post('/', function(req, res) { 
  
  });
  
  // Update 
  router.put('/:id', function(req, res) { 
    
  });
  
  // Destroy 
  router.patch('/:id', function(req, res) { 
    
  });
  
  module.exports = router;