import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

import config from '../config.js';

export async function login(req, res){
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        //Buscar el usuario en la base de datos
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verificar la contraseña
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        //Generar token JWT
        const token = jwt.sign({ username: user.username, rol: user.rol }, config.secretKey, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }    
}
