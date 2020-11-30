const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: [true, "O campo usuario e obrigatorio"]
    },
    senha: {
        type: String,
        required: [true, "O campo senha e obrigatorio"]
    },
    tipo: {
        type: String,
        enum: ["cliente", "farmacia"]
    }
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
});

module.exports = mongoose.model("users", UserSchema)