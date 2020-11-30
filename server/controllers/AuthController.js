const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = []) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

class AuthController {

    async store(req, res) {
        var userReq = req.body;
        try {
            if (await User.findOne({ usuario: userReq.usuario }))
                return res.status(400).send({ error: 'User already exists' });

            const user = await User.create(userReq);
            user.senha = undefined;

            return res.send({
                user,
                token: generateToken({ id: user.id })
            });
        }
        catch (err) {
            return res.status(400).send({ error: 'Registration failed' });
        }
    }

    async authenticate(req, res) {
        const { usuario, senha } = req.body;
        const user = await User.findOne({ usuario }).select('+senha');

        if (!user)
            return res.status(400).send({ error: 'User not found' })

        if (!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'Invalid password' });

        user.senha = undefined;

        return res.status(200).send({
            user,
            token: generateToken({ id: user.id })
        });
    }
}

module.exports = new AuthController();