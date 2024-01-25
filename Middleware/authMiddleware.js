
const authMiddleware = (req, res, next) => {
    const authToken = req.headers['x-auth-token'];
  
    if (!authToken) {
      return res.status(401).json({ error: 'Unauthorized - X-Auth-Token header missing' });
    }
    if(authToken!="OhYouKnowTheOwner"){
        return res.status(403).json({ error: 'Unauthorized - X-Auth-Token You dont have correct credentials' });
    }
    // You can perform additional authentication logic here
  
    next(); // Call the next middleware in the stack
  };
  
  module.exports = authMiddleware;