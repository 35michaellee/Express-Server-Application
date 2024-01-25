const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next(); // Call the next middleware in the stack
  };
  
  module.exports = loggerMiddleware;