const User = require('../Model/user');

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        const user = await User.findOne({ token: token }).select('account');

        if (user) {
            req.user = user;
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = isAuthenticated;
