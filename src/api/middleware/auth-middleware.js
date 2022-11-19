const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else{
        return res.send("<h4>User is not authenticated in the server!</h4>");
    }
}

export { authenticate }