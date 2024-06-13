import { getUsers, getUserBy, createUser, updateUser, deleteUser } from '../services/mongo/user-db-services.js';

export async function getAllUsers(req, res) {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

export async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await getUserBy(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function createController(req, res) {
    try {
        const { username, password, rol } = req.body;

        const newuser = await createUser({ username, password, rol });
        await newuser.save();

        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function updateController(req, res) {
    try {
        const userId = req.user.id; // Obtener el ID del usuario autenticado
        const requestedUserId = req.params.id; // Obtener el ID proporcionado en la solicitud
        const isAdmin = req.user.role === 'admin'; // Verificar si el usuario es administrador

        // Verificar si el usuario está intentando modificar su propio perfil
        // o si es un administrador intentando modificar el perfil de otro usuario
        if (!isAdmin && userId !== requestedUserId) {
            return res.status(403).json({ message: 'Solo puedes modificar tu propio perfil' });
        }

        // Verificar si se proporciona algún dato para actualizar
        if (!Object.keys(req.body).length) {
            return res.status(400).json({ message: 'No data provided for update' });
        }

        // Actualizar el usuario en la base de datos
        const updatedUser = await updateUser(requestedUserId, req.body);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function deleteController(req, res) {
    try {
        const userId = req.user.id; // ID del usuario autenticado
        const requestedUserId = req.params.id; // ID del usuario solicitado para eliminar
        const isAdmin = req.user.role === 'admin'; // Verificar si el usuario es administrador

        // Verificar si el usuario está intentando eliminar su propio perfil
        // o si es un administrador intentando eliminar el perfil de otro usuario
        if (!isAdmin && userId !== requestedUserId) {
            return res.status(403).json({ message: 'Solo puedes eliminar tu propio perfil' });
        }

        // Eliminar el usuario en la base de datos
        const deletedUser = await deleteUser(requestedUserId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}