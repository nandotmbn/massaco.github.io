
const rateLimit = require("express-rate-limit");

function isPremium(req) {
    if (req.body.plan !== "free") return true
    else return false
}
  
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: function(req, res) {
        if (isPremium(req)) {
            return 10;
        }
            return 5;
    },
    message: {
        error: "Try again after 1 minute"
    }
})

const newLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 3,
    message: {
        error: "Try again after 1 minute"
    }
})

exports.limiter = limiter
exports.newLimiter = newLimiter;