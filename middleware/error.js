const errorMiddleware =  (err, req, res, next) => {
    // console.log("Error");
    const statusCode = res.stausCode ? res.statusCode : 500;
    res.statusCode(statusCode);
    
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack:null});
}

module.exports = errorMiddleware;